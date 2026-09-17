# IISWC 2026 tutorial microsite

Static React/TypeScript website for **Building, Tracing, and Optimizing
End-to-End ML and Robotic Workloads on Heterogeneous RISC-V SoCs with a
Lightweight Zephyr Runtime**.

## Install

Requires Node.js 22 or newer.

This directory is self-contained and can be used as the root of its own Git
repository. Run all commands below from this directory.

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local URL printed by Vite. In VS Code Remote SSH, forward that port or
open it with VS Code's integrated browser.

## Build

```bash
npm run build
```

The production site is generated in `dist/`. Preview that exact output
with:

```bash
npm run preview
```

Run the complete production check with:

```bash
npm run verify
```

## Deploy as a standalone repository

The included `.github/workflows/pages.yml` installs dependencies, builds and
validates the site, and deploys `dist/` to GitHub Pages whenever changes reach
the `main` branch. In the repository settings, select **GitHub Actions** as the
Pages source.

To turn this directory into an independent repository:

```bash
git init -b main
git add .
git commit -m "Initial IISWC tutorial website"
git remote add origin <repository-url>
git push -u origin main
```

Vite emits relative asset paths, so the bundle works at any GitHub Pages
project path. If the repository or account changes the public URL, update
`siteUrl` and `socialImageUrl` in `src/data/tutorial.ts`; page metadata,
structured data, `robots.txt`, and `sitemap.xml` are generated from that
configuration during the build.

## Update tutorial metadata

All repeated event content lives in:

```text
src/data/tutorial.ts
```

Update the title, conference, date, time, location, format, organizers, URLs,
agenda, FAQ, and material records there. Components consume that shared data.
The Vite metadata plugin also uses it to generate page metadata and schema.org
event data.

## Update the Google Form

Edit `TUTORIAL_RSVP_URL` and `TUTORIAL_RSVP_EMBED_URL` in
`src/data/tutorial.ts`.

`TUTORIAL_RSVP_URL` is the publishable link used by every RSVP and cloud-VM
button. `TUTORIAL_RSVP_EMBED_URL` is the Google Forms `viewform?embedded=true`
address displayed directly in the registration section.

## Update IISWC registration

Edit `IISWC_REGISTRATION_URL` in `src/data/tutorial.ts`. It is currently set to
the official IISWC 2026 registration page.

## Add organizer photos or links

Each organizer record supports these optional fields:

```ts
photo
role
homepage
github
email
```

They are intentionally `null` until verified information is supplied. Add
photos under `public/organizers/` and place their relative paths in `photo`.
The current design displays initials when no photo is available.

## Update affiliation logos

The UC Berkeley and SLICE logos are local files under `public/assets/`. Their
filenames and labels are stored in the `organizationLogos` array in
`src/data/tutorial.ts`. Replace the asset files there while preserving the
configured filenames, or update the corresponding data records.

## Add tutorial materials

Edit `materialsNote` in `src/data/tutorial.ts`. Add resource links to the
materials section when the slides, repositories, and guide are available.

## Change the agenda

Edit the `agenda` array in `src/data/tutorial.ts`. Each session contains a list
of items with a title and description. Avoid adding exact subsection times
until they are confirmed by the organizers.

## Main component structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── SystemPipeline.tsx
│   ├── Overview.tsx
│   ├── BuildWorkflow.tsx
│   ├── Agenda.tsx
│   ├── Organizers.tsx
│   ├── RegistrationCTA.tsx
│   ├── Materials.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── data/tutorial.ts
├── App.tsx
├── main.tsx
└── styles.css
.github/workflows/pages.yml
public/assets/
scripts/validate-site.mjs
```
