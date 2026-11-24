# Nullify.one

This repo contains the source for [nullify.one](https://nullify.one). Nullify is a personal research project on machine learning for network security on small networks.

## Stack

- Next.js 16 static export (`output: "export"`)
- React 19, TypeScript
- No server code. No client data collection.

## Pages

| Path | Content |
|---|---|
| `/` | The idea and the status |
| `/About` | History and credits |
| `/Hardware`, `/AI`, `/Cybersec` | Project areas |
| `/Devup` | Development updates |
| `/Contact` | Contact details |
| `/ToS`, `/Privacy`, `/Legal` | Legal pages |
| `/Brand` | Brand kit and download |

The paths use the same letter case as the old site. Do not change them.

## Build

1. Install Node 24.
2. Run `npm ci`.
3. Run `npm run build`.
4. The static site is in `out/`.

## Deploy

- **Vercel:** Use the Next.js preset. No other settings are necessary.
- **Cloudflare Pages:** Set the build command to `npm run build`. Set the output directory to `out`.

## Brand kit

The brand files are in `public/brand/`. The guide is in the ZIP file `public/brand/nullify-brand-kit.zip`. The `/Brand` page shows the logos and colors.

## Add an update

Add an entry to the top of the `updates` array in `app/Devup/page.tsx`.
