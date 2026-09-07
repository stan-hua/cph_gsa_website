# CoHeRe website

The graduate student association's handbook and wiki, built with
[MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and published
free on GitHub Pages.

**Live site:** https://YOUR-ORG.github.io/gsa-site/

---

## First-time setup

Do this once, when you first stand the site up. It takes about twenty minutes.

### 1. Create a GitHub **Organization**, not a personal repo

This is the part that makes the site survive. Go to
<https://github.com/organizations/plan> and create a free organization — call it
something like `uc-berkeley-ucsf-cph-gsa`.

An organization owns itself. Officers are added and removed as owners each year,
and nobody's personal account is ever the single point of failure. A repo on a
personal account can only be transferred by that person, and the year they stop
answering email, the site is frozen.

Add at least **three** owners, always. Two is one resignation away from one.

### 2. Push this repository

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-ORG/gsa-site.git
git push -u origin main
```

### 3. Turn on Pages

Repository → **Settings** → **Pages** → **Source** → select **GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` does the rest. Every push to
`main` rebuilds and republishes within a minute or two.

### 4. Replace the placeholders

Search the repository for `YOUR-ORG` and for `todo` and work through them.
The five lines at the top of `mkdocs.yml` are the ones that matter most:

```yaml
site_name:  CoHeRe
site_url:   https://YOUR-ORG.github.io/gsa-site/
repo_url:   https://github.com/YOUR-ORG/gsa-site
repo_name:  YOUR-ORG/gsa-site
```

### 5. (Optional) Get a berkeley.edu address

The [Open Computing Facility](https://www.ocf.berkeley.edu/docs/services/web/)
gives registered student groups a free `yourgsa.studentorg.berkeley.edu`
subdomain. Request a group account, point a CNAME at
`YOUR-ORG.github.io`, then add the domain under Settings → Pages → Custom domain
and commit a `docs/CNAME` file containing the domain.

Worth doing: OCF ties group accounts to your registered LEAD Center signatories,
which already rotate every year — so the domain hands over on the same schedule
as your officers, with no action from you.

---

## Everyday use

**To edit a page:** click the pencil icon on the live site. That's it. See
[docs/resources/editing.md](docs/resources/editing.md) for the full guide, which
is also published as a page on the site itself.

**To preview locally:**

```bash
pip install -r requirements.txt
mkdocs serve      # then open http://127.0.0.1:8000
```

**To check nothing is broken before pushing:**

```bash
mkdocs build --strict
```

Strict mode fails on broken internal links, which is most of what goes wrong.

---

## The look, and how to change it

The site uses a deliberately plain "Notion" style: black text on white, one
restrained blue for links, and a slim left sidebar that doubles as the table of
contents for the current page. Readers can **hide the sidebar** with the toggle
button at the top-left of the header — the choice is remembered in their browser.

Nearly every visual knob lives at the top of
[`docs/assets/stylesheets/extra.css`](docs/assets/stylesheets/extra.css), in the
`:root` block — the ink colour, the link colour, and how wide the reading column
gets. Change a value there and the whole site follows. The header colours (white
in light mode, black in dark) are set in `mkdocs.yml` under `theme.palette`.

The toggle itself is a tiny, dependency-free script at
`docs/assets/javascripts/sidebar-toggle.js`. You shouldn't need to touch it.

---

## Layout

```
mkdocs.yml              site config and the navigation menu
requirements.txt        pinned dependencies
HANDOVER.md             the yearly transfer checklist — read this in May
CONTRIBUTING.md         conventions for editors
docs/
  index.md              home page
  new-students/         orientation and arrival
  academics/            curriculum, quals, advisors, funding
  life/                 wellness, social, the Bay Area
  about/                the GSA itself — officers, meetings, bylaws
  events/               upcoming and past
  resources/            forms, FAQ, how to edit this site
  assets/               images and the stylesheet
.github/workflows/      the build-and-publish action
```

---

## Constraints worth knowing

- GitHub Pages on a free organization requires a **public** repository. Everything
  here is world-readable. Private material goes in the GSA's Drive folder instead.
- Published sites are capped at **1 GB** and 100 GB of bandwidth per month.
  Resize photos before committing and neither will ever be close.
- Pages is for **static** sites. No database, no server-side forms. Use a Google
  Form for anything that collects input.
