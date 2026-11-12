# CLAUDE.md

This file guides Claude Code (claude.ai/code) when it works in this repository.

## Commands

- `npm run dev`: dev server with Turbopack (http://localhost:3000)
- `npm run build`: production build (Turbopack)
- `npm run start`: serve the production build
- `npm run lint`: ESLint (flat config extending `next/core-web-vitals` and `next/typescript`)

There is no test suite.

## Stack

Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4 (configured through `@tailwindcss/postcss`; there is no `tailwind.config`), and React Three Fiber, drei and postprocessing for the 3D background. Nodemailer sends the contact form email. The import alias `@/*` maps to the repo root.

## Architecture

- **Content is data-driven.** All portfolio content (`personalInfo`, `socialLinks`, `navigation`, `skills`, `experiences`, `education`, `projects`) lives in `constants/data.ts`. To edit content, change that file, not the components. Every experience and project has a slug `id`.
- **Routes:**
  - `app/page.tsx` is the single-page home. It renders the section components from `components/` in this order: About, Skills, Education, Experience, Projects, Contact.
  - `app/projects/[id]` and `app/experience/[id]` are detail pages. They use `generateStaticParams` and `generateMetadata` over the arrays in `data.ts`, and `params` is a `Promise` (Next 15).
  - `app/projects/page.tsx` lists all projects.
  - `app/api/contact/route.ts` is a POST handler that validates input and sends mail through SMTP.
- **Layout** (`app/layout.tsx`): loads the local fonts DREAMS and Helvetica Now from `app/fonts` as the CSS variables `--font-dreams` and `--font-helvetica`, holds the full SEO metadata, and mounts the global `AnimatedSphereBackground`, `ScrollToTop` and `ThemeToggle`. Page content is a two-column flex layout at `lg`.
- **Theming:** class-based dark mode via `@custom-variant dark` in `app/globals.css`. The root layout renders `<html class="dark">`, so every visit opens in dark mode. `ThemeToggle` switches to light for the current visit only and persists nothing (it also clears the old `localStorage.theme` key). Custom design tokens (`portfolio`, `content`, `active`, gradient colors) are defined in the `@theme` block of `globals.css`, and `.dark` overrides `--color-portfolio`.
- **Shared UI:** `components/common` (Button, Input, Textarea, re-exported from `index.ts`), `components/ui/Timeline.tsx`, and the `cn()` helper (clsx + tailwind-merge) in `lib/utils.ts`.
- **Remote images** are allowed only from `images.unsplash.com`, `picsum.photos` and `fastly.picsum.photos` (see `next.config.ts`). Local images go in `public/`.

## Environment

The contact API needs `EMAIL_HOST`, `EMAIL_USER`, `EMAIL_PASSWORD` and `EMAIL_RECEIVER`. The optional ones are `EMAIL_PORT` (default 587), `EMAIL_SECURE` (`"true"` for port 465) and `EMAIL_FROM_NAME`.
