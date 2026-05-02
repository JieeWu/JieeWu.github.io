# Tony Wu — Portfolio

Personal portfolio site, deployed at <https://JieeWu.github.io/>.

Built with Vite + React + TypeScript + Tailwind. The `/tonyos` page is a
terminal-themed presentation of skills, experience, projects, certs and
contact info. The root `/` renders the same page.

## Local development

```sh
pnpm install
NODE_ENV=development pnpm exec tsx watch server/_core/index.ts
```

> The `pnpm dev` script in `package.json` uses Unix-style env-var syntax
> (`NODE_ENV=development tsx watch ...`) which doesn't work in Windows
> `cmd.exe`. Run from bash / Git Bash, or replace the script with
> `cross-env`.

Open <http://localhost:3000/> (or whichever port the server picks).

## Build

```sh
pnpm exec vite build      # produces dist/public/
```

## Deployment

`.github/workflows/deploy.yml` builds the client on every push to `main`
and publishes `dist/public/` via GitHub Pages. To enable Pages on a fresh
clone of this repo, go to **Settings → Pages → Source** and pick
**GitHub Actions**.
