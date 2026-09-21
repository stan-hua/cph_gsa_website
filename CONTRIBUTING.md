# Contributing

Anyone in the program can edit this site. The full guide lives on the site itself
at [docs/resources/editing.md](docs/resources/editing.md). This file covers the
conventions that keep it coherent as dozens of people edit it over years.

## Conventions

**Write for a student three years from now.** Say the year rather than "recently",
"the new system" or "this year". Anything that will be wrong in eighteen months
should carry a date next to it.

**Write plainly.** Short declarative sentences, subject and verb early. Four rules
in particular:

- **No em-dashes.** Use a comma, a colon, parentheses, a semicolon or a full stop,
  whichever matches the job the dash was doing. En-dashes stay in ranges (`7–10`)
  and name pairs (UC Berkeley–UCSF).
- **Assert positively.** Rewrite "not X but Y" as a direct claim. Plain factual
  negations are fine: "food trucks are prohibited".
- **No stance words or metaphors** where a plain one works. Cut *load-bearing*,
  *the workhorse*, *catches people out*.
- **One idea per sentence.** Split anything held together by dashes, and keep the
  subject next to its verb.

**Separate durable from current.** Handbook pages (`academics/`, `new-students/`,
`life/`) describe how things work and should rarely change. GSA pages (`about/`,
`events/`) describe this year and should change constantly. Don't mix them.

**Mark gaps rather than guessing.** If you don't know a deadline, write a todo
instead of inventing one. A visible gap is honest, and a wrong fact is worse than
nothing because someone will rely on it. There are two markers:

- `<p class="todo pending">…</p>` and `<span class="todo">…</span>` mean **nobody
  has supplied this yet**: a missing rent figure, a link, a section waiting on what
  students actually did. The heading above one gets a **pending** badge, so the
  badge points at the section rather than the whole page.
- `<p class="todo">…</p>` is a note to future editors, such as a reminder to keep a
  list current. It carries no badge.

**Prefer role addresses to personal ones.** `gsa@...` outlives `jsmith@...`.

**One H1 per page**, matching the nav entry.

**Internal links use the `.md` path**, as in `[quals](../academics/quals.md)`. The
build checks these, so a mistyped path fails loudly.

## Review

Small fixes (typos, dead links, updated numbers) can go straight to `main` if you
have write access. Anything that changes what the site says about program
requirements, or adds a page, should go through a pull request so a second person
sees it.

Pull requests build automatically but don't publish, so you can check the build
passes before merging.

## Before you commit

```bash
mkdocs build --strict
```

If that passes, the deploy will too.

## What doesn't belong here

The site is public and indexed. No rosters, no grades, no health information, no
budget detail with names, no candid assessments of individual faculty. Keep that
material somewhere private instead.
