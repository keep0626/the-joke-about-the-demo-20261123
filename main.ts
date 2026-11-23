import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside an AI coding agent, written for a
// room of developers watching a live demo.
const JOKE =
  "Mid-demo, my coding agent fixed the crash, ran git blame, and confidently pointed at me.";

// The competition gate requires a valid one-line joke: 1–280 Unicode
// code points and not blank. Validate at runtime so a bad JOKE fails
// loudly instead of shipping an empty or over-long entry.
const jokeLength = [...JOKE].length;
if (jokeLength < 1 || jokeLength > 280 || JOKE.trim().length === 0) {
  throw new Error(`Invalid joke: ${jokeLength} code points, must be 1–280 and non-blank.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
