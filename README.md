# chrétienstudios: landing page

Next.js (App Router, TypeScript) landing page for chrétienstudios: brand identity and matchday design for sports clubs and agencies.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub, then import the repo at vercel.com/new. Vercel detects Next.js automatically; no settings needed.

## Edit

- Copy, services, showcase and process steps: `lib/content.ts`
- Colours and layout: `app/globals.css` (CSS variables at the top)
- Real work images: drop files in `public/work/` and add `image: "/work/your-file.jpg"` to any poster in `lib/content.ts`
- Contact form: sends enquiries to your inbox through Web3Forms (`components/ContactForm.tsx`). In Vercel, add the environment variable `NEXT_PUBLIC_WEB3FORMS_KEY` with your access key, then redeploy. Without the key it falls back to opening the visitor's email app.
