import type { ReactNode } from "react";
import { workshopCopy, type WorkshopLocale } from "../lib/watch/workshop-copy";
import { WatchCaptionExercise } from "./WatchCaptionExercise";
import { WatchWorkshopDownloadLink } from "./WatchWorkshopDownloadLink";
import styles from "./WatchCaptionWorkshop.module.css";

// Mark quoted Korean within translated explanations for assistive technology.
function explanation(text: string) {
  return text.split(/([가-힣][가-힣\s.,?!/]*[가-힣.!?])/g).map((part, index) =>
    /[가-힣]/.test(part) ? <span key={index} lang="ko">{part}</span> : part);
}

export function WatchCaptionWorkshop({ sourcePreview, locale }: { sourcePreview: ReactNode; locale: WorkshopLocale }) {
  const copy = workshopCopy[locale];
  return <div className={styles.workshop}>
    <p className={styles.lead}>{copy.lead}</p>
    <a className={styles.textLink} href="#exercise">{copy.jump}</a>
    <div className={styles.sourcePreview}>{sourcePreview}</div>
    <section className={styles.sourceContext} aria-labelledby="source-heading">
      <p className={styles.eyebrow}>{copy.contextLabel}</p>
      <h2 id="source-heading">{copy.contextTitle}</h2>
      {copy.context.map(text => <p key={text}>{text}</p>)}
      <a className={styles.textLink} href="https://www.youtube.com/watch?v=SgD4kKQ6xGM" target="_blank" rel="noreferrer">{copy.sourceLink}</a>
    </section>
    <section id="exercise" aria-labelledby="exercise-heading">
      <div className={styles.sectionHeading}>
        <div><p className={styles.eyebrow}>{copy.exerciseLabel}</p><h2 id="exercise-heading">{copy.exerciseTitle.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h2></div>
        <span className={styles.pill}>{copy.originalLabel}</span>
      </div>
      <p className={styles.disclosure}>{copy.disclosure}</p>
      <WatchCaptionExercise copy={copy.exercise} dialogueLabel={copy.originalLabel} />
      <noscript><p>{copy.noScript}</p></noscript>
      <div className={styles.decisionGrid}>
        {copy.decisions.map(decision => <section key={decision.label}><span>{decision.label}</span><h3>{decision.title}</h3>{decision.paragraphs.map(text => <p key={text}>{explanation(text)}</p>)}</section>)}
      </div>
      <div className={styles.practiceFiles}>
        <div><h3>{copy.filesTitle}</h3><p>{copy.filesBody}</p></div>
        <div className={styles.fileLinks}>
          <a href="/practice/stage5-original-practice.en.srt" download="stage5-original-practice.en.srt">{copy.englishFile}</a>
          <a href="/practice/stage5-original-practice.ko.srt" download="stage5-original-practice.ko.srt">{copy.koreanFile}</a>
        </div>
      </div>
    </section>
    <section className={styles.workflow} aria-labelledby="workflow-heading">
      <p className={styles.eyebrow}>{copy.workflowLabel}</p>
      <h2 id="workflow-heading">{copy.workflowTitle}</h2>
      {copy.workflow.map(text => <p key={text}>{text}</p>)}
      <WatchWorkshopDownloadLink locale={locale} label={copy.download} />
      <p className={styles.subtle}>{copy.downloadNote}</p>
    </section>
  </div>;
}
