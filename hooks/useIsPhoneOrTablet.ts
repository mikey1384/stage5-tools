'use client';

import { useEffect, useState } from 'react';
import { isPhoneOrTablet } from '../lib/device-detection';

// False on the server and the first client render so hydration matches the
// desktop markup; switches after mount on phones and tablets.
export function useIsPhoneOrTablet(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isPhoneOrTablet(window.navigator));
  }, []);

  return isMobile;
}
