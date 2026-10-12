"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type {} from "../lib/analytics";
import { analyticsConsentCopy } from "../lib/analytics-consent-copy";
import { localeFromPathname } from "../lib/locales";
import { isPrivateEditorPathname, isPrivacyPathname } from "../lib/third-party-script-bootstrap";
import styles from "./AnalyticsConsent.module.css";

export function AnalyticsConsent() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = analyticsConsentCopy[locale];
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState<"saved" | "temporary" | null>(null);
  const button = useRef<HTMLButtonElement>(null);
  const privatePage = isPrivateEditorPathname(pathname);

  useEffect(() => {
    function sync() {
      setReady(!!window.stage5AnalyticsConsent);
      setOpen(window.stage5AnalyticsConsent?.getChoice() === null && !isPrivacyPathname(pathname) && !privatePage);
    }
    sync();
    window.addEventListener("stage5-consent-change", sync);
    return () => window.removeEventListener("stage5-consent-change", sync);
  }, [pathname, privatePage]);

  function choose(value: "granted" | "denied") {
    const result = window.stage5AnalyticsConsent?.choose(value);
    if (!result) return;
    setNotice(result.saved ? "saved" : "temporary");
    setOpen(false);
    button.current?.focus();
  }

  if (!ready || privatePage) return null;
  return (
    <aside className={styles.root} aria-label={copy.settings}>
      {open ? (
        <section className={styles.card} aria-labelledby="analytics-choice-title"
          onKeyDown={(event) => { if (event.key === "Escape") { setOpen(false); button.current?.focus(); } }}>
          <div className={styles.heading}>
            <h2 id="analytics-choice-title">{copy.title}</h2>
            <button className={styles.close} aria-label={copy.close} onClick={() => { setOpen(false); button.current?.focus(); }}>×</button>
          </div>
          <p>{copy.body}</p>
          <a href={`${locale === "en" ? "" : `/${locale}`}/privacy#website-analytics`}>{copy.policy}</a>
          <div className={styles.actions}>
            <button onClick={() => choose("denied")}>{copy.reject}</button>
            <button onClick={() => choose("granted")}>{copy.allow}</button>
          </div>
        </section>
      ) : null}
      {notice ? <p className={styles.notice} role="status">{copy[notice]}</p> : null}
      <button ref={button} className={styles.reopen} aria-expanded={open}
        onClick={() => { setNotice(null); setOpen(!open); }}>{copy.settings}</button>
    </aside>
  );
}
