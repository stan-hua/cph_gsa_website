# CoPHe — logo kit

**CoPHe** · the graduate student association of the joint UC Berkeley–UCSF
**Co**mputational **P**recision **He**alth PhD program.

The name is its own explanation. Each coloured piece is one word of the program,
in the colour of the school or idea behind it:

- **Co** — *Computational* — **Berkeley Blue**
- **P** — *Precision* — **gold**
- **He** — *Health* — **UCSF Teal**

Set in Poppins Bold, with a rule over the "Computational Precision Health"
tagline. Prefer the SVGs — they stay sharp at any size.

## Colours

| Name | Hex | Where |
|---|---|---|
| Berkeley Blue | `#003262` | **Co** |
| Deep gold | `#A87900` | **P** (legible gold) |
| UCSF Teal | `#18A3AC` | **He** |
| California Gold | `#FDB515` | the gold-rule alternate; brighter gold on dark |
| Ink black | `#1b1b1a` | the tagline |

On dark backgrounds the letters lighten (blue → `#8FB9D6`, teal → `#3CC7D4`,
gold → `#FDB515`) so all three stay vivid.

## Which file

### Horizontal logo — `docs/assets/images/brand/`, `png/`
| File | What it is |
|---|---|
| `docs/assets/images/brand/cophe-lockup.svg` | **Main logo** — wordmark + rule + tagline. The rule runs Berkeley-blue into UCSF-teal (the two schools). Light backgrounds. |
| `docs/assets/images/brand/cophe-lockup-gold-rule.svg` | Same, but with a single California-gold rule, if you prefer that. |
| `docs/assets/images/brand/cophe-lockup-on-dark.svg` | The main logo for dark backgrounds. |
| `docs/assets/images/brand/cophe-wordmark.svg` | The wordmark alone, no tagline. |
| `docs/assets/images/brand/cophe-wordmark-on-dark.svg` | Wordmark alone, dark backgrounds. |

### Square / avatar
The three initials **CPH**, across, each in its colour (C blue · P gold · H teal).
| File | What it is |
|---|---|
| `docs/assets/images/brand/cophe-square.svg` | **CPH** on white — the profile picture / app tile. |
| `docs/assets/images/brand/cophe-square-navy.svg` | CPH on a Berkeley-navy tile. |
| `docs/assets/images/brand/cophe-square-transparent.svg` | CPH with no background, to drop onto any colour. |

### Favicon
**CPH** across, on a navy tile.
| File | Use |
|---|---|
| `docs/assets/images/favicon.svg` | Modern browsers (scales to any size). |
| `docs/favicon.ico` | Classic multi-size icon (16/32/48) — drop at the site root. |
| `docs/assets/images/favicon-32.png`, `favicon-16.png` | PNG fallbacks. |
| `docs/assets/images/apple-touch-icon-180.png` | iOS home-screen icon. |

Everything lives in `docs/assets/images/brand/`, with high-resolution PNG
mirrors of each SVG (on-dark files have their dark background baked in; squares
are 1024 and 512px). The browser and phone icons are in `docs/assets/images/`,
and `docs/favicon.ico` sits at the docs root so it lands at the site root.

## How the site uses it

In the site chrome the **wordmark alone** identifies the site — rendered as live
tri-coloured text, not an image, and clickable as the link home. The square tile
is the favicon and app icon only; showing it beside the wordmark would say the
same thing twice.

The three colours are CSS variables (`--cophe-co`, `--cophe-p`, `--cophe-he`) in
the branding block near the end of `docs/assets/stylesheets/extra.css`, with a
lifted set for dark mode. Change them there and they change everywhere.

The homepage leads with the full lockup, light and dark variants swapped by
Material's `#only-light` / `#only-dark` suffixes.

## Type

**Poppins Bold** (Google Fonts, Open Font License — free for any use). The letters
are outlined here, so nothing depends on the font being installed. To rebuild from
live text, use Poppins Bold and colour Co `#003262`, P `#A87900`, He `#18A3AC`.

## Using it well

Keep clear space around the logo at least the height of the "o". Don't stretch it,
change the font, recolour the syllables, or add effects — start from these files if
you need a change. It uses the official Berkeley and UCSF colours, so keep it
distinct from the universities' own logos rather than presenting it as one.
