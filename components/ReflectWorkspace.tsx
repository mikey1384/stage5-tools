"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import { BookOpen, ArrowRight, LockKeyhole } from "lucide-react";
import { WritingSession, readDraft, saveDraft } from "../lib/reflect/session.mjs";
import type { ReflectCopy } from "../lib/reflect/copy";
import type { Locale } from "../lib/locales";
import { ECHO_APP_STORE_URL } from "./EchoAppStoreButton";
import { demoDownloadCopy } from "../lib/demo-download-copy";

type Confirm = { title: string; copy: string; label: string; action: () => void };
export function ReflectWorkspace({ locale, copy: c }: { locale: Locale; copy: ReflectCopy }) {
  const download = demoDownloadCopy[locale];
  const model = useRef(new WritingSession());
  const [, redraw] = useReducer((n: number) => n + 1, 0);
  const session = model.current;
  const editor = useRef<HTMLTextAreaElement>(null);
  const resultTitle = useRef<HTMLHeadingElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const cancel = useRef<HTMLButtonElement>(null);
  const confirmTrigger = useRef<HTMLElement | null>(null);
  const savedText = useRef<string | null>(null);
  const [saved, setSaved] = useState<{ text: string } | null>(null);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState("");
  const [saveMessage, setSaveMessage] = useState({ text: "", error: false });
  const [confirm, setConfirm] = useState<Confirm | null>(null);
  const draftKey = `stage5-reflect-draft-v1:${locale}`;
  const count = (template: string, value: number) => template.replace("{count}", new Intl.NumberFormat(locale).format(value));
  const focusEditor = () => requestAnimationFrame(() => editor.current?.focus());
  const feedback = (text: string, error = false) => setSaveMessage({ text, error });
  const ask = (value: Confirm) => { confirmTrigger.current = document.activeElement as HTMLElement | null; setConfirm(value); };
  const dismiss = () => { setConfirm(null); requestAnimationFrame(() => confirmTrigger.current?.focus()); };

  useEffect(() => {
    setReady(true);
    try { setSaved(readDraft(window.localStorage, draftKey)); }
    catch { feedback(c.loadError, true); }
    const leaving = (event: BeforeUnloadEvent) => {
      const current = model.current;
      if (current.text && current.text !== savedText.current) { event.preventDefault(); event.returnValue = ""; }
    };
    const visibility = () => { if (document.hidden && model.current.interrupt()) redraw(); };
    window.addEventListener("beforeunload", leaving);
    document.addEventListener("visibilitychange", visibility);
    const interval = window.setInterval(() => {
      const current = model.current;
      if (current.phase !== "writing" || current.mode !== "flow") return;
      current.tick(performance.now()); redraw();
    }, 200);
    return () => { window.clearInterval(interval); window.removeEventListener("beforeunload", leaving); document.removeEventListener("visibilitychange", visibility); };
  }, [draftKey, c.loadError]);
  useEffect(() => { if (session.phase === "finished") resultTitle.current?.focus(); }, [session.phase]);
  useEffect(() => {
    if (confirm && !dialog.current?.open) { dialog.current?.showModal(); cancel.current?.focus(); }
    else if (!confirm && dialog.current?.open) dialog.current.close();
  }, [confirm]);

  const moveToEnd = () => {
    if (model.current.mode === "flow" && !model.current.composing && editor.current) {
      editor.current.setSelectionRange(editor.current.value.length, editor.current.value.length);
    }
  };
  const updateText = (value: string, inputType = "insertText") => {
    if (!model.current.change(value, inputType, performance.now())) { setNotice(c.flowEdit); if (editor.current) editor.current.value = model.current.text; moveToEnd(); }
    else { setNotice(""); feedback(""); }
    redraw();
  };
  const resume = () => {
    if (!saved) return;
    model.current = new WritingSession("at_my_pace", saved.text);
    savedText.current = saved.text;
    setNotice(""); feedback(""); redraw(); focusEditor();
  };
  const save = () => {
    try { const value = saveDraft(window.localStorage, draftKey, model.current); setSaved(value); savedText.current = model.current.text; feedback(c.saveSuccess); }
    catch { feedback(c.draftError, true); }
  };
  const deleteSaved = () => ask({ title: c.deleteTitle, copy: c.deleteCopy, label: c.deleteDraft, action: () => {
    try { localStorage.removeItem(draftKey); if (localStorage.getItem(draftKey) !== null) throw new Error("Unconfirmed"); setSaved(null); savedText.current = null; feedback(c.deleted); }
    catch { feedback(c.draftError, true); }
  } });
  const newReflection = () => ask({ title: c.startTitle, copy: c.startCopy, label: c.startButton, action: () => {
    model.current = new WritingSession(model.current.mode); setNotice(""); feedback(""); redraw(); focusEditor();
  } });
  const remaining = ready ? session.remaining(performance.now()) : null;
  const timerText = session.composing ? c.timerWriting : remaining === null ? c.timerStart : count(c.timer, Math.ceil(remaining / 1000));

  return <>
    <div className="reflection-workspace">
      <aside className="prompt-panel" aria-labelledby="prompt-title"><div className="prompt-topline"><span className="sample-label">{c.sample}</span><span className="prompt-arrow" aria-hidden="true">↘</span></div><h2 id="prompt-title">{c.prompt}</h2><div className="prompt-footnote"><span className="prompt-rule" aria-hidden="true"/><p>{c.hint}</p><span className="prompt-signature">Echo / Reflect</span></div></aside>
      <div className="writing-main">
        <aside className="saved-banner" hidden={!saved || session.phase !== "writing"}><div><strong>{c.saved}</strong><p>{c.savedWhere}</p></div><button className="button secondary" onClick={() => {
          if (session.text && session.text !== saved?.text) ask({ title: c.resumeTitle, copy: c.resumeCopy, label: c.resume, action: resume }); else resume();
        }}>{c.resume}</button><button className="text-button" onClick={deleteSaved}>{c.deleteDraft}</button></aside>
        <section className="writing-sheet" aria-labelledby="prompt-title" hidden={session.phase !== "writing"}>
          <fieldset disabled={!ready || session.text.length > 0} aria-describedby="mode-help"><legend>{c.rhythm}</legend><div className="mode-options">{(["at_my_pace", "flow"] as const).map(mode => <label key={mode}><input type="radio" name="mode" value={mode} checked={session.mode === mode} onChange={() => { if (model.current.text) return; model.current = new WritingSession(mode); setNotice(""); redraw(); }}/><span className={`mode-card ${mode === "flow" ? "flow-card" : "pace-card"}`}><span className="mode-card-top">{mode === "flow" ? <ArrowRight className="mode-icon" size={24} aria-hidden="true"/> : <BookOpen className="mode-icon" size={24} aria-hidden="true"/>}<span className="mode-indicator" aria-hidden="true"/></span><strong>{mode === "flow" ? c.flow : c.pace}</strong><span className="mode-description">{mode === "flow" ? c.flowShort : c.paceShort}</span></span></label>)}</div><p id="mode-help">{session.mode === "flow" ? c.flowHelp : c.paceHelp}{session.text ? ` ${c.modeLocked}` : ""}</p></fieldset>
          <div className="editor-paper"><div className="editor-topline"><label htmlFor="reflection">{c.writing}</label><span className={`timer ${remaining !== null && remaining < 4000 ? "ending" : ""}`} hidden={session.mode !== "flow"}>{timerText}</span></div>
            <textarea id="reflection" ref={editor} rows={8} maxLength={20000} value={session.text} disabled={!ready} placeholder={c.placeholder} aria-describedby="mode-help draft-help minimum-help" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
              onChange={event => updateText(event.currentTarget.value, (event.nativeEvent as InputEvent).inputType)} onClick={moveToEnd}
              onKeyDown={event => { if (session.mode === "flow" && !session.composing && !(event.nativeEvent as KeyboardEvent).isComposing && ["Backspace", "Delete", "ArrowLeft", "ArrowUp", "Home"].includes(event.key)) { event.preventDefault(); setNotice(c.flowEdit); } }}
              onPaste={event => { if (session.mode === "flow") { event.preventDefault(); setNotice(c.flowEdit); } }} onDrop={event => { if (session.mode === "flow") { event.preventDefault(); setNotice(c.flowEdit); } }} onCut={event => { if (session.mode === "flow") { event.preventDefault(); setNotice(c.flowEdit); } }}
              onCompositionStart={() => { moveToEnd(); model.current.beginComposition(); redraw(); }} onCompositionEnd={event => { updateText(event.currentTarget.value, "insertCompositionText"); model.current.endComposition(performance.now()); redraw(); }}/>
            <div className="editor-meta"><span>{count(c.characters, session.text.length)}</span><span id="minimum-help">{session.canFinish ? c.ready : count(c.minimum, session.length)}</span></div>
          </div>
          <p className="input-notice" role="status" aria-live="polite">{notice}</p>
          <div className="writing-actions"><button className="button primary" disabled={!ready || !session.canFinish || session.composing} aria-describedby="minimum-help" onClick={() => { if (session.finish()) redraw(); }}>{c.finish}<span aria-hidden="true">↗</span></button><button className="button secondary" hidden={session.mode === "flow"} disabled={!ready || !session.text.trim() || session.composing} aria-describedby="draft-help" onClick={save}>{c.save}</button></div>
          <p id="draft-help" className="privacy-note"><LockKeyhole size={16} aria-hidden="true"/><span>{c.privacy}</span></p><p className={`save-status ${saveMessage.error ? "error" : ""}`} role="status" aria-live="polite">{saveMessage.text}</p>
        </section>
        <section className="writing-sheet result-sheet" aria-labelledby="result-title" hidden={session.phase !== "finished"}>
          <div className="result-top"><span className="result-symbol" aria-hidden="true">✓</span><div><p className="eyebrow">{session.mode === "flow" ? c.flow : c.pace}</p><h2 id="result-title" ref={resultTitle} tabIndex={-1}>{c.resultTitle}</h2></div></div><p>{session.reason === "pause" ? c.resultPause : session.reason === "interrupted" ? c.resultInterrupted : c.resultComplete}</p>
          <div className="original-label">{c.original}</div><div className="original-writing">{session.text}</div><p className="result-length">{count(c.characters, session.text.length)}{!session.canFinish ? ` · ${c.tooShort}` : ""}</p>
          <div className="feedback-boundary"><button className="button secondary" disabled aria-describedby="feedback-note">{c.feedback}</button><p id="feedback-note">{c.feedbackNote}</p></div>
          <div className="result-download"><h3>{download.echoTitle}</h3><p>{download.echoBody}</p><div className="result-actions"><a className="button primary" href={ECHO_APP_STORE_URL} target="_blank" rel="noopener noreferrer">{download.echoLabel} <span aria-hidden="true">↗</span></a><button className="button secondary" onClick={newReflection}>{c.again}</button></div></div><p className="privacy-note">{c.release}</p>
        </section>
        <noscript><p className="no-script">{c.noScript}</p></noscript>
      </div>
    </div>
    <dialog ref={dialog} aria-labelledby="confirm-title" onCancel={() => setConfirm(null)}><h2 id="confirm-title">{confirm?.title}</h2><p>{confirm?.copy}</p><div className="dialog-actions"><button ref={cancel} className="button secondary" onClick={dismiss}>{c.cancel}</button><button className="button primary" onClick={() => { const action = confirm?.action; setConfirm(null); action?.(); }}>{confirm?.label}</button></div></dialog>
  </>;
}
