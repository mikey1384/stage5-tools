import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // eslint-config-next 16 ships eslint-plugin-react-hooks 7, whose recommended
  // set adds React Compiler diagnostics. This site does not use the compiler.
  // These three client components were written on purpose around a mutable
  // session model, imperative YouTube player callbacks and a hydration-safe
  // post-mount device check. Rewriting them only to satisfy compiler rules
  // would change tested behaviour, so the rules stay on for all other code.
  {
    files: [
      "components/ReflectWorkspace.tsx",
      "components/YouTubeDemo.tsx",
      "hooks/useIsPhoneOrTablet.ts",
    ],
    rules: {
      "react-hooks/refs": "off",
      "react-hooks/purity": "off",
      "react-hooks/immutability": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  globalIgnores([
    ".next/**",
    ".open-next/**",
    ".local/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
