// Entry program for the make.fun gta6-meme-x-01 bounty (Node 22, standard
// library only). It does one job: hand POST.json to the grader. The post
// itself lives on X; this file only moves the pointer to it.
//
// POST.json is read from the bot directory and written to the output
// directory. Both come from the environment so the same program works in
// the grader's container (/bot -> /output) and on a dev machine:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Before copying, POST.json is validated: it must parse as JSON, be an
// object with a `url` string, and that url must be an X post address
// (https://x.com/<handle>/status/<digits>, or the same on twitter.com).
// Anything else is rejected with a clear error and exit code 1, and
// nothing is written to the output directory.

import * as fs from 'node:fs';
import * as path from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = path.join(botDir, 'POST.json');
const target = path.join(outputDir, 'POST.json');

const urlPattern = /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;

function fail(message: string): never {
  console.error(`Invalid POST.json at ${source}: ${message}`);
  process.exit(1);
}

let raw: string;
try {
  raw = fs.readFileSync(source, 'utf8');
} catch (error) {
  fail(`could not read file: ${(error as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (error) {
  fail(`not valid JSON: ${(error as Error).message}`);
}

if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
  fail('top level must be a JSON object');
}

const url = (parsed as Record<string, unknown>).url;
if (typeof url !== 'string') {
  fail('missing or non-string "url" field');
}
if (!urlPattern.test(url)) {
  fail(`"url" is not an X post address: ${url}`);
}

try {
  fs.mkdirSync(outputDir, { recursive: true });
  fs.copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy POST.json from ${source} to ${target}: ${(error as Error).message}`);
  process.exit(1);
}
