# Sanity CMS + Next.js Integration Guide

A complete, reusable developer playbook for integrating **Sanity v3** (headless CMS) with a **Next.js App Router** frontend. Framework-agnostic patterns noted where applicable.

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Prerequisites](#2-prerequisites)
3. [Project Setup & Dependencies](#3-project-setup--dependencies)
4. [Sanity Configuration](#4-sanity-configuration)
5. [Schema Architecture](#5-schema-architecture)
6. [Client Setup & Image Builder](#6-client-setup--image-builder)
7. [GROQ Queries](#7-groq-queries)
8. [Embedding Sanity Studio in Next.js](#8-embedding-sanity-studio-in-nextjs)
9. [Desk Structure Customization](#9-desk-structure-customization)
10. [Frontend Data Consumption](#10-frontend-data-consumption)
11. [Image Handling](#11-image-handling)
12. [On-Demand Revalidation (ISR)](#12-on-demand-revalidation-isr)
13. [Seed Scripts](#13-seed-scripts)
14. [Deployment Checklist](#14-deployment-checklist)
15. [Common Patterns & Tips](#15-common-patterns--tips)

---

## 1. Architecture Overview

```
┌─────────────────┐       GROQ over HTTPS        ┌──────────────────┐
│   Next.js App   │  ◄──────────────────────────► │  Sanity Content  │
│  (App Router)   │                               │     Lake         │
│                 │       Webhook (POST)           │                  │
│  /api/revalidate│  ◄─────────────────────────── │  (on publish)    │
│                 │                               │                  │
│  /studio (embed)│  ── Sanity Studio UI ──────►  │                  │
└─────────────────┘                               └──────────────────┘
```

**How it works:**
- Content is stored in Sanity's hosted **Content Lake** (no self-hosted DB)
- The Next.js app fetches data at build/request time via **GROQ queries**
- Sanity Studio is embedded as a route in your Next.js app (`/studio`)
- On content publish, a **webhook** hits your `/api/revalidate` endpoint to refresh pages (ISR)
- Images are served from `cdn.sanity.io` with on-the-fly transforms

---

## 2. Prerequisites

- **Node.js** ≥ 18
- **npm**, **pnpm**, or **yarn**
- A **Sanity account** — sign up at [sanity.io](https://www.sanity.io/)
- A **Sanity project** — create one at [sanity.io/manage](https://www.sanity.io/manage) or via CLI:
  ```bash
  npx sanity init
  ```
  This gives you a **Project ID** and **Dataset** (usually `production`).
- An **API token** with Editor or higher permissions (for seed scripts and webhooks):
  → Sanity Dashboard → Project → API → Tokens → Add API Token

---

## 3. Project Setup & Dependencies

### 3.1 Install packages

```bash
# Core Sanity packages
npm install sanity next-sanity @sanity/client @sanity/image-url

# Optional but recommended
npm install @sanity/icons    # Icon library for studio customization
```

| Package | Purpose |
|---------|---------|
| `sanity` | Sanity Studio core (v3) |
| `next-sanity` | Next.js integration helpers (NextStudio, visual editing) |
| `@sanity/client` | GROQ query client for fetching data |
| `@sanity/image-url` | URL builder for responsive image transforms |
| `@sanity/icons` | Icons for schema/desk customization |

### 3.2 Environment variables

Create `.env.local` at project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SANITY_REVALIDATE_SECRET=any_random_secret_string
```

> **`NEXT_PUBLIC_`** prefix = exposed to browser (needed for embedded Studio).
> **Without prefix** = server-only (tokens, secrets — never leak these).

### 3.3 Next.js config — allow Sanity CDN images

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

module.exports = nextConfig
```

---

## 4. Sanity Configuration

### 4.1 Studio config

```ts
// sanity.config.ts (project root)
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'my-project',
  title: 'My Project',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: '/studio',  // URL where Studio is mounted

  plugins: [
    structureTool(),     // Default desk structure (customize later)
  ],

  schema: {
    types: schemaTypes,
  },
})
```

### 4.2 CLI config

```ts
// sanity.cli.ts (project root)
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  },
})
```

---

## 5. Schema Architecture

Schemas define the content model. They live in `sanity/schemas/`.

### 5.1 File structure

```
sanity/
  schemas/
    index.ts          ← Registers all schemas
    siteSettings.ts   ← Singleton: global settings
    homePage.ts       ← Singleton: home page content
    blog.ts           ← Collection: blog posts
    service.ts        ← Collection: services
    faq.ts            ← Collection: FAQs
    legalPage.ts      ← Collection: legal pages
```

### 5.2 Schema registry

```ts
// sanity/schemas/index.ts
import siteSettings from './siteSettings'
import homePage from './homePage'
import blog from './blog'
import service from './service'
import faq from './faq'
import legalPage from './legalPage'

export const schemaTypes = [
  siteSettings,
  homePage,
  blog,
  service,
  faq,
  legalPage,
]
```

### 5.3 Singleton pattern (one-of-a-kind pages)

Use for pages where only ONE document should exist (home, about, contact, settings).

```ts
// sanity/schemas/siteSettings.ts
import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', type: 'string', title: 'Platform' }),
            defineField({ name: 'url', type: 'url', title: 'URL' }),
          ],
        },
      ],
    }),
  ],
})
```

### 5.4 Collection pattern (multiple documents)

Use for blog posts, products, FAQs — anything with multiple entries.

```ts
// sanity/schemas/blog.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'date',
      title: 'Publish Date',
      type: 'datetime',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tech', value: 'tech' },
          { title: 'News', value: 'news' },
          { title: 'Tutorial', value: 'tutorial' },
        ],
      },
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'heading', type: 'string', title: 'Heading' }),
            defineField({ name: 'body', type: 'text', title: 'Body' }),
            defineField({
              name: 'list',
              type: 'array',
              title: 'Bullet Points',
              of: [{ type: 'string' }],
            }),
          ],
        },
      ],
    }),
  ],
  // Preview configuration for the desk list
  preview: {
    select: { title: 'title', media: 'coverImage', date: 'date' },
    prepare({ title, media, date }) {
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
      }
    },
  },
})
```

### 5.5 Common field types reference

| Type | Example | Notes |
|------|---------|-------|
| `string` | Titles, labels | Single-line text |
| `text` | Descriptions | Multi-line, `rows` option |
| `number` | Prices, counts | |
| `boolean` | Toggles | |
| `datetime` | Publish dates | ISO 8601 |
| `slug` | URL slugs | `options: { source: 'title' }` |
| `image` | Photos | `options: { hotspot: true }` for cropping |
| `url` | External links | Auto-validates URL format |
| `array` | Lists, sections | `of: [{ type: '...' }]` |
| `object` | Inline groups | Inline structured data |
| `reference` | Relations | `to: [{ type: 'author' }]` |
| `blockContent` | Rich text | Portable Text (WYSIWYG) |

### 5.6 Field groups (tabs in the editor)

```ts
defineType({
  name: 'homePage',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section', default: true },
    { name: 'services', title: 'Services Section' },
    { name: 'pricing', title: 'Pricing Section' },
  ],
  fields: [
    defineField({
      name: 'heroTitle',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'servicesTitle',
      type: 'string',
      group: 'services',
    }),
    // Fields can belong to multiple groups
    defineField({
      name: 'sharedField',
      type: 'string',
      group: ['hero', 'services'],
    }),
  ],
})
```

### 5.7 Validation rules

```ts
defineField({
  name: 'price',
  type: 'number',
  validation: (Rule) => Rule.required().min(0).max(99999),
})

defineField({
  name: 'email',
  type: 'string',
  validation: (Rule) => Rule.email().required(),
})

defineField({
  name: 'tags',
  type: 'array',
  of: [{ type: 'string' }],
  validation: (Rule) => Rule.max(5).unique(),
})

defineField({
  name: 'slug',
  type: 'slug',
  validation: (Rule) => Rule.required(),
})
```

### 5.8 Conditional fields

```ts
defineField({
  name: 'showBanner',
  type: 'boolean',
}),
defineField({
  name: 'bannerText',
  type: 'string',
  hidden: ({ parent }) => !parent?.showBanner,
}),
```

---

## 6. Client Setup & Image Builder

### 6.1 Sanity client

```ts
// lib/sanity.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',  // Use a fixed date for API stability
  useCdn: false,             // false for fresh data; true for speed (cached)
})

// Image URL builder — generates responsive image URLs
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
```

**When to use `useCdn: true`:**
- Static/public content that doesn't change frequently
- When using ISR (content updates via webhook revalidation)

**When to use `useCdn: false`:**
- Draft/preview content
- When you need real-time accuracy (e.g., Studio preview)

### 6.2 Using the image builder

```tsx
import { urlFor } from '@/lib/sanity'

// Basic usage
<img src={urlFor(post.coverImage).url()} alt="Cover" />

// With transforms
<img src={urlFor(post.coverImage).width(800).height(600).fit('crop').url()} />

// With Next.js Image component
<Image
  src={urlFor(post.coverImage).width(1200).url()}
  alt="Cover"
  width={1200}
  height={800}
/>
```

---

## 7. GROQ Queries

GROQ (Graph-Relational Object Queries) is Sanity's query language.

### 7.1 Syntax basics

```groq
// All documents of a type
*[_type == "blog"]

// Filter + order + slice
*[_type == "blog"] | order(date desc) [0..9]

// Single document (singleton)
*[_type == "homePage"][0]

// With projection (select specific fields)
*[_type == "blog"] {
  title,
  "slug": slug.current,
  excerpt,
  coverImage
}

// Parameterized query
*[_type == "blog" && slug.current == $slug][0]
```

### 7.2 Query functions pattern

Organize all queries in a single file for maintainability:

```ts
// lib/queries.ts
import { client } from './sanity'

// ── Singleton queries ────────────────────────────

export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      siteName, siteDescription, logo, phone, email,
      socialLinks[]{ platform, url }
    }`
  )
}

export async function getHomePage() {
  return client.fetch(
    `*[_type == "homePage"][0] {
      heroTitle, heroSubtitle, heroBgImage,
      servicesTitle,
      serviceCards[]{ title, image, icon, link }
    }`
  )
}

// ── Collection queries ───────────────────────────

export async function getAllBlogs() {
  return client.fetch(
    `*[_type == "blog"] | order(date desc) {
      "slug": slug.current,
      title, excerpt, coverImage, date, category
    }`
  )
}

export async function getBlogBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      "slug": slug.current,
      title, excerpt, coverImage, date, category,
      sections[]{ heading, body, list }
    }`,
    { slug }  // Pass parameters safely (prevents injection)
  )
}

// For generateStaticParams
export async function getAllBlogSlugs() {
  return client.fetch<string[]>(
    `*[_type == "blog"].slug.current`
  )
}
```

### 7.3 Shared field projections

DRY up repeated field selections:

```ts
const blogFields = `
  "slug": slug.current,
  title, excerpt, coverImage, date, category,
  sections[]{ heading, body, list }
`

export async function getAllBlogs() {
  return client.fetch(`*[_type == "blog"] | order(date desc) { ${blogFields} }`)
}

export async function getBlogBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] { ${blogFields} }`,
    { slug }
  )
}
```

### 7.4 GROQ cheat sheet

| Pattern | Example |
|---------|---------|
| All of type | `*[_type == "blog"]` |
| By ID | `*[_id == "siteSettings"]` |
| By slug | `*[_type == "blog" && slug.current == $slug][0]` |
| Order | `\| order(date desc)` |
| Limit | `[0..4]` (first 5) |
| Count | `count(*[_type == "blog"])` |
| Dereference | `author->{ name, image }` |
| Coalesce | `coalesce(customTitle, title)` |
| Computed field | `"slug": slug.current` |
| Array element projection | `items[]{ title, desc }` |
| Existence check | `*[_type == "blog" && defined(coverImage)]` |

---

## 8. Embedding Sanity Studio in Next.js

Mount Sanity Studio as a route inside your Next.js app — no separate deployment needed.

### 8.1 Studio page (catch-all route)

```tsx
// app/studio/[[...tool]]/page.tsx
'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

### 8.2 Studio layout (hide app chrome)

Hide your site's header/footer when viewing the Studio:

```tsx
// app/studio/layout.tsx
export const metadata = {
  title: 'Sanity Studio',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
```

> **Alternative:** Instead of a separate `<html>`, conditionally hide header/footer in your root layout by checking the pathname.

### 8.3 `basePath` must match

In `sanity.config.ts`, ensure `basePath` matches the route:

```ts
export default defineConfig({
  // ...
  basePath: '/studio',  // Must match app/studio/[[...tool]]/
})
```

Now visit `http://localhost:3000/studio` to access the CMS.

---

## 9. Desk Structure Customization

Control how documents appear in the Studio sidebar.

### 9.1 Singletons + collections

```ts
// sanity.config.ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

const singletonTypes = ['siteSettings', 'homePage', 'aboutPage', 'contactPage']

// Helper: create a singleton list item
const singleton = (S: any, title: string, schemaType: string) =>
  S.listItem()
    .title(title)
    .id(schemaType)
    .child(S.document().schemaType(schemaType).documentId(schemaType))

export default defineConfig({
  // ...
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singletons — shown as direct edit links
            singleton(S, 'Site Settings', 'siteSettings'),
            singleton(S, 'Home Page', 'homePage'),
            singleton(S, 'About Page', 'aboutPage'),
            singleton(S, 'Contact Page', 'contactPage'),

            S.divider(),

            // Nested folder
            S.listItem()
              .title('Service Pages')
              .child(
                S.list()
                  .title('Service Pages')
                  .items([
                    singleton(S, 'Solar Panels', 'solarPage'),
                    singleton(S, 'Heat Pump', 'heatPumpPage'),
                  ])
              ),

            S.divider(),

            // Collections — auto-listed, with singletons filtered out
            ...S.documentTypeListItems().filter(
              (item: any) => !singletonTypes.includes(item.getId()!)
            ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
    // Prevent singletons from appearing in "New document" menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },
})
```

### 9.2 Key concepts

- **`singleton()`**: Opens a single document directly (no list view)
- **`S.divider()`**: Visual separator in the sidebar
- **`S.documentTypeListItems()`**: Auto-generates list items for all registered types
- **`.filter()`**: Removes singletons from the auto-list (they're shown manually above)
- **`templates` filter**: Prevents users from creating duplicate singletons via "+ New"

---

## 10. Frontend Data Consumption

### 10.1 Server components (recommended)

Fetch data directly in async server components — no `useEffect` or loading states:

```tsx
// app/page.tsx (Server Component — default in App Router)
import { getHomePage, getSiteSettings } from '@/lib/queries'
import HeroSection from '@/components/HeroSection'

export default async function HomePage() {
  const [page, settings] = await Promise.all([
    getHomePage(),
    getSiteSettings(),
  ])

  return (
    <>
      <HeroSection
        title={page?.heroTitle ?? 'Default Title'}
        subtitle={page?.heroSubtitle ?? 'Default subtitle'}
        bgImage={page?.heroBgImage}
      />
      {/* More sections... */}
    </>
  )
}
```

### 10.2 Three-tier fallback pattern

Handle missing Sanity data gracefully:

```
1. Query returns null/undefined → component receives undefined props
2. Component uses ?? or || for defaults → "hardcoded fallback"
3. If Sanity is completely unreachable → page still renders with defaults
```

```tsx
// Server component
const page = await getHomePage()  // May return null if no document exists

// Pass with fallbacks
<HeroSection
  title={page?.heroTitle ?? 'Welcome'}
  cards={page?.serviceCards ?? defaultCards}
/>
```

### 10.3 Client components for interactivity

When you need state, animations, or browser APIs, pass server-fetched data as props:

```tsx
// app/services/page.tsx (Server)
import { getServicesPage } from '@/lib/queries'
import ServicesClient from './ServicesClient'

export default async function ServicesPage() {
  const data = await getServicesPage()
  return <ServicesClient data={data} />
}
```

```tsx
// app/services/ServicesClient.tsx (Client)
'use client'

import { motion } from 'framer-motion'

export default function ServicesClient({ data }: { data: any }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>{data?.title ?? 'Our Services'}</h1>
      {/* Interactive content */}
    </motion.div>
  )
}
```

### 10.4 Dynamic routes with generateStaticParams

```tsx
// app/blog/[slug]/page.tsx
import { getBlogBySlug, getAllBlogSlugs } from '@/lib/queries'

// Pre-render all blog pages at build time
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return (slugs ?? []).map((slug) => ({ slug }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogBySlug(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article>
      <h1>{post.title}</h1>
      {post.sections?.map((section: any, i: number) => (
        <section key={i}>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      ))}
    </article>
  )
}
```

---

## 11. Image Handling

### 11.1 The `urlFor()` chain API

```ts
import { urlFor } from '@/lib/sanity'

// Basic
urlFor(image).url()

// Resize
urlFor(image).width(800).url()
urlFor(image).width(800).height(600).url()

// Crop & hotspot (requires hotspot: true in schema)
urlFor(image).width(400).height(400).fit('crop').url()

// Format
urlFor(image).format('webp').url()

// Quality
urlFor(image).quality(80).url()

// Chain everything
urlFor(image).width(1200).height(630).fit('crop').format('webp').quality(85).url()
```

### 11.2 With Next.js `<Image>`

```tsx
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'

function CoverImage({ image, alt }: { image: any; alt: string }) {
  if (!image) return null

  return (
    <Image
      src={urlFor(image).width(1200).url()}
      alt={alt}
      width={1200}
      height={800}
      className="rounded-lg"
    />
  )
}
```

### 11.3 Null-safe image rendering

Always check if the image exists before calling `urlFor`:

```tsx
{data?.heroImage && (
  <Image src={urlFor(data.heroImage).width(1920).url()} alt="Hero" fill />
)}
```

---

## 12. On-Demand Revalidation (ISR)

When editors publish content in Sanity, automatically refresh the affected pages.

### 12.1 API route handler

```ts
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

// Map Sanity document types → Next.js paths to revalidate
const TYPE_TO_PATHS: Record<string, string[]> = {
  homePage:     ['/'],
  aboutPage:    ['/about'],
  contactPage:  ['/contact'],
  blog:         ['/blog'],
  siteSettings: ['/', '/about', '/contact', '/blog'],  // Global = refresh all
}

export async function POST(req: NextRequest) {
  // 1. Validate webhook secret
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    // 2. Parse the webhook body (Sanity sends the document)
    const body = await req.json()
    const { _type, slug } = body

    // 3. Revalidate mapped paths
    const paths = TYPE_TO_PATHS[_type]
    if (paths) {
      for (const path of paths) {
        revalidatePath(path)
      }

      // Also revalidate individual slug pages (blog posts, etc.)
      if (slug?.current) {
        revalidatePath(`/blog/${slug.current}`)
      }

      return NextResponse.json({ revalidated: true, paths })
    }

    // 4. Unknown type — revalidate everything as fallback
    revalidatePath('/', 'layout')
    return NextResponse.json({ revalidated: true, paths: ['/ (layout)'] })
  } catch {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
```

### 12.2 Sanity webhook setup

1. Go to **Sanity Dashboard → Project → API → Webhooks**
2. Create a new webhook:
   - **URL:** `https://yourdomain.com/api/revalidate?secret=YOUR_SECRET`
   - **Trigger on:** Create, Update, Delete
   - **Filter:** Leave blank (all types) or use GROQ filter like `_type in ["blog", "homePage"]`
   - **Projection:** `{ _type, slug }`
   - **HTTP method:** POST

---

## 13. Seed Scripts

Populate Sanity with initial content programmatically.

### 13.1 Seed script template

```js
// scripts/seed.mjs
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,  // Needs Editor+ permissions
  useCdn: false,
})

async function seed() {
  const transaction = client.transaction()

  // createOrReplace = idempotent (safe to run multiple times)
  transaction.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'My Website',
    siteDescription: 'A great website',
    phone: '+1 234 567 890',
    email: 'hello@example.com',
  })

  transaction.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    heroTitle: 'Welcome to Our Site',
    heroSubtitle: 'We do amazing things',
    serviceCards: [
      { _key: 'svc1', title: 'Service One', icon: '⚡' },
      { _key: 'svc2', title: 'Service Two', icon: '🔧' },
    ],
  })

  // Collection documents — use meaningful IDs
  transaction.createOrReplace({
    _id: 'blog-first-post',
    _type: 'blog',
    title: 'Our First Post',
    slug: { _type: 'slug', current: 'our-first-post' },
    date: new Date().toISOString(),
    excerpt: 'This is our very first blog post.',
    sections: [
      {
        _key: 'sec1',
        heading: 'Introduction',
        body: 'Welcome to our blog!',
      },
    ],
  })

  const result = await transaction.commit()
  console.log(`✓ Seeded ${result.results.length} documents`)
}

seed().catch(console.error)
```

### 13.2 Running the seed script

```bash
# Pass the token via environment variable
SANITY_API_TOKEN=sk_xxx node scripts/seed.mjs

# Or if using .env.local, read it inline (no dotenv needed)
SANITY_API_TOKEN=$(grep SANITY_API_TOKEN .env.local | cut -d '=' -f2) node scripts/seed.mjs
```

### 13.3 Key rules for seed data

- **`_id`**: Required. Use the schema name for singletons (e.g., `'homePage'`). Use descriptive IDs for collections.
- **`_type`**: Required. Must match a registered schema name.
- **`_key`**: Required on every item inside an `array` field. Use unique strings.
- **`createOrReplace`**: Idempotent — re-running won't create duplicates.
- **`create`**: Will error if document already exists.

---

## 14. Deployment Checklist

### 14.1 Environment variables

Set these on your hosting platform (Vercel, Netlify, etc.):

| Variable | Value | Notes |
|----------|-------|-------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your project ID | Public (client-side) |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Public (client-side) |
| `SANITY_API_TOKEN` | `sk_xxx...` | Server-only, Editor+ role |
| `SANITY_REVALIDATE_SECRET` | Random string | Server-only, for webhook auth |

### 14.2 Sanity CORS origins

In **Sanity Dashboard → Project → API → CORS Origins**, add:

- `http://localhost:3000` (dev)
- `https://yourdomain.com` (production)
- `https://your-app.vercel.app` (preview/staging)

Check **"Allow credentials"** for each.

### 14.3 Webhook configuration

- Set webhook URL to your production domain: `https://yourdomain.com/api/revalidate?secret=YOUR_SECRET`
- Test by publishing a document and checking if the page updates

### 14.4 CDN toggle

For production with ISR, you can switch to `useCdn: true` in your client config for faster reads. Content will still be fresh because the webhook triggers revalidation.

---

## 15. Common Patterns & Tips

### 15.1 TypeScript types from schemas

Define types that match your GROQ projections:

```ts
// types/sanity.ts
export interface SiteSettings {
  siteName: string
  siteDescription?: string
  logo?: any  // Sanity image reference
  phone?: string
  email?: string
  socialLinks?: { platform: string; url: string }[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt?: string
  coverImage?: any
  date?: string
  category?: string
  sections?: { heading: string; body: string; list?: string[] }[]
}
```

### 15.2 Error handling pattern

```ts
export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    return await client.fetch(`*[_type == "siteSettings"][0] { ... }`)
  } catch (error) {
    console.error('Failed to fetch site settings:', error)
    return null
  }
}
```

### 15.3 Preview mode (optional)

For draft content preview, use `next-sanity`'s preview helpers:

```ts
// lib/sanity.ts
import { createClient } from '@sanity/client'

export const client = createClient({ /* ... */ useCdn: true })
export const previewClient = createClient({ /* ... */ useCdn: false, token: process.env.SANITY_API_TOKEN })

export function getClient(preview = false) {
  return preview ? previewClient : client
}
```

### 15.4 Portable Text (rich text)

For rich text fields, use `@portabletext/react`:

```bash
npm install @portabletext/react
```

```tsx
import { PortableText } from '@portabletext/react'

<PortableText value={post.body} />
```

### 15.5 Quick reference — project file structure

```
project-root/
├── .env.local                        # Env vars (gitignored)
├── sanity.config.ts                  # Studio configuration
├── sanity.cli.ts                     # CLI configuration
├── next.config.js                    # Image remotePatterns
│
├── sanity/
│   └── schemas/
│       ├── index.ts                  # Schema registry
│       ├── siteSettings.ts           # Singleton schema
│       ├── homePage.ts               # Singleton schema
│       ├── blog.ts                   # Collection schema
│       └── ...
│
├── lib/
│   ├── sanity.ts                     # Client + urlFor
│   └── queries.ts                    # All GROQ query functions
│
├── app/
│   ├── studio/
│   │   ├── layout.tsx                # Studio layout (hides app chrome)
│   │   └── [[...tool]]/
│   │       └── page.tsx              # NextStudio mount
│   │
│   ├── api/
│   │   └── revalidate/
│   │       └── route.ts              # Webhook handler for ISR
│   │
│   ├── page.tsx                      # Home (server component → fetch)
│   ├── blog/
│   │   ├── page.tsx                  # Blog list
│   │   └── [slug]/
│   │       └── page.tsx              # Blog detail (generateStaticParams)
│   └── ...
│
└── scripts/
    └── seed.mjs                      # Seed script
```

---

**That's it.** This guide covers the full integration from zero to production. For each new project, follow Steps 1-8 sequentially, then add revalidation (Step 10) and seed scripts (Step 11) as needed.
