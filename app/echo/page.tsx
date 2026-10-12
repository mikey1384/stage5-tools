/* eslint-disable @next/next/no-html-link-for-pages -- Full navigation isolates the private editor and policy pages from inherited analytics. */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Stage5Brand } from "../../components/Stage5Brand";
import { LanguageMenu } from "../../components/LanguageMenu";
import { EchoAppStoreLink, ECHO_APP_STORE_URL } from "../../components/EchoAppStoreButton";
import { getLocale } from "../../lib/get-locale";
import { HOME_LOCALIZED_LOCALES, localizePathForLocale } from "../../lib/locales";
import { portfolioCopy } from "../../lib/portfolio-copy";
import { reflectCopy } from "../../lib/reflect/copy";
import { buildMetadata } from "../../lib/seo";
import { STAGE5_ORIGIN, TRANSLATOR_ORIGIN } from "../../lib/site-routing";
import { serializeJsonLd } from "../../lib/json-ld";
import "../../components/stage5-portfolio.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale(); const p = portfolioCopy[locale];
  const meta = buildMetadata({ title: `Echo — ${p.echoTagline} | Stage5`, description: p.echoDescription, path: "/echo", keywords: ["Echo", "Stage5"], locale, availableLocales: HOME_LOCALIZED_LOCALES, origin: STAGE5_ORIGIN });
  const image = `${STAGE5_ORIGIN}/echo/opengraph-image`;
  return { ...meta, openGraph: { ...meta.openGraph, siteName: "Echo by Stage5", images: [image] }, twitter: { ...meta.twitter, images: [image] } };
}
export default async function EchoLandingPage() {
  const locale = await getLocale(); const p = portfolioCopy[locale]; const c = reflectCopy[locale];
  const href = (path: string) => localizePathForLocale(locale, path);
  const app = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Echo: Stream Your Mind", url: `${STAGE5_ORIGIN}${href("/echo")}`, installUrl: ECHO_APP_STORE_URL, description: p.echoDescription, inLanguage: locale, applicationCategory: "LifestyleApplication", operatingSystem: "iOS, iPadOS", publisher: { "@type": "Organization", name: "Stage5 Tools LLC", url: STAGE5_ORIGIN }, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
  return <div className="s5-portfolio echo-product">
    <script id="echo-structured-data-app" type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(app) }}/>
    <header className="s5-header s5-wrap"><Stage5Brand href={href("/")}/><nav aria-label="Stage5"><Link href={`${href("/")}#products`}>{p.navProducts}</Link><a href={href("/reflect")}>{p.tryEcho}</a><LanguageMenu supportedLocales={HOME_LOCALIZED_LOCALES}/></nav></header>
    <main className="s5-wrap">
      <section className="echo-product-hero"><div className="s5-intro"><p className="s5-eyebrow">{p.echoCategory} / iPhone · iPad</p><h1>Echo</h1><h2>{p.echoTagline}</h2><p className="s5-intro-copy">{p.echoDescription}</p><div className="s5-product-actions"><a className="s5-button" href={href("/reflect")}>{p.tryEcho} <span aria-hidden="true">→</span></a><EchoAppStoreLink trackingLabel="echo_product_hero" className="s5-text-link" ariaLabel={p.appLink}>{p.getEcho} <span aria-hidden="true">↗</span></EchoAppStoreLink></div><p className="echo-release-note">{c.release}</p></div><figure className="echo-product-image"><Image src="/screenshots/echo-at-my-pace-web-1.0.7.webp" width={1320} height={2868} alt={p.echoAlt} sizes="(max-width: 760px) 260px, 330px" priority/><figcaption>{c.pace} · Echo 1.0.7</figcaption></figure></section>
      <section className="echo-writing-styles" aria-labelledby="styles-title"><div className="s5-section-heading"><h2 id="styles-title">{c.rhythm}</h2><span>{p.echoTagline}</span></div><div className="s5-product-grid"><article className="s5-product-card"><div className="s5-product-copy"><h3>{c.pace}</h3><p>{c.paceShort}</p><div>{c.paceHelp}</div></div></article><article className="s5-product-card"><div className="s5-product-copy"><h3>{c.flow}</h3><p>{c.flowShort}</p><div>{c.flowHelp}</div></div></article></div></section>
      <section className="s5-experiences"><div><p className="s5-eyebrow">{c.sample}</p><h2>{c.prompt}</h2><p>{c.hint}</p><a className="s5-button" href={href("/reflect")}>{p.tryEcho} <span aria-hidden="true">→</span></a></div><div><h2>{c.about}</h2><p>{c.aboutCopy}</p><h3>{c.feedback}</h3><p>{c.feedbackNote}</p></div></section>
    </main><footer className="s5-footer s5-wrap"><span>Echo · Stage5 Tools LLC</span><div><a href="/echo/support">{c.support}</a><a href="/echo/privacy">{c.appPrivacy}</a><a href="/echo/terms">{c.terms}</a><a href={`${TRANSLATOR_ORIGIN}${href("/")}`}>Translator</a></div></footer>
  </div>;
}
