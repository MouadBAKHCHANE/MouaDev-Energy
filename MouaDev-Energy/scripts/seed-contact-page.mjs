import { createClient } from '@sanity/client'
import { readFileSync, readdirSync, existsSync } from 'fs'
import path from 'path'

const token = process.env.SANITY_API_TOKEN
if (!token) { console.error('Missing SANITY_API_TOKEN'); process.exit(1) }

const client = createClient({
  projectId: 'rn8uvbuk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

const PUBLIC = path.resolve('public')

function resolveFile(localPath) {
  const segments = localPath.split(/[/\\]/)
  let resolved = PUBLIC
  for (const seg of segments) {
    const candidate = path.join(resolved, seg)
    if (existsSync(candidate)) { resolved = candidate; continue }
    const entries = readdirSync(resolved)
    const match = entries.find(e => e.normalize('NFC') === seg.normalize('NFC'))
    resolved = path.join(resolved, match || seg)
  }
  return resolved
}

async function upload(localPath, label) {
  const filePath = resolveFile(localPath)
  const filename = path.basename(filePath)
  console.log(`  ${label}: ${filename}`)
  const buffer = readFileSync(filePath)
  const asset = await client.assets.upload('image', buffer, {
    filename,
    contentType: filePath.endsWith('.webp') ? 'image/webp' : 'image/png',
  })
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

async function main() {
  console.log('Seeding contactPage...')

  // Create text document
  await client.createOrReplace({
    _id: 'contactPage',
    _type: 'contactPage',
    heroTitle: 'Contactez-nous',
    sectionLabel: 'TRAVAILLONS ENSEMBLE',
    sectionTitle: 'Votre partenaire de confiance pour la maintenance énergétique',
    formTitle: 'Une question en tête ?',
    submitText: 'Envoyer le message',
  })
  console.log('✓ contactPage text seeded')

  // Upload hero image
  console.log('\nUploading contact page image...')
  const heroBg = await upload('Photos HD/Photos d_ambiance/iStock Image 1484x707.webp', 'Hero BG')

  await client.patch('contactPage').set({ heroBgImage: heroBg }).commit()
  console.log('✓ contactPage image uploaded and linked')
}

main().catch((err) => { console.error(err); process.exit(1) })
