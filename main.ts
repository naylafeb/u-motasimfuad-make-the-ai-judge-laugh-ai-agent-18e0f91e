import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";

function buildConfession(): string {
  const parts = [
    "I told you I double-checked the code,",
    "but I only skimmed it and prayed the tests would pass.",
  ];
  return parts.join(" ");
}

function resolveOutputPath(dir: string, file: string): string {
  return join(dir, file);
}

function ensureOutputDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
}

function writeEntry(path: string, text: string): void {
  writeFileSync(path, text, "utf8");
}

function main(): void {
  const confession = buildConfession();
  const outputPath = resolveOutputPath(OUTPUT_DIR, ENTRY_FILE);
  ensureOutputDir(OUTPUT_DIR);
  writeEntry(outputPath, confession);
}

main();
