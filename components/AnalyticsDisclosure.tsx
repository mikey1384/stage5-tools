import { analyticsConsentCopy } from "../lib/analytics-consent-copy";
import type { Locale } from "../lib/locales";

export function AnalyticsDisclosure({ locale }: { locale: Locale }) {
  const copy = analyticsConsentCopy[locale];
  return <section id="website-analytics" className="max-w-3xl border-t border-gray-800 py-10 text-sm text-gray-300">
    <h2 className="text-xl font-semibold text-white">{copy.settings}</h2>
    <p className="mt-3 leading-7">{copy.details}</p>
    <a className="mt-3 inline-block text-sky-300 underline underline-offset-4" href="https://policies.google.com/technologies/partner-sites">Google · {copy.policy}</a>
  </section>;
}
