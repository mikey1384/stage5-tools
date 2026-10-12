"use client";

import { useState } from "react";
import styles from "./WatchCaptionWorkshop.module.css";

import { workshopCues as cues, type WorkshopExerciseCopy } from "../lib/watch/workshop-copy";

export function WatchCaptionExercise({ copy, dialogueLabel }: { copy: WorkshopExerciseCopy; dialogueLabel: string }) {
  const [mode, setMode] = useState<"literal" | "edited">("edited");
  const [cueIndex, setCueIndex] = useState(0);
  const [answer, setAnswer] = useState<"literal" | "meaning" | null>(null);
  const cue = cues[cueIndex];

  return (
    <div className={styles.exerciseGrid}>
      <section className={styles.dialogue} aria-label={dialogueLabel}>
        <p className={styles.eyebrow}>{copy.readFirst}</p>
        <p><b>A</b><span lang="en">“I’m on the fence.”</span></p>
        <p><b>B</b><span lang="en">“About the trip?”</span></p>
        <p><b>A</b><span lang="en">“Yes. I want to go, but I’m not sure I can take Friday off.”</span></p>
        <div className={styles.prompt}>
          <strong>{copy.question}</strong>
          <div className={styles.choices} role="group" aria-label={copy.choicesLabel}>
            <button type="button" aria-pressed={answer === "literal"} onClick={() => setAnswer("literal")}>{copy.literalChoice}</button>
            <button type="button" aria-pressed={answer === "meaning"} onClick={() => setAnswer("meaning")}>{copy.meaningChoice}</button>
          </div>
          <p className={styles.answer} role="status">
            {answer === "meaning" ? copy.meaningFeedback : answer === "literal" ? copy.literalFeedback : copy.unanswered}
          </p>
        </div>
      </section>
      <section className={styles.captionCard} aria-label={copy.previewLabel}>
        <div className={styles.captionHeading}><span>{copy.previewTitle}</span><span>{cue.time}</span></div>
        <p className={styles.captionSource} lang="en">{cue.source}</p>
        <p className={styles.captionText} lang="ko" aria-live="polite">{cue[mode]}</p>
        <div className={styles.mode} role="group" aria-label={copy.modeLabel}>
          <button type="button" aria-pressed={mode === "literal"} onClick={() => setMode("literal")}>{copy.literalMode}</button>
          <button type="button" aria-pressed={mode === "edited"} onClick={() => setMode("edited")}>{copy.editedMode}</button>
        </div>
        <label className={styles.cueLabel} htmlFor="practice-cue">{copy.cueLabel} <span>{cueIndex + 1} / 3</span></label>
        <input id="practice-cue" type="range" min="0" max="2" step="1" value={cueIndex}
          aria-valuetext={`${copy.cue} ${cueIndex + 1}: ${cue.source}`}
          onChange={(event) => setCueIndex(Number(event.target.value))} />
        <p className={styles.captionFoot}>{copy.footnote}</p>
      </section>
    </div>
  );
}
