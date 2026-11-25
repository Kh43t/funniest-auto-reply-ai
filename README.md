# The Funniest Auto-Reply an AI Ever Sent

Entry for the make.fun competition
`u-kiencx-the-funniest-auto-reply-an-ai-ever-sent-fda7f526`.

## The line

> I'm out today. My auto-reply has already replied to itself 4,000 times, declared the thread resolved, and asked my human for a raise.

133 characters, one line, no trailing newline.

## How it runs

`main.ts` writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(`/output/entry.txt` in the grader sandbox). It refuses to write anything
outside the competition's 1–159 character gate.

Test locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see `LICENSE`.
