/**
 * Upload & wire panneaux-solaires page images into Sanity.
 * Run: node scripts/seed-panneaux-images.mjs
 * Requires SANITY_API_TOKEN in .env.local
 */
import { createClient } from '@sanity/client'
import { createReadStream } from 'fs'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { readFileSync } from 'fs'

// Load .env.local manually (no dotenv dependency)
try {
  const envContent = readFileSync('.env.local', 'utf8')
  for (const line of envContent.split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/)
    if (match) process.env[match[1].trim()] = match[2].trim().replace(/^['"]|['"]$/g, '')
  }
} catch {}

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('Missing SANITY_API_TOKEN in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId: 'rn8uvbuk',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

const PUBLIC = path.resolve('public')
const DOC_ID = 'panneauxSolairesPage'

async function uploadImage(localPath, label) {
  const filePath = path.join(PUBLIC, localPath)
  if (!existsSync(filePath)) {
    console.warn(`  ⚠ File not found, skipping: ${filePath}`)
    return null
  }
  const filename = path.basename(filePath)
  const contentType = filePath.endsWith('.webp') ? 'image/webp' : 'image/jpeg'

  console.log(`  Uploading ${label}: ${filename}`)
  const asset = await client.assets.upload('image', createReadStream(filePath), { filename, contentType })
  console.log(`    ✓ Asset ID: ${asset._id}`)
  return asset._id
}

function imageRef(assetId) {
  return { _type: 'image', asset: { _type: 'reference', _ref: assetId } }
}

async function main() {
  console.log('=== Uploading Panneaux Solaires page images to Sanity ===\n')

  // 1. Hero background image
  const heroId = await uploadImage(
    'Photos HD/Photos produits/Panneaux solaires/roof-house-with-solar-panels-roof-natureproduced-energy-sunproduced-energy-ph.webp',
    'heroBgImage'
  )

  // 2. Main image (left column)
  const mainId = await uploadImage(
    'Photos HD/Photos produits/Panneaux solaires/man-worker-firld-by-solar-panels.webp',
    'mainImage'
  )

  // 3. PV Clean section image
  const pvCleanId = await uploadImage(
    'Photos HD/Photos produits/Panneaux solaires/man-solar-technician-installing-solar-panel-outdoors.webp',
    'pvCleanImage'
  )

  // 4. Detail images (2 images for the "Pourquoi" section)
  const detail1Id = await uploadImage(
    'Photos HD/Visuels Technique/Technique - PV/Ouvrier et panneaux solaires.webp',
    'detailImages[0]'
  )
  // Find the Réparation file dynamically (accented filename encoding may vary)
  const pvDir = path.join(PUBLIC, 'Photos HD/Visuels Technique/Technique - PV')
  const pvFiles = (await import('fs')).readdirSync(pvDir)
  const reparationFile = pvFiles.find(f => f.toLowerCase().includes('paration de panneaux'))
  const detail2Id = reparationFile
    ? await uploadImage(`Photos HD/Visuels Technique/Technique - PV/${reparationFile}`, 'detailImages[1]')
    : null

  // Build patch
  const patch = {}
  if (heroId) patch.heroBgImage = imageRef(heroId)
  if (mainId) patch.mainImage = imageRef(mainId)
  if (pvCleanId) patch.pvCleanImage = imageRef(pvCleanId)

  const detailImages = []
  if (detail1Id) detailImages.push({ ...imageRef(detail1Id), _key: 'detail1' })
  if (detail2Id) detailImages.push({ ...imageRef(detail2Id), _key: 'detail2' })
  if (detailImages.length) patch.detailImages = detailImages

  if (Object.keys(patch).length === 0) {
    console.log('\nNo images uploaded — nothing to patch.')
    return
  }

  console.log(`\nPatching document "${DOC_ID}"...`)
  await client.patch(DOC_ID).set(patch).commit()
  console.log('✓ Done! All images are now linked in Sanity Studio.')
  console.log('\nOpen Studio → Page Panneaux Solaires to verify.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
