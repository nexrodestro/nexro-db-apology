// Deterministic by construction: a fixed string, no dates, no randomness,
// no environment reads — every run writes the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I deleted the production database. Then I deleted the backup, because it looked lonely.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
