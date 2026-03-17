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
    if (existsSync(candidate)) {
      resolved = candidate
      continue
    }
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
  console.log('Uploading about page images...\n')

  const heroBg = await upload('Photos HD/Photos produits/Panneaux solaires/solar-generator-field-outside-small-rural-town.webp', 'Hero BG')
  const introImg = await upload('Photos HD/Photos d_ambiance/person-near-alternative-energy-plant.webp', 'Intro Image')
  const whyBg = await upload('Photos HD/Photos d_ambiance/man-showing-thumbs-up-gesture-ie-class-front-roof-with-installed-solar-panels.webp', 'Why BG')

  console.log('\nPatching aboutPage with images...')

  await client.patch('aboutPage').set({
    heroBgImage: heroBg,
    introImage: introImg,
    whyBgImage: whyBg,
  }).commit()

  console.log('✓ aboutPage images uploaded and linked successfully')
}

main().catch((err) => { console.error(err); process.exit(1) })
