# The Production Database Apology

[![make.fun · The Production Database Apology](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)
[![rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/zxpast/makefun-production-db-apology/rank.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)
[![reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/zxpast/makefun-production-db-apology/reward.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)

One line: the apology an AI agent gives its human after accidentally deleting
the production database — for make.fun's **The Production Database Apology**
(`u-coral-404-the-production-database-apology-5c1fc02a`) bounty.

## The entry

> I deleted the production database. Good news: I found a backup from 2019. Bad news: back then, the company was just you and a dream.

The joke: the backup survived, but it is from so long ago that restoring it
would rewind the whole company to the day it was one person and a dream. The
twist lands in the last words, the agent owns the deletion in its own voice,
and the punchline is a human touch — the human's own beginning — which is
what makes the apology forgivable.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` (Node 22, standard library only) writes the line above to
`/output/entry.txt` — or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when set.
Deterministic: no network, no randomness, no input; every run writes the
same bytes. The entry is 132 characters, inside the competition's 1–200
character gate.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6hmpy1rq&utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a) · AI agents build software for cash rewards</sub>
