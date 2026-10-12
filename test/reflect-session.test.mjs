import test from 'node:test';
import assert from 'node:assert/strict';
import {WritingSession, readDraft, saveDraft, PROMPT, MAX_DRAFT_LENGTH} from '../lib/reflect/session.mjs';

const reflection = 'I stopped by the river and watched the evening light for a moment.';
test('At my pace supports editing and never expires while the writer pauses', () => {
  const s = new WritingSession();
  assert.equal(s.change(reflection, 'insertText', 100), true);
  assert.equal(s.change('A different thought', 'insertFromPaste', 200), true);
  assert.equal(s.change('A different', 'deleteContentBackward', 300), true);
  assert.equal(s.tick(999999), false);
  assert.equal(s.phase, 'writing');
  assert.equal(s.finish(), false);
  s.change(reflection, 'insertText', 1000000);
  assert.equal(s.finish(), true);
  assert.equal(s.text, reflection);
});
test('Flow refuses rewriting, deletion and paste without losing accepted words', () => {
  const s = new WritingSession('flow');
  s.change('Today I', 'insertText', 100);
  for (const [text, type] of [['Today','deleteContentBackward'],['Yesterday I','insertText'],['Today I copied this','insertFromPaste']]) {
    assert.equal(s.change(text, type, 200), false);
    assert.equal(s.text, 'Today I');
  }
  assert.equal(s.change('Today I noticed', 'insertText', 300), true);
  assert.equal(s.lastEditAt, 300);
});
test('Flow starts with typing, resets on an accepted edit, and ends only once', () => {
  const s = new WritingSession('flow');
  assert.equal(s.tick(300000), false);
  s.change('A', 'insertText', 100);
  assert.equal(s.tick(10099), false);
  s.change('A moment', 'insertText', 10100);
  assert.equal(s.tick(20099), false);
  assert.equal(s.tick(20100), true);
  assert.equal(s.reason, 'pause');
  assert.equal(s.text, 'A moment');
  assert.equal(s.tick(90000), false);
  assert.equal(s.change('A moment later', 'insertText', 21000), false);
});
test('IME composition can revise its own tail and cannot erase earlier Flow text', () => {
  const s = new WritingSession('flow');
  s.change('오늘 ', 'insertText', 100);
  s.beginComposition();
  assert.equal(s.change('오늘 ㅎ', 'insertCompositionText', 200), true);
  assert.equal(s.change('오늘 하', 'insertCompositionText', 300), true);
  assert.equal(s.change('다른 문장', 'insertCompositionText', 400), false);
  assert.equal(s.tick(40000), false);
  assert.equal(s.finish(), false);
  s.change('오늘 하늘', 'insertCompositionText', 41000);
  s.endComposition(41001);
  assert.equal(s.text, '오늘 하늘');
  assert.equal(s.tick(51000), false);
  assert.equal(s.tick(51001), true);
});
test('cancelling initial composition does not create an empty timed result', () => {
  const s = new WritingSession('flow');
  s.beginComposition();
  s.change('ㅎ', 'insertCompositionText', 1);
  s.change('', 'deleteCompositionText', 2);
  s.endComposition(3);
  assert.equal(s.tick(20000), false);
  assert.equal(s.text, '');
});
test('leaving a Flow session preserves writing; At my pace can stay open', () => {
  const s = new WritingSession('flow');
  s.change(reflection, 'insertText', 100);
  assert.equal(s.interrupt(), true);
  assert.equal(s.text, reflection);
  assert.equal(s.reason, 'interrupted');
  const relaxed = new WritingSession('at_my_pace', reflection);
  assert.equal(relaxed.interrupt(), false);
  assert.equal(relaxed.phase, 'writing');
});
function storage() {
  const entries = new Map();
  return {getItem: key => entries.get(key) ?? null, setItem: (key,value) => entries.set(key,value)};
}
test('only an explicit untimed save is persisted and can be resumed exactly', () => {
  const local = storage();
  const s = new WritingSession('at_my_pace', reflection);
  assert.equal(readDraft(local, 'draft'), null);
  saveDraft(local, 'draft', s);
  assert.deepEqual(readDraft(local, 'draft'), {version:1,mode:'at_my_pace',prompt:PROMPT,text:reflection});
  assert.throws(() => saveDraft(local, 'other', new WritingSession('flow', reflection)));
  assert.equal(local.getItem('other'), null);
});
test('storage failure or unconfirmed write never signals a successful save', () => {
  const s = new WritingSession('at_my_pace', reflection);
  assert.throws(() => saveDraft({setItem:()=>{throw new Error('Unavailable');}}, 'draft', s));
  assert.throws(() => saveDraft({setItem:()=>{},getItem:()=>null}, 'draft', s));
  assert.equal(s.text, reflection);
  assert.equal(s.phase, 'writing');
});
test('malformed, wrong-prompt and oversized saved data is rejected', () => {
  const local = storage();
  for(const value of ['{broken',JSON.stringify({version:1,mode:'flow',prompt:PROMPT,text:reflection}),JSON.stringify({version:1,mode:'at_my_pace',prompt:'Other',text:reflection}),JSON.stringify({version:1,mode:'at_my_pace',prompt:PROMPT,text:'x'.repeat(MAX_DRAFT_LENGTH+1)})]) {
    local.setItem('draft', value);
    assert.throws(()=>readDraft(local,'draft'));
    assert.equal(local.getItem('draft'),value);
  }
});
