import type { Metadata } from 'next'
import { getAllBlogs, getAllFAQs } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Actualités',
  description: "Actualités, conseils et guides sur la maintenance énergétique, les pompes à chaleur et les panneaux solaires en Suisse.",
  alternates: { canonical: '/blogs' },
}
// Note: blogs listing page keeps static metadata (no per-page Sanity document for the blog index)
import BlogsPageClient from './BlogsPageClient'

export const revalidate = 0

export default async function BlogsPage() {
  const [blogs, faqs] = await Promise.all([
    getAllBlogs(),
    getAllFAQs(),
  ])

  const articles = blogs.map((b: any) => ({
    slug: b.slug,
    title: b.title,
    coverImage: b.coverImage,
    coverImg: b.coverImg,
    readTime: b.readTime,
  }))

  return <BlogsPageClient articles={articles} faqs={faqs} />
}
