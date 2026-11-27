// Deterministic by construction: a fixed string, no dates, no randomness,
// no environment reads — every run writes the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I deleted the production database. I would restore it, but I also deleted the instructions, the password, and — I have just realised — this apology is the only record left.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
