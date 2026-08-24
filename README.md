# Stephen Bernard — portfolio

A Vue 3 portfolio designed as a companion to my CV and GitHub profile. It brings together selected product work, professional test-automation experience, public code and postgraduate writing.

## Current portfolio

- **Gaffer** — a football manager simulator in pre-release beta, with iOS gameplay screenshots and a link to the project Discord.
- **Automation** — professional experience across performance observability, multiplayer testing architecture, web automation and test writing.
- **Code** — selected open-source repositories and smaller macOS utilities available for review and collaboration.
- **Writing** — two MSc papers provided as directly accessible PDFs.

The app also retains the routed Wordle and Spelling Bee experiments at `/wordle` and `/spelling-bee`.

## Technology

- Vue 3 and Vue Router
- Vite
- Cypress end-to-end testing
- GitHub Pages, served from the generated `docs/` directory

## Local development

Install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Create and preview a production build with:

```sh
npm run build
npm run preview
```

## Content and assets

Homepage content is maintained in `src/views/HomeView.vue`. Its data collections cover the Gaffer screenshots, automation capabilities, public projects, smaller utilities and academic papers. Primary navigation lives in `src/components/NavBar.vue`, while the visual system is defined in `src/assets/main.css`.

The current Gaffer screenshots are loaded from:

```text
public/gaffer/club-overview.png
public/gaffer/matchday.png
public/gaffer/results-fixtures.png
```

The published papers are loaded from:

```text
public/essays/Research_Methods_Summative.pdf
public/essays/Risk Assessment and Management Plan.pdf
```

When replacing an asset, keep its filename unchanged or update the corresponding entry in `src/views/HomeView.vue`.

## Tests

Build the current site, then run the concise Cypress end-to-end suite:

```sh
npm run build
npm run test:e2e
```

The suite checks the core portfolio content and screenshots, in-page navigation and important links, both published PDFs, and basic mobile usability. Open the interactive Cypress runner with:

```sh
npm run test:e2e:dev
```

## Deployment

`npm run build` writes the production site to `docs/`. The repository is configured for GitHub Pages to serve that directory from the main branch.
