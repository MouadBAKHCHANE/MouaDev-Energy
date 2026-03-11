'use client'

import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/layout/PageHero'
import { blogs } from '@/lib/data'

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0 },
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string

  const blog = blogs.find((b) => b.slug === slug)
  if (!blog) {
    notFound()
  }

  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3)

  return (
    <main>
      <PageHero
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blogs' },
          { label: blog.title },
        ]}
        title={blog.title}
        bgImage={blog.coverImg}
      />

      {/* ── Article ───────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '100px 20px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Meta bar */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              display: 'flex',
              gap: 20,
              marginBottom: 40,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                background: '#f8f8f8',
                padding: '6px 16px',
                borderRadius: 100,
                fontSize: 14,
                color: '#777',
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
              }}
            >
              {blog.date}
            </span>
            <span
              style={{
                background: '#0a1f1e',
                color: '#fff',
                padding: '6px 16px',
                borderRadius: 100,
                fontSize: 14,
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
              }}
            >
              {blog.category}
            </span>
            <span
              style={{
                color: '#777',
                fontSize: 14,
                fontFamily: "var(--font-jost), 'Jost', sans-serif",
              }}
            >
              {blog.readTime}
            </span>
          </motion.div>

          {/* Cover image */}
          <motion.img
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            src={blog.coverImg}
            alt={blog.title}
            style={{
              width: '100%',
              height: 420,
              objectFit: 'cover',
              borderRadius: 20,
              marginBottom: 50,
              display: 'block',
            }}
          />

          {/* Article body — sections */}
          {blog.sections.map((section, i) => (
            <motion.div
              key={i}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.06 }}
              style={{ marginBottom: 40 }}
            >
              {/* Section heading */}
              <h2
                style={{
                  fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                  fontSize: 30,
                  fontWeight: 600,
                  letterSpacing: -1,
                  margin: '0 0 16px',
                  color: '#000',
                }}
              >
                {section.heading}
              </h2>

              {/* Section body — split on double newline */}
              {section.body.split('\n\n').map((paragraph, pi) => (
                <p
                  key={pi}
                  style={{
                    fontFamily: "var(--font-jost), 'Jost', sans-serif",
                    fontSize: 18,
                    lineHeight: '28px',
                    color: '#333',
                    marginBottom: 16,
                    margin: '0 0 16px',
                  }}
                >
                  {paragraph}
                </p>
              ))}

              {/* Optional list */}
              {section.list && (
                <ul
                  style={{
                    listStyle: 'none',
                    margin: '16px 0 0',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  {section.list.map((item, li) => (
                    <li
                      key={li}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                        fontSize: 17,
                        color: '#333',
                        lineHeight: '26px',
                      }}
                    >
                      {/* Lime bullet square */}
                      <span
                        style={{
                          width: 10,
                          height: 10,
                          minWidth: 10,
                          background: '#50B5A2',
                          borderRadius: 2,
                          marginTop: 8,
                          display: 'inline-block',
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Related articles ──────────────────────────────────────────────── */}
      <section style={{ background: '#f8f8f8', padding: '80px 20px' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          <motion.h3
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{
              fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
              fontSize: 32,
              fontWeight: 600,
              marginBottom: 40,
              color: '#000',
            }}
          >
            More articles
          </motion.h3>

          <div className="related-grid">
            {relatedBlogs.map((related, i) => (
              <motion.div
                key={related.slug}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
                style={{
                  borderRadius: 20,
                  overflow: 'hidden',
                  background: '#fff',
                }}
              >
                <img
                  src={related.coverImg}
                  alt={related.title}
                  style={{
                    width: '100%',
                    height: 220,
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div style={{ padding: 25 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      marginBottom: 12,
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        background: '#0a1f1e',
                        color: '#fff',
                        padding: '4px 12px',
                        borderRadius: 100,
                        fontSize: 13,
                        fontFamily: "var(--font-inter), 'Inter', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {related.category}
                    </span>
                    <span
                      style={{
                        color: '#777',
                        fontSize: 14,
                        fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      }}
                    >
                      {related.date}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: '26px',
                      margin: '0 0 8px',
                      color: '#000',
                    }}
                  >
                    {related.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-jost), 'Jost', sans-serif",
                      fontSize: 15,
                      color: '#777',
                      lineHeight: '22px',
                      margin: '0 0 16px',
                    }}
                  >
                    {related.excerpt}
                  </p>
                  <RelatedReadMoreLink slug={related.slug} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        @media (max-width: 768px) {
          .related-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </main>
  )
}

function RelatedReadMoreLink({ slug }: { slug: string }) {
  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#50B5A2'
  }
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#000'
  }

  return (
    <Link
      href={`/blogs/${slug}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 14,
        fontWeight: 600,
        color: '#000',
        fontFamily: "var(--font-jost), 'Jost', sans-serif",
        transition: 'color 0.18s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Read More
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Link>
  )
}
