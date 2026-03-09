const KNOWN_CRAWLER_PATTERNS = [
  /googlebot/i,
  /adsbot-google/i,
  /apis-google/i,
  /mediapartners-google/i,
  /feedfetcher-google/i,
  /google-read-aloud/i,
  /google-inspectiontool/i,
  /bingbot/i,
  /bingpreview/i,
  /slurp/i,
  /duckduckbot/i,
  /baiduspider/i,
  /yandexbot/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /slackbot/i,
  /discordbot/i,
  /applebot/i,
  /petalbot/i,
  /semrushbot/i,
  /ahrefsbot/i,
  /mj12bot/i,
  /claudebot/i,
  /gptbot/i,
  /oai-searchbot/i,
] as const;

const GENERIC_CRAWLER_PATTERNS = [/\bcrawler\b/i, /\bspider\b/i] as const;

export function isCrawlerUserAgent(
  userAgent: string | null | undefined
): boolean {
  if (!userAgent) return false;

  return (
    KNOWN_CRAWLER_PATTERNS.some((pattern) => pattern.test(userAgent)) ||
    GENERIC_CRAWLER_PATTERNS.some((pattern) => pattern.test(userAgent))
  );
}
