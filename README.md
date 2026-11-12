# Muhammad Bilal Yousaf: Portfolio

Personal portfolio of a Full Stack Software Engineer (React, Next.js, Node.js, Angular, ASP.NET Core).

**Live:** https://muhammad-bilal-yousaf.vercel.app

## Highlights

- **Next.js 15 App Router + React 19**, statically generated case-study pages for every project and role.
- **3D, done lightly:** an interactive WebGL particle field (React Three Fiber) that reacts to the cursor and scroll, plus a 3D laptop on each case study that shows the project image and can be rotated by dragging. Both are lazy-loaded in their own chunks and turned off for `prefers-reduced-motion` and browsers without WebGL.
- **Tilt cards:** CSS 3D perspective tilt with a moving highlight on project cards (mouse only).
- **Content as data:** everything on the site comes from [`constants/data.ts`](constants/data.ts).
- **Contact form:** a Next.js route handler that sends mail through SMTP (Nodemailer), with input validation, HTML escaping, a honeypot field and per-IP rate limiting.
- **SEO:** full metadata, Open Graph images, sitemap, robots and `Person` / `CreativeWork` JSON-LD.
- **Accessibility:** skip link, labelled navigation, focus styles and reduced-motion support.

## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · React Three Fiber · drei · three.js · Nodemailer

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

### Environment variables (contact form)

| Variable | Required | Notes |
| --- | --- | --- |
| `EMAIL_HOST` | yes | SMTP host |
| `EMAIL_USER` | yes | SMTP user, also the "from" address |
| `EMAIL_PASSWORD` | yes | SMTP password or app password |
| `EMAIL_RECEIVER` | yes | Where messages are delivered |
| `EMAIL_PORT` | no | Defaults to `587` |
| `EMAIL_SECURE` | no | `"true"` for port 465 |
| `EMAIL_FROM_NAME` | no | Display name on sent mail |

## Project structure

```
app/                 routes (home, /projects, /experience, case studies, contact API)
components/          page sections and shared UI
components/three/    WebGL scenes (particle field, laptop showcase)
constants/data.ts    all portfolio content
public/assets/       logos and project screenshots
```
