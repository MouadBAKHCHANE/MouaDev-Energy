import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogBySlug, getAllBlogs, getAllBlogSlugs } from '@/lib/queries'
import { urlFor } from '@/lib/sanity'
import { SITE_NAME } from '@/lib/seo'
import { blogPostingJsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import JsonLd from '@/components/seo/JsonLd'
import BlogPostClient from './BlogPostClient'

export const revalidate = 0

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug)
  if (!blog) return { title: 'Article non trouvé' }

  const ogImage = blog.coverImage ? urlFor(blog.coverImage).width(1200).height(630).url() : undefined

  return {
    title: blog.seoTitle || blog.title,
    description: blog.seoDescription || blog.excerpt || `Lisez "${blog.title}" sur le blog de ${SITE_NAME}.`,
    alternates: { canonical: `/blogs/${params.slug}` },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.date,
      url: `/blogs/${params.slug}`,
      siteName: SITE_NAME,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: blog.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: ogImage ? [ogImage] : [],
    },
  }
}

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

  const ogImage = blog.coverImage ? urlFor(blog.coverImage).width(1200).height(630).url() : undefined

  return (
    <>
      <JsonLd data={blogPostingJsonLd({ title: blog.title, slug: params.slug, excerpt: blog.excerpt, date: blog.date, image: ogImage })} />
      <JsonLd data={breadcrumbJsonLd([{ name: 'Accueil', url: '/' }, { name: 'Actualités', url: '/blogs' }, { name: blog.title, url: `/blogs/${params.slug}` }])} />
      <BlogPostClient blog={blog} relatedBlogs={relatedBlogs} />
    </>
  )
}
