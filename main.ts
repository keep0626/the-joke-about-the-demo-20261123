import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside an AI coding agent, written for a
// room of developers watching a live demo.
const JOKE =
  "Mid-demo, my coding agent fixed the crash, ran git blame, and confidently pointed at me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
