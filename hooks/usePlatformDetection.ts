'use client';

import { useState, useEffect } from 'react';

export type Platform = 'mac' | 'windows' | 'unknown';
export type Architecture = 'arm64' | 'x64' | 'unknown';

export interface PlatformInfo {
  platform: Platform;
  architecture: Architecture;
}

type NavigatorWithUAData = Navigator & {
  userAgentData?: {
    platform?: string;
    architecture?: string;
    getHighEntropyValues?: (
      hints: Array<'architecture' | 'bitness'>
    ) => Promise<{
      architecture?: string;
      bitness?: string;
    }>;
  };
};

function parseArchitectureHint(value: string): Architecture {
  const normalized = value.toLowerCase();

  if (
    normalized.includes('arm') ||
    normalized.includes('aarch64')
  ) {
    return 'arm64';
  }

  if (
    normalized.includes('x86') ||
    normalized.includes('x64') ||
    normalized.includes('amd64') ||
    normalized.includes('intel')
  ) {
    return 'x64';
  }

  return 'unknown';
}

export function usePlatformDetection(): PlatformInfo {
  const [platformInfo, setPlatformInfo] = useState<PlatformInfo>({
    platform: 'unknown',
    architecture: 'unknown',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let cancelled = false;

    const detect = async () => {
      const navigatorInfo = window.navigator as NavigatorWithUAData;
      const userAgent = navigatorInfo.userAgent.toLowerCase();
      const platform = navigatorInfo.platform?.toLowerCase() || '';
      const uaDataPlatform =
        navigatorInfo.userAgentData?.platform?.toLowerCase() || '';

      let detectedPlatform: Platform = 'unknown';
      let detectedArchitecture: Architecture = 'unknown';

      // Detect platform
      if (
        platform.includes('mac') ||
        userAgent.includes('mac') ||
        uaDataPlatform.includes('mac')
      ) {
        detectedPlatform = 'mac';
      } else if (
        platform.includes('win') ||
        userAgent.includes('windows') ||
        uaDataPlatform.includes('win')
      ) {
        detectedPlatform = 'windows';
      }

      // First pass architecture hints from user agent + platform strings.
      const stringHints = [userAgent, platform];
      for (const hint of stringHints) {
        const parsed = parseArchitectureHint(hint);
        if (parsed !== 'unknown') {
          detectedArchitecture = parsed;
          break;
        }
      }

      // Optional second pass via User-Agent Client Hints when available.
      const uaData = navigatorInfo.userAgentData;
      if (uaData) {
        const hintValues: string[] = [];

        if (uaData.architecture) {
          hintValues.push(uaData.architecture);
        }

        if (typeof uaData.getHighEntropyValues === 'function') {
          try {
            const values = await uaData.getHighEntropyValues([
              'architecture',
              'bitness',
            ]);
            if (values.architecture) hintValues.push(values.architecture);
            if (values.bitness) hintValues.push(values.bitness);
          } catch {
            // Ignore UA-CH failures; string hints + safe defaults still apply.
          }
        }

        for (const hint of hintValues) {
          const parsed = parseArchitectureHint(hint);
          if (parsed !== 'unknown') {
            detectedArchitecture = parsed;
            break;
          }
        }
      }

      // Compatibility-first defaults for unknown architecture.
      if (detectedArchitecture === 'unknown') {
        if (detectedPlatform === 'mac') {
          // x64 is safer as a default because Intel Macs cannot run arm64 installers.
          detectedArchitecture = 'x64';
        } else if (detectedPlatform === 'windows') {
          detectedArchitecture = 'x64';
        }
      }

      if (!cancelled) {
        setPlatformInfo({
          platform: detectedPlatform,
          architecture: detectedArchitecture,
        });
      }
    };

    void detect();

    return () => {
      cancelled = true;
    };
  }, []);

  return platformInfo;
}
