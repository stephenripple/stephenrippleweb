# stephenripple.com

Personal site for Stephen Ripple, built with [Astro](https://astro.build) and served from S3.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Edit content

Almost everything on the page lives in `src/data/profile.ts` — experience, lab projects,
credentials, contact. Layout is in `src/pages/index.astro`; the raked-garden hero is
`src/components/RakedGarden.astro`.

Contact details are stored reversed + base64 in `profile.ts` and assembled in the browser,
so they don't appear as plain text in the HTML.
