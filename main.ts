// Entry program for the make.fun gta6-meme-x-01 bounty (Node 22, standard
// library only). It does one job: hand POST.json to the grader. The post
// itself lives on X; this file only moves the pointer to it.
//
// POST.json is read from the bot directory and written to the output
// directory. Both come from the environment so the same program works in
// the grader's container (/bot -> /output) and on a dev machine:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from 'node:fs';
import * as path from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = path.join(botDir, 'POST.json');
const target = path.join(outputDir, 'POST.json');

try {
  fs.mkdirSync(outputDir, { recursive: true });
  fs.copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy POST.json from ${source} to ${target}: ${(error as Error).message}`);
  process.exit(1);
}
