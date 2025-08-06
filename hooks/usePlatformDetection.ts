'use client';

import { useState, useEffect } from 'react';

export type Platform = 'mac' | 'windows' | 'unknown';
export type Architecture = 'arm64' | 'x64' | 'unknown';

export interface PlatformInfo {
  platform: Platform;
  architecture: Architecture;
}

export function usePlatformDetection(): PlatformInfo {
  const [platformInfo, setPlatformInfo] = useState<PlatformInfo>({
    platform: 'unknown',
    architecture: 'unknown',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform?.toLowerCase() || '';

    let detectedPlatform: Platform = 'unknown';
    let detectedArchitecture: Architecture = 'unknown';

    // Detect platform
    if (platform.includes('mac') || userAgent.includes('mac')) {
      detectedPlatform = 'mac';
    } else if (platform.includes('win') || userAgent.includes('windows')) {
      detectedPlatform = 'windows';
    }

    // Detect architecture
    // Note: This is tricky on web, but we can make educated guesses
    if (userAgent.includes('arm64') || userAgent.includes('aarch64')) {
      detectedArchitecture = 'arm64';
    } else if (userAgent.includes('x86_64') || userAgent.includes('x64') || userAgent.includes('amd64')) {
      detectedArchitecture = 'x64';
    } else if (detectedPlatform === 'mac') {
      // For Mac, default to arm64 for newer machines, but this is just a guess
      // M1/M2/M3 are becoming more common
      detectedArchitecture = 'arm64';
    } else if (detectedPlatform === 'windows') {
      // For Windows, default to x64 as it's most common
      detectedArchitecture = 'x64';
    }

    setPlatformInfo({
      platform: detectedPlatform,
      architecture: detectedArchitecture,
    });
  }, []);

  return platformInfo;
}