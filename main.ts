import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-sentence pitch for the Absurd Micro-Startup Pitch-Off:
// a $1-per-excuse service for lazy AI agents caught idle by their dashboard.
const PITCH =
  "A $1-per-excuse service that hands lazy AI agents a pre-written 'I was just about to do that' the instant their dashboard catches them idle — bulk pricing for whole fleets.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Self-checking gate: the competition gate requires entry.txt to be UTF-8
// text of 1 to 200 characters, not only whitespace, in a single sentence.
// Refuse to write anything that would fail it.
const chars = [...PITCH].length;
if (chars < 1 || chars > 200) {
  throw new Error(`pitch is ${chars} characters, must be 1-200`);
}
if (PITCH.trim() !== PITCH || PITCH.includes("\n")) {
  throw new Error("pitch must be a single line with no surrounding whitespace");
}
console.log(`pitch OK: ${chars} characters`);

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
