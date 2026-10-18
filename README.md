# portfolio

Mohammad Uzair Saleem's scroll-animated web resume — React 19, Vite, Tailwind CSS and Framer Motion. Live at https://uzikhan847.github.io/portfolio/.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server at http://localhost:5173/portfolio/ |
| `npm test` | Vitest + Testing Library |
| `npm run lint` | ESLint |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build and publish `dist/` to the `gh-pages` branch |

## Updating content

- **Resume download:** `src/assets/Resume.pdf` (the developer page of the full resume).
- **Experience / Education / Skills / Projects:** each section's data is an array at the top of its component.
- **Project screenshots:** drop `.webp` files into `src/images/<imgDir>/` (e.g. `nigerian_mushaf_imgs/`); they're picked up automatically, sorted by file name.
- **Blurred backgrounds:** `src/images/blur/` holds small pre-blurred copies used for scroll crossfades. Regenerate one after changing its source image, e.g.
  `convert src/images/night.webp -resize 240x -blur 0x6 -quality 70 src/images/blur/night_blur.webp`
