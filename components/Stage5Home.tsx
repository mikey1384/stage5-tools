import Link from "next/link";
import Image from "next/image";
import { LanguageMenu } from "./LanguageMenu";
import { Stage5Brand } from "./Stage5Brand";
import { EchoAppStoreLink } from "./EchoAppStoreButton";
import { HOME_LOCALIZED_LOCALES, localizePathForLocale, type Locale } from "../lib/locales";
import { buildMetadata } from "../lib/seo";
import { STAGE5_ORIGIN, TRANSLATOR_ORIGIN } from "../lib/site-routing";
import { reflectCopy } from "../lib/reflect/copy";
import { portfolioCopy } from "../lib/portfolio-copy";
import { t } from "../lib/strings";
import "./stage5-portfolio.css";

export function getStage5HomeMetadata(locale: Locale) {
  const c = portfolioCopy[locale];
  const metadata = buildMetadata({ title: `Stage5 — ${c.title.replace("\n", " ")}`, description: c.description, path: "/", keywords: ["Stage5", "Translator", "Echo"], locale, availableLocales: HOME_LOCALIZED_LOCALES, origin: STAGE5_ORIGIN });
  // Retain the existing social-card asset until a separate replacement is prepared.
  return metadata;
}

export function Stage5Home({ locale }: { locale: Locale }) {
  const c = portfolioCopy[locale];
  const href = (path: string) => localizePathForLocale(locale, path);
  return <div className="s5-portfolio">
    <header className="s5-header s5-wrap"><Stage5Brand href={href("/")} /><nav aria-label="Stage5"><a href="#products">{c.navProducts}</a><a href="#experiences">{c.navTry}</a><LanguageMenu supportedLocales={HOME_LOCALIZED_LOCALES} /></nav></header>
    <main className="s5-wrap">
      <section className="s5-intro"><p className="s5-eyebrow">{c.eyebrow}</p><h1>{c.title}</h1><p className="s5-intro-copy">{c.intro}</p></section>
      <section id="products" aria-labelledby="products-title"><div className="s5-section-heading"><h2 id="products-title">{c.products}</h2><span>{c.possibilities}</span></div><div className="s5-product-grid">
        <article className="s5-product-card"><div className="s5-product-top"><span>01 / {c.translatorCategory}</span><span>Mac · Windows</span></div><div className="s5-product-copy"><h3>Translator</h3><p>{c.translatorTagline}</p><div>{c.translatorDescription}</div></div><div className="s5-product-visual s5-translator-visual"><Image src="/screenshots/multitab-workspace-2026-08.webp" width={2400} height={1440} sizes="(max-width: 760px) 90vw, 45vw" alt={c.translatorAlt} /></div><div className="s5-product-actions"><Link className="s5-button" href={href("/watch")}>{c.exploreWatch} <span aria-hidden="true">↗</span></Link><a className="s5-text-link" href={`${TRANSLATOR_ORIGIN}${href("/")}`}>{c.getTranslator} <span aria-hidden="true">↗</span></a></div></article>
        <article className="s5-product-card"><div className="s5-product-top"><span>02 / {c.echoCategory}</span><span>iPhone · iPad</span></div><div className="s5-product-copy"><h3><Link href={href("/echo")}>Echo</Link></h3><p>{c.echoTagline}</p><div>{c.echoDescription}</div></div><div className="s5-product-visual s5-echo-visual"><Image src="/screenshots/echo-at-my-pace-web-1.0.7.webp" width={1320} height={2868} sizes="155px" alt={c.echoAlt} /></div><div className="s5-product-actions"><a className="s5-button" href={href("/reflect")}>{c.tryEcho} <span aria-hidden="true">→</span></a><EchoAppStoreLink trackingLabel="portfolio_echo" className="s5-text-link" ariaLabel={c.appLink}>{c.getEcho} <span aria-hidden="true">↗</span></EchoAppStoreLink><p className="echo-release-note">{reflectCopy[locale].release}</p><Link className="s5-detail-link" href={href("/echo")}>{c.aboutEcho} <span aria-hidden="true">→</span></Link></div></article>
      </div></section>
      <section id="experiences" className="s5-experiences" aria-labelledby="experiences-title"><div><p className="s5-eyebrow">{c.missionLabel}</p><h2 id="experiences-title">{c.missionTitle}</h2><p>{c.missionBody}</p></div><div className="s5-experience-links"><Link href={href("/watch")}><span><strong>Watch</strong><small>{c.watchDescription}</small></span><span aria-hidden="true">↗</span></Link><a href={href("/reflect")}><span><strong>Reflect</strong><small>{c.reflectDescription}</small></span><span aria-hidden="true">→</span></a></div></section>
    </main>
    <footer className="s5-footer s5-wrap"><span>Stage5 Tools LLC</span><span>{c.footer}</span><div><a href={`${TRANSLATOR_ORIGIN}${href("/privacy")}`}>{t("footerPrivacy", locale)}</a><a href={`${TRANSLATOR_ORIGIN}${href("/terms")}`}>{t("footerTerms", locale)}</a><a href="mailto:mikey@stage5.tools">{c.hello} <span aria-hidden="true">↗</span></a></div></footer>
  </div>;
}
