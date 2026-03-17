import { createClient } from '@sanity/client'
import { createReadStream } from 'fs'
import path from 'path'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error('Missing SANITY_API_TOKEN')
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

async function uploadAndPatch(docId, localPath, fieldName) {
  const filePath = path.join(PUBLIC, localPath)
  const filename = path.basename(filePath)

  console.log(`Uploading ${filename} for ${docId}...`)

  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename,
    contentType: filePath.endsWith('.webp') ? 'image/webp' : 'image/jpeg',
  })

  console.log(`  Asset created: ${asset._id}`)

  await client
    .patch(docId)
    .set({
      [fieldName]: {
        _type: 'image',
        asset: { _type: 'reference', _ref: asset._id },
      },
    })
    .commit()

  console.log(`  Patched ${docId}.${fieldName}`)
}

async function main() {
  // Fetch all blogs
  const blogs = await client.fetch('*[_type == "blog"]{_id, coverImg}')
  for (const blog of blogs) {
    if (blog.coverImg) {
      await uploadAndPatch(blog._id, blog.coverImg, 'coverImage')
    }
  }

  // Fetch all services
  const services = await client.fetch('*[_type == "service"]{_id, heroImg}')
  for (const svc of services) {
    if (svc.heroImg) {
      await uploadAndPatch(svc._id, svc.heroImg, 'heroImage')
    }
  }

  console.log('\nDone! All images uploaded and linked.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
