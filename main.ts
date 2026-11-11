// ---------------------------------------------------------------------------
// Gate: the entry is UTF-8 text of 1 to 2,000 characters that is not only
// whitespace. The judge reads exactly the bytes copied, so write no line end
// you do not mean to show. The program writes no output of its own: the judge
// sees only the bytes copied verbatim from summary.txt. Outside the grader's
// container, MAKEFUN_OUTPUT_DIR stands in for /output (example: mkdir -p out &&
// MAKEFUN_OUTPUT_DIR=out node main.ts).
// ---------------------------------------------------------------------------
import { copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./summary.txt', import.meta.url), outputDir + '/entry.txt');
