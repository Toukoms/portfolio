This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Resume data and PDF

Profile, contact, education, skills, distinctions, hero, and case-study content is stored in Supabase's relational tables. Work history is stored in `experiences`: each language has a short project introduction and a separate array of contribution bullets. Projects are stored in `projects`. Edit these records in Supabase Studio/Table Editor; the public site uses read-only access. The résumé and profile image stay in `public/`, with their paths managed in `src/data.ts`; the displayed experience duration is calculated from the earliest listed experience and its wording is localized in `src/locales/`.

Generate the PDF in `public/` with:

```sh
pnpm cv:generate
```

`pnpm build` also regenerates the PDF before building. The generator reads its profile, experience, and project content from Supabase using the URL and anon key in `.env.local` or the environment; it does not need a service-role key.

## Supabase content setup

Portfolio projects and experience entries are loaded from Supabase. To set it up:

1. Link the Supabase project with the CLI and apply pending migrations with `pnpm dlx supabase db push`. This applies the ordered migrations under `supabase/migrations`; local Supabase setup applies them automatically.
2. Add the project URL and anon key to your local `.env.local` and deployment environment, using `.env.template` as a guide. Never use a service-role key in the app.
3. Add or edit the `profile` and `case-studies` JSON rows in `portfolio_content`, plus rows in `projects` and `experiences`. Keep English/French values together in the JSON rows. Experience `description_en`/`description_fr` should be a brief project introduction; put individual contributions in `contributions_en`/`contributions_fr` so the site and PDF show them as bullets. Project names are shared between languages and descriptions use `description_en` and `description_fr`; categories must be `web`, `mobile`, `desktop`, or `other`. Experience company names are shared, while titles and dates have English and French columns.
4. For project images, use an existing supported image URL or upload an image to a public Supabase Storage bucket and save its public URL in `projects.image`.

The public site can read these tables, but its Row Level Security policies do not allow public writes. Table changes are reflected within about a minute. Existing Firebase project records are not copied automatically; export them from Firebase and import them into `projects`, mapping the Firestore document ID to `id`, `isFavorite` to `is_favorite`, `demoUrl` to `demo_url`, `githubUrl` to `github_url`, and `createdAt` to `created_at`. Project IDs are text so existing Firestore IDs can be preserved. Populate both description columns for each project.

### Local Supabase with Docker

Install Docker Desktop (or Docker Engine with Compose), then from the project root run:

```sh
pnpm dlx supabase start
pnpm dlx supabase status -o env
```

The CLI starts a local PostgreSQL database, Supabase API, and Studio. The first start downloads the required images. The initial schema migration and local-only sample content in `supabase/seed.sql` are applied with:

```sh
pnpm dlx supabase db reset
```

Copy the local `API_URL` and `ANON_KEY` values printed by `supabase status -o env` to `.env.local` as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`, then run `pnpm dev`. Visit the `/en` and `/fr` routes to check localized project descriptions. Studio is available at <http://127.0.0.1:54323>. Stop the containers with `pnpm dlx supabase stop`.

Local sample records are only used by the local Supabase seed. Do not copy the local credentials into a hosted deployment.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
