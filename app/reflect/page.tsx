/* eslint-disable @next/next/no-html-link-for-pages -- Full navigation isolates the private editor and policy pages from inherited analytics. */
import type { Metadata } from "next";
import { getLocale } from "../../lib/get-locale";
import { buildMetadata } from "../../lib/seo";
import { STAGE5_ORIGIN } from "../../lib/site-routing";
import { HOME_LOCALIZED_LOCALES, localizePathForLocale } from "../../lib/locales";
import { demoDownloadCopy } from "../../lib/demo-download-copy";
import { reflectCopy } from "../../lib/reflect/copy";
import { ReflectWorkspace } from "../../components/ReflectWorkspace";
import { LanguageMenu } from "../../components/LanguageMenu";
import { ECHO_APP_STORE_URL } from "../../components/EchoAppStoreButton";
import "../../components/reflect.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale(); const c = reflectCopy[locale];
  const meta = buildMetadata({ title: `Reflect — ${c.title} | Echo by Stage5`, description: c.aboutCopy, path: "/reflect", keywords: ["Echo", "Reflect"], locale, availableLocales: HOME_LOCALIZED_LOCALES, origin: STAGE5_ORIGIN });
  // Reuse Echo's existing artwork instead of inheriting Translator imagery.
  const image = `${STAGE5_ORIGIN}/echo/opengraph-image`;
  return { ...meta, openGraph: { ...meta.openGraph, images: [image] }, twitter: { ...meta.twitter, images: [image] } };
}
export default async function ReflectPage() {
  const locale = await getLocale(); const c = reflectCopy[locale]; const download = demoDownloadCopy[locale];
  const home = localizePathForLocale(locale, "/");
  return <div className="reflect">
    <header className="site-header wrap"><a className="echo-wordmark" href={localizePathForLocale(locale, "/echo")} aria-label="Echo"><span aria-hidden="true">◎</span> echo</a><div className="reflect-navigation"><a className="by-stage5" href={home}>{c.back}</a><LanguageMenu className="echo-language-menu" supportedLocales={HOME_LOCALIZED_LOCALES}/><a className="button primary reflect-download-link" href={ECHO_APP_STORE_URL} target="_blank" rel="noopener noreferrer">{download.echoLabel} <span aria-hidden="true">↗</span></a></div></header>
    <main className="writing-layout wrap"><div className="writing-heading"><div><p className="eyebrow">REFLECT / ECHO</p><h1>{c.title}</h1></div><p>{c.intro}</p></div><ReflectWorkspace locale={locale} copy={c}/>
      <aside className="writing-notes" aria-label={c.about}><details><summary>{c.rulesTitle}<span aria-hidden="true">+</span></summary><p>{c.rules}</p></details><details><summary>{c.about}<span aria-hidden="true">+</span></summary><p>{c.aboutCopy}</p><p>{c.release}</p></details></aside>
    </main><footer className="site-footer wrap"><span>Echo by Stage5</span><div className="reflect-footer-links"><a href="/echo/support">{c.support}</a><a href="/echo/privacy">{c.appPrivacy}</a><a href="/echo/terms">{c.terms}</a></div></footer>
  </div>;
}
