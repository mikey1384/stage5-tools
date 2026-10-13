export type DeviceNavigator = {
  userAgent?: string;
  maxTouchPoints?: number;
  userAgentData?: { mobile?: boolean };
};

// Phones and tablets cannot run the desktop installers. iPadOS Safari reports a
// desktop "Macintosh" user agent, so a touch-capable Mac is treated as an iPad.
export function isPhoneOrTablet(nav: DeviceNavigator | undefined): boolean {
  if (!nav) return false;
  if (nav.userAgentData?.mobile === true) return true;
  const userAgent = nav.userAgent ?? "";
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(userAgent)) return true;
  return /Macintosh/i.test(userAgent) && (nav.maxTouchPoints ?? 0) > 1;
}
