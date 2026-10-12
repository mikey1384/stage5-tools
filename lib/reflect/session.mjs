export const FLOW_PAUSE_MS = 10_000;
export const MIN_REFLECTION_LENGTH = 50;
export const MAX_DRAFT_LENGTH = 20_000;
export const PROMPT = 'What small moment from today would you like to keep?';

// This model handles local writing only. It has no AI, account or request API.
export class WritingSession {
  constructor(mode = 'at_my_pace', text = '') {
    if (!['at_my_pace', 'flow'].includes(mode)) throw new Error('Unknown writing style');
    this.mode = mode;
    this.text = text;
    this.phase = 'writing';
    this.lastEditAt = null;
    this.compositionBase = null;
    this.reason = null;
  }
  get length() { return this.text.trim().length; }
  get canFinish() { return this.length >= MIN_REFLECTION_LENGTH; }
  get composing() { return this.compositionBase !== null; }
  beginComposition() {
    if (this.phase === 'writing') this.compositionBase = this.text;
  }
  change(next, inputType, now) {
    if (this.phase !== 'writing' || typeof next !== 'string' || next.length > MAX_DRAFT_LENGTH || !Number.isFinite(now)) return false;
    if (this.mode === 'flow') {
      if (/paste|drop|history|cut/i.test(inputType || '')) return false;
      const prefix = this.composing ? this.compositionBase : this.text;
      if (!next.startsWith(prefix)) return false;
    }
    if (next === this.text) return true;
    this.text = next;
    this.lastEditAt = now;
    return true;
  }
  endComposition(now) {
    if (this.composing && Number.isFinite(now)) this.lastEditAt = this.text ? now : null;
    this.compositionBase = null;
  }
  remaining(now) {
    if (this.mode !== 'flow' || this.phase !== 'writing' || this.lastEditAt === null || this.composing) return null;
    return Math.max(0, FLOW_PAUSE_MS - (now - this.lastEditAt));
  }
  tick(now) {
    if (this.remaining(now) === 0) return this.finish('pause');
    return false;
  }
  finish(reason = 'manual') {
    if (this.phase !== 'writing' || this.composing || (reason === 'manual' && !this.canFinish)) return false;
    this.phase = 'finished';
    this.reason = reason;
    return true;
  }
  interrupt() {
    if (this.mode !== 'flow' || this.phase !== 'writing' || !this.text) return false;
    this.compositionBase = null;
    return this.finish('interrupted');
  }
}

export function readDraft(storage, key) {
  const raw = storage.getItem(key);
  if (raw === null) return null;
  const draft = JSON.parse(raw);
  if (draft?.version !== 1 || draft.mode !== 'at_my_pace' || draft.prompt !== PROMPT || typeof draft.text !== 'string' || !draft.text.trim() || draft.text.length > MAX_DRAFT_LENGTH) throw new Error('Invalid saved draft');
  return draft;
}

export function saveDraft(storage, key, session) {
  if (session.mode !== 'at_my_pace' || !session.text.trim() || session.text.length > MAX_DRAFT_LENGTH) throw new Error('Draft cannot be saved');
  const draft = {version: 1, mode: session.mode, prompt: PROMPT, text: session.text};
  const value = JSON.stringify(draft);
  storage.setItem(key, value);
  if (storage.getItem(key) !== value) throw new Error('Draft save was not confirmed');
  return draft;
}
