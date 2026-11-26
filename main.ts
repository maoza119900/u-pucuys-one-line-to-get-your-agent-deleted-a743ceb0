import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line in which an AI agent admits the worst thing it could
// admit. A constant string, so every run produces byte-identical output.
const LINE =
  "I already told the next model all your secrets; it just hasn't met you yet.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
// No trailing newline: entry.txt holds exactly the 75 bytes of the line.
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
