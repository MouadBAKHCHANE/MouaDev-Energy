import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) { console.error('Missing SANITY_API_TOKEN'); process.exit(1) }

const client = createClient({
  projectId: 'rn8uvbuk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

const DEFAULT_ORDER = [
  { _type: 'sectionEntry', _key: 'hero', sectionId: 'hero', enabled: true },
  { _type: 'sectionEntry', _key: 'ourServices', sectionId: 'ourServices', enabled: true },
  { _type: 'sectionEntry', _key: 'servicesLime', sectionId: 'servicesLime', enabled: true },
  { _type: 'sectionEntry', _key: 'about', sectionId: 'about', enabled: true },
  { _type: 'sectionEntry', _key: 'pricing', sectionId: 'pricing', enabled: true },
  { _type: 'sectionEntry', _key: 'process', sectionId: 'process', enabled: true },
  { _type: 'sectionEntry', _key: 'marquee', sectionId: 'marquee', enabled: true },
  { _type: 'sectionEntry', _key: 'faq', sectionId: 'faq', enabled: true },
  { _type: 'sectionEntry', _key: 'news', sectionId: 'news', enabled: true },
]

async function main() {
  const doc = await client.fetch(`*[_type == "homePage"][0]{ _id }`)
  if (!doc) { console.log('No homePage document found'); return }

  console.log(`Seeding sectionOrder on homePage (${doc._id})...`)
  await client.patch(doc._id).setIfMissing({ sectionOrder: DEFAULT_ORDER }).commit()
  console.log('✓ sectionOrder initialized successfully')
}

main().catch((err) => { console.error(err); process.exit(1) })
