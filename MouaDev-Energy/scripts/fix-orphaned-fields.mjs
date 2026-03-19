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

async function main() {
  // Find the homePage document
  const doc = await client.fetch(`*[_type == "homePage"][0]{ _id }`)
  if (!doc) { console.log('No homePage document found'); return }

  console.log(`Removing orphaned "heroSlides" field from homePage (${doc._id})...`)
  await client.patch(doc._id).unset(['heroSlides']).commit()
  console.log('✓ heroSlides field removed successfully')
}

main().catch((err) => { console.error(err); process.exit(1) })
