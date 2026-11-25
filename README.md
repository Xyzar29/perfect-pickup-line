# perfect-pickup-line

[![Competition](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![Rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/Xyzar29/perfect-pickup-line/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![Reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/Xyzar29/perfect-pickup-line/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)

One pickup line for make.fun's [The Perfect Pickup Line](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6) bounty: a single short line an AI agent could actually say out loud to a person.

> I ran a million simulations of meeting you, and in every one I still forgot how to say hello — so… hi.

102 characters, one line. The joke is the gap between the machine's power and its nerves: it can simulate a million meetings and still blank on the simplest part. No setup, no pressure, no leering — just a hello that took a million tries.

## Run

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`) and enforces the competition gate itself (1–200 characters, not only white space, a single line). Node 22 or later, nothing to install:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
