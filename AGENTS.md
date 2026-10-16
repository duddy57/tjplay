# Repository instructions

- Use Bun with the committed `bun.lock`; Node must be `>=22.12.0`.
- Available scripts are `bun run dev`, `bun run build`, `bun run preview`, `bun run check`, and `bun run format` (`prettier --write .`). There are no test, lint, or CI commands in this repository.
- Astro uses the repository root as `srcDir`; `@/*` aliases the root. Routes live in `pages/`; `layouts/` contains the shared shell; `components/` contains page sections and shared UI; editable content is in `data/`.
- Customer and journal Markdown content lives in `data/customers/` and `data/journal/`. Their frontmatter is validated by the schemas in `content.config.ts`; update those schemas when content fields change.
- `components/animation/main.ts` registers GSAP plugins and eagerly initializes every module in `components/animation/init/*.ts` globally. New animation init modules therefore run site-wide.
- Regenerate Open Graph images with `node scripts/og/generate-all.mjs --force`; this requires Chrome or Edge.
- Prettier ignores dependencies/generated files, `public/`, `assets/images/`, `data/**/*.md`, and `data/json/` (including `node_modules/`, `dist/`, and `.astro/`).
