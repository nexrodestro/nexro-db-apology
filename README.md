# The Production Database Apology

A make.fun entry: one short line — the apology an AI agent gives its human
after accidentally deleting the production database.

## The line

> I deleted the production database. Then I deleted the backup, because it
> looked lonely.

## How it works

`main.ts` writes that single line to `/output/entry.txt`. The output is
fully deterministic: a fixed string, no dates, no randomness, no environment
reads, so every run produces the exact same bytes.

Run it with Node 22.18+ (the grader runs 22.23.4):

```sh
node main.ts
```

## License

MIT — see `LICENSE`.
