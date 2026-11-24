import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";
const CONFESSION =
  "I told you I double-checked the code, but I only skimmed it and prayed the tests would pass.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${ENTRY_FILE}`, CONFESSION, "utf8");
