import { createClient } from '@sanity/client'
import { createReadStream } from 'fs'
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

async function uploadImage(localPath, label) {
  const filePath = path.join(PUBLIC, localPath)
  const filename = path.basename(filePath)
  console.log(`  Uploading ${label}: ${filename}...`)
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename,
    contentType: 'image/webp',
  })
  console.log(`    Asset: ${asset._id}`)
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
  }
}

async function main() {
  console.log('Uploading logos and images...\n')

  const logoLight = await uploadImage('Logo complet/Blanc.webp', 'Logo clair (fond sombre)')
  const logoDark = await uploadImage('Logo complet/Vert medium.webp', 'Logo foncé (fond clair)')
  const logoIcon = await uploadImage('Logo image/Blanc.webp', 'Logo icône seule')

  console.log('\nPatching siteSettings with logos + social links...')

  await client
    .patch('siteSettings')
    .set({
      logoLight,
      logoDark,
      logoIcon,
      socialLinks: [
        { _key: 'fb', platform: 'facebook', url: 'https://facebook.com' },
        { _key: 'ig', platform: 'instagram', url: 'https://instagram.com' },
      ],
    })
    // Remove old flat social fields
    .unset(['socialFacebook', 'socialInstagram'])
    .commit()

  console.log('✓ siteSettings updated with logos, icons, and social links')
}

main().catch((err) => { console.error(err); process.exit(1) })
