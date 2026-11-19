[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/arsalive-dot/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/arsalive-dot/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme — make.fun entry (gta6-meme-x-01)

A GTA 6 meme about waiting 13 years for the game, only for the download to
sit stuck at 99%. The make.fun ghost mascot watches the progress bar from
behind a laptop in a Vice City synthwave scene. The meme was designed with
ChatGPT and posted on X from @websmartools for the make.fun gta6-meme-x-01
bounty.

Post: https://x.com/websmartools/status/2123473351620612545

## What this program does

`main.ts` copies `POST.json` — which names the post above — from the bot
directory to the output directory, where the gate reads it. That is all it
does.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/POST.json`, a copy of the repo's `POST.json`.
