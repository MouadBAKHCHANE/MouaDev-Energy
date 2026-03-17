import { getAllBlogs, getAllFAQs } from '@/lib/queries'
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
