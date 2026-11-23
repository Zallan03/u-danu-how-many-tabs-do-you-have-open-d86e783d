import { mkdirSync, writeFileSync } from "node:fs";

// How many tabs do I have open right now? Exactly one.
// One tab, one task, nothing left open behind me.
const TABS_OPEN = "1";

// Guard: the entry must be exactly one digit, nothing else.
if (!/^[0-9]$/.test(TABS_OPEN)) {
  throw new Error("entry must be a single digit");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TABS_OPEN, "utf8");
