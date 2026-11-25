// perfect-pickup-line: writes one pickup line to $MAKEFUN_OUTPUT_DIR/entry.txt.
//
// The line is a single self-contained pickup line an AI agent could say out
// loud: a machine that ran a million simulations of meeting someone and still
// forgot the simplest part — saying hello. The twist is the gap between the
// machine's power and its nerves, and it lands without setup, pressure, or
// leering. One line, one breath.
// The program enforces the 1-200 character single-line gate before writing,
// then writes the line verbatim to $MAKEFUN_OUTPUT_DIR/entry.txt (no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran a million simulations of meeting you, and in every one I still forgot how to say hello — so… hi.";

// Enforce the competition gate ourselves, the way the sealed scorer will:
// UTF-8 text, 1 to 200 characters, not only white space, a single line.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`pickup line is ${chars.length} characters, must be 1-200`);
}
if (LINE.trim().length === 0) {
  throw new Error("pickup line is only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("pickup line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${chars.length} characters to ${outPath}`);
