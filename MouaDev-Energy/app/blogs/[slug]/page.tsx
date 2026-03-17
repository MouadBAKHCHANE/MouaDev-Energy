import { notFound } from 'next/navigation'
import { getBlogBySlug, getAllBlogs, getAllBlogSlugs } from '@/lib/queries'
import BlogPostClient from './BlogPostClient'

export const revalidate = 0

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const [blog, allBlogs] = await Promise.all([
    getBlogBySlug(params.slug),
    getAllBlogs(),
  ])

  if (!blog) {
    notFound()
  }

  const relatedBlogs = allBlogs
    .filter((b: any) => b.slug !== params.slug)
    .slice(0, 3)

  return <BlogPostClient blog={blog} relatedBlogs={relatedBlogs} />
}
