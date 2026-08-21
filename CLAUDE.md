# isra-page

Portafolio personal. Next.js 14.2.4 (App Router) + Tailwind + Flowbite React.

## Comandos (npm, no bun)

Este repo es el único de `solution-react` que sigue en npm: tiene
`package-lock.json` committeado y sigue en Next 14, mientras el resto del
árbol ya migró a Next 16 con bun. No hay lockfile de bun aquí — no propongas
migrar sin que te lo pidan explícitamente.

- `npm run dev` — servidor de desarrollo (localhost:3000).
- `npm run build` — build de producción (`next build`).
- `npm run start` — sirve el build de producción.
- `npm run lint` — `next lint` (`next/core-web-vitals`, sin reglas extra).
- No hay test runner configurado (sin jest/vitest, sin script `test`). No
  inventes uno sin que se pida.

## Arquitectura

`src/app/page.tsx` es una sola página que compone secciones (`presentation`,
`contact-information`, `summary`, `experience`, `skills`, `language`,
`education`, `certifications`) envueltas en `HomeSection`. Cada sección vive
en `src/components/<Nombre>/<Nombre>.tsx`, en su propia carpeta PascalCase
(no kebab-case); los datos que le pertenecen a un componente van colocados
ahí mismo (ej. `Experience/ExperienceData.ts`), no en un archivo central.
`layout.tsx` monta `NavbarPage` y `FooterPage` alrededor de todo. Varias
secciones (`contact-information`, `skills`, `language`, `education`,
`certifications`) siguen con Lorem ipsum: el portafolio está en construcción,
no asumas que ese contenido es real.

## Decisiones no obvias

- `next.config.mjs` fija `basePath: "/isra-page"` porque el deploy es a
  GitHub Pages bajo esa subruta. Next NO reescribe automáticamente rutas de
  asset dentro de clases Tailwind (`bg-[url(...)]`) ni imports de imagen con
  ese basePath — por eso `src/util/constants.ts` expone `IMAGE_PATH` y los
  componentes lo interpolan a mano (ver comentario en `page.tsx` sobre
  hardcodear la ruta). Si agregas una imagen de fondo por Tailwind, tenés que
  prefijarla con `IMAGE_PATH` vos mismo.
- Import paths mezclados: el alias `@/*` → `./*` de `tsconfig.json` se usa
  como `@/src/util/...` en algunos componentes (`NavbarPage`, `FooterPage`,
  `Presentation`), pero `src/app/page.tsx` y `layout.tsx` importan componentes
  con rutas relativas (`../components/...`). Ambas funcionan; no hay un
  criterio único todavía, así que no asumas cuál "es la correcta".

## Deploy a GitHub Pages

`next.config.mjs` tiene `output: "export"` e `images.unoptimized: true`
(requerido: `next/image` no tiene servidor de optimización en export
estático — lo usa `Presentation.tsx`). `npm run build` genera `./out`, que
es lo que `.github/workflows/nextjs.yml` sube vía `upload-pages-artifact`.
