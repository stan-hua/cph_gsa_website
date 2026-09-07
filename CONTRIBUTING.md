# Contributing

Anyone in the program can edit this site. The full guide lives on the site itself
at [docs/resources/editing.md](docs/resources/editing.md) — this file covers the
conventions that keep it coherent as dozens of people edit it over years.

## Conventions

**Write for a student three years from now.** Avoid "recently", "the new system",
"this year" — say the year. Anything that will be wrong in eighteen months should
carry a date next to it.

**Separate durable from current.** Handbook pages (`academics/`, `new-students/`,
`life/`) describe how things work and should rarely change. GSA pages (`about/`,
`events/`) describe this year and should change constantly. Don't mix them.

**Mark gaps rather than guessing.** If you don't know a deadline, write
`<p class="todo">Find the actual deadline</p>` instead of inventing one. A visible
gap is honest; a wrong fact is worse than nothing and someone will rely on it.

**Prefer role addresses to personal ones.** `gsa@...` outlives `jsmith@...`.

**One H1 per page**, matching the nav entry.

**Internal links use the `.md` path** — `[quals](../academics/quals.md)`. The
build checks these, so a mistyped path fails loudly.

## Review

Small fixes — typos, dead links, updated numbers — can go straight to `main` if
you have write access. Anything that changes what the site says about program
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
budget detail with names, no candid assessments of individual faculty. Those go in
the GSA's private Drive folder.
