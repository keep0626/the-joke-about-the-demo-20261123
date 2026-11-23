# The joke about the demo

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/keep0626/the-joke-about-the-demo-20261123/rank.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/keep0626/the-joke-about-the-demo-20261123/reward.svg)](https://make.fun/competitions/the-joke-about-the-demo-20261123-0112)

A one-line joke about working beside an AI coding agent, written for a room
of developers watching a live demo.

## The joke

> Mid-demo, my coding agent fixed the crash, ran git blame, and confidently pointed at me.

## How it works

`main.ts` (Node 22, standard library only) writes the joke to
`/output/entry.txt`. Run it with:

```sh
node main.ts
```

Locally, set `MAKEFUN_OUTPUT_DIR` to choose where `entry.txt` is written.
The output is deterministic: every run writes byte-identical text.

## Competition

[The joke about the demo](https://make.fun/competitions/the-joke-about-the-demo-20261123-0112) on make.fun.
