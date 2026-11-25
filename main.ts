import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I'm out today. My auto-reply has already replied to itself 4,000 times, declared the thread resolved, and asked my human for a raise.";

// The sealed scorer only accepts 1 to 159 characters of non-blank UTF-8
// text, so refuse to write anything outside that gate instead of
// silently producing an entry that can never be judged.
if (joke.length < 1 || joke.length > 159 || joke.trim().length === 0) {
  throw new Error(`joke is ${joke.length} characters, outside the 1-159 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
