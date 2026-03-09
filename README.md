# AECRRU

React + Rsbuild rebuild of the original AECRRU website, preserving the same
sections, media assets, and gallery-driven browsing experience.

## Stack

- React
- Rsbuild

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Project Structure

```text
src/
  components/   UI sections and shared presentational pieces
  data/         site copy, navigation, and media references
  hooks/        reusable behavior such as the carousel hook
```

## Main Features

- Fixed header with anchor navigation
- Full-screen hero carousel
- About section with original company copy
- Work areas grid with modal image galleries
- Contact section with QR code and business details
- Same media set migrated into `public/media`

## Notes

- `node_modules` and `dist` are ignored via `.gitignore`
- Static assets are served from `public/media`
- The app was verified with `npm run build`
