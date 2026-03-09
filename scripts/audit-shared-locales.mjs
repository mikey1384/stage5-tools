import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import ts from "typescript";

const projectRoot = path.resolve(import.meta.dirname, "..");
const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "stage5-tools-locale-audit-"));

const filesToCompile = [
  "lib/pathname-utils.ts",
  "lib/required-shared-string-keys.ts",
  "lib/translate-language-slugs.ts",
  "lib/locales.ts",
  "lib/strings.ts",
];

for (const relativePath of filesToCompile) {
  const sourcePath = path.join(projectRoot, relativePath);
  const source = fs.readFileSync(sourcePath, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
      resolveJsonModule: true,
    },
    fileName: sourcePath,
  });

  const outputPath = path.join(
    tempDir,
    relativePath.replace(/\.ts$/, ".js")
  );
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, output.outputText, "utf8");
}

const requireFromTemp = createRequire(path.join(tempDir, "index.js"));
const { FULLY_LOCALIZED_LOCALES } = requireFromTemp("./lib/locales.js");
const {
  getLocaleStringTable,
  requiredSharedStringKeys,
} = requireFromTemp("./lib/strings.js");

const issues = [];

for (const locale of FULLY_LOCALIZED_LOCALES) {
  const table = getLocaleStringTable(locale);
  const missingKeys = requiredSharedStringKeys.filter((key) => {
    const value = table[key];
    return typeof value !== "string" || value.trim().length === 0;
  });

  if (missingKeys.length > 0) {
    issues.push({ locale, missingKeys });
  }
}

fs.rmSync(tempDir, { recursive: true, force: true });

if (issues.length > 0) {
  console.error("Shared locale audit failed.\n");
  for (const issue of issues) {
    console.error(`${issue.locale}: missing ${issue.missingKeys.length} key(s)`);
    for (const key of issue.missingKeys) {
      console.error(`  - ${key}`);
    }
    console.error("");
  }
  process.exit(1);
}

console.log(
  `Shared locale audit passed for ${FULLY_LOCALIZED_LOCALES.length} full-site locales.`
);
