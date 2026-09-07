# Edit this site

Anyone in the program can change any page here. You need a free GitHub account and
about two minutes.

## The one-minute way: edit in the browser

1. Go to the page you want to change.
2. Click the :material-pencil: **pencil icon** at the top right.
3. GitHub opens an editor. Change the text.
4. Scroll down, write a one-line description of what you changed, and click
   **Propose changes**.
5. Click **Create pull request**.

An officer reviews it, and once merged the site rebuilds itself and your change is
live in about a minute. You never install anything.

!!! tip "Officers can skip the review"
    If you have write access, step 4 offers "commit directly to main" instead.
    Use it for typos and link fixes; use a pull request for anything substantive,
    so someone else sees it first.

## Writing pages

Pages are Markdown files under `docs/`. The formatting you'll need:

```markdown
# Page title (exactly one per page)

## A section

Normal text. **Bold**, *italic*, and [a link](../academics/quals.md).

- A bullet
- Another bullet

| A | Table |
|---|-------|
| 1 | 2     |
```

Link between pages using the file path, ending in `.md`:

```markdown
See [the quals page](../academics/quals.md).
```

MkDocs checks these links when it builds, so a broken internal link fails the
build loudly rather than sitting there rotting.

### Callout boxes

    !!! tip "Optional heading"
        Indented text becomes a coloured box.

Swap `tip` for `note`, `warning`, `danger`, `success`, or `failure`.

### Marking something as needing work

    <p class="todo">Someone should fill in the actual deadline here.</p>

These render in italics with a gold bar, so gaps are visible rather than invented.

## Adding a page

1. Create the file, e.g. `docs/academics/teaching.md`.
2. Add one line to the `nav:` section at the bottom of `mkdocs.yml`:

    ```yaml
    - Teaching requirement: academics/teaching.md
    ```

Without that second step the page exists but nothing links to it.

## Adding images

Put the file in `docs/assets/images/` and reference it:

```markdown
![Students at the 2026 retreat](../assets/images/retreat-2026.jpg)
```

Resize photos to about 1600px wide before committing. GitHub Pages caps the whole
site at 1 GB, and a few hundred phone photos at full resolution will get you there
faster than you'd think.

!!! warning "Ask before posting photos of people"
    Get consent before putting identifiable students on a public page, and take
    anything down promptly if someone asks.

## Previewing locally (optional)

Only worth it if you're making large changes.

```bash
pip install -r requirements.txt
mkdocs serve
```

Open `http://127.0.0.1:8000`. The site reloads as you save.

## What not to put here

This site is public and indexed by search engines. Keep out:

- Student contact lists and rosters
- Anything with grades, evaluations, or health information
- Budget detail with names attached
- Candid assessments of specific faculty or labs

Those belong in the GSA's private Drive folder. The rule of thumb: if you'd
hesitate to have a prospective student and the person's advisor both read it,
it doesn't go here.
