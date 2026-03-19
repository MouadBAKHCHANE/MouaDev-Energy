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

function makeEntries(sectionIds) {
  return sectionIds.map((id) => ({
    _type: 'sectionEntry',
    _key: id,
    sectionId: id,
    enabled: true,
  }))
}

const PAGES = [
  {
    type: 'homePage',
    sections: ['hero', 'ourServices', 'servicesLime', 'about', 'pricing', 'process', 'marquee', 'faq', 'news'],
  },
  {
    type: 'servicesPage',
    sections: ['hero', 'cards', 'stats', 'experience', 'details', 'cta'],
  },
  {
    type: 'aboutPage',
    sections: ['hero', 'intro', 'whyChoose'],
  },
  {
    type: 'contactPage',
    sections: ['hero', 'contactForm'],
  },
  {
    type: 'panneauxSolairesPage',
    sections: ['hero', 'content', 'contracts', 'pvClean', 'why', 'faq'],
  },
  {
    type: 'pompeChaleurPage',
    sections: ['hero', 'content', 'contracts', 'why', 'faq'],
  },
  {
    type: 'boilerPage',
    sections: ['hero', 'content', 'contracts', 'why', 'faq'],
  },
  {
    type: 'pvCleanPage',
    sections: ['hero', 'content', 'offer', 'why', 'faq'],
  },
]

async function main() {
  for (const page of PAGES) {
    const doc = await client.fetch(`*[_type == "${page.type}"][0]{ _id }`)
    if (!doc) {
      console.log(`⚠ No ${page.type} document found — skipping`)
      continue
    }

    console.log(`Seeding sectionOrder on ${page.type} (${doc._id})...`)
    await client
      .patch(doc._id)
      .set({ sectionOrder: makeEntries(page.sections) })
      .commit()
    console.log(`✓ ${page.type} done`)
  }

  console.log('\n✅ All pages seeded.')
}

main().catch((err) => { console.error(err); process.exit(1) })
