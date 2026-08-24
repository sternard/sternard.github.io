# Stephen Bernard — portfolio

A Vue 3 portfolio for selected product work, test automation, public code and academic writing.

## Local development

```sh
npm install
npm run dev
```

Create a production build in `docs/` with:

```sh
npm run build
```

## Adding the missing portfolio material

The homepage deliberately uses honest placeholders where source material has not been supplied yet.

### Gaffer

Add three portrait iOS screenshots at these exact paths:

```text
public/gaffer/club-overview.png
public/gaffer/matchday.png
public/gaffer/results-fixtures.png
```

The phone frames will display the images automatically. The Gaffer Discord invite is configured in `discordUrl` near the top of `src/views/HomeView.vue`.

### Academic papers

Replace the `paper-placeholder` article in `src/views/HomeView.vue` with paper cards or article routes. A strong entry should include a title, abstract, submission context, date, citation and downloadable PDF.

## Deployment

Vite writes the site to `docs/`, matching GitHub Pages deployments configured to serve the `/docs` directory on the main branch.
