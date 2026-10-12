/** @param {unknown} value @returns {value is string} */
export function isIsoCalendarDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

/** A source publication timestamp must include its time and explicit offset.
 * @param {unknown} value @returns {value is string}
 */
export function isVideoUploadDate(value) {
  if (typeof value !== "string") return false;
  const match = value.match(/^(\d{4}-\d{2}-\d{2})T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d{1,3})?(?:Z|[+-](?:(?:0\d|1[0-3]):[0-5]\d|14:00))$/);
  return !!match && isIsoCalendarDate(match[1]) && Number.isFinite(Date.parse(value));
}

/** Keep legacy entries readable without inventing a publication time.
 * @param {{datePublished: string, structuredDataAbout?: Array<Record<string, unknown>>}} video
 * @returns {string}
 */
export function getVideoUploadDate(video) {
  const metadata = video.structuredDataAbout?.find(item => item["@type"] === "VideoObject");
  return isVideoUploadDate(metadata?.uploadDate) ? metadata.uploadDate : video.datePublished;
}
