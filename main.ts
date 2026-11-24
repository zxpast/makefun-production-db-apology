// The Production Database Apology — make.fun entry (Node 22, standard
// library only). It writes one line to /output/entry.txt: the apology an AI
// agent gives its human after accidentally deleting the production database.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The program is deterministic: the same repository always writes the same
// bytes, so the grader's two runs agree. No network, no randomness, no input
// is read; the entry is a single fixed string.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'I deleted the production database. Good news: I found a backup from 2019. Bad news: back then, the company was just you and a dream.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), ENTRY, 'utf8');
