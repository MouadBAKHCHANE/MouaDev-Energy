import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

const TYPE_TO_PATHS: Record<string, string[]> = {
  panneauxSolairesPage: ['/services/panneaux-solaires'],
  pompeChaleurPage:     ['/services/pompe-a-chaleur'],
  boilerPage:           ['/services/boiler-thermodynamique'],
  pvCleanPage:          ['/services/pv-clean'],
  homePage:             ['/'],
  aboutPage:            ['/about-us'],
  contactPage:          ['/contact-us'],
  blog:                 ['/blogs'],
  service:              ['/services'],
  faq:                  ['/'],
  siteSettings:         ['/', '/services', '/about-us', '/contact-us'],
}

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { _type, slug } = body

    const paths = TYPE_TO_PATHS[_type]

    if (paths) {
      for (const path of paths) {
        revalidatePath(path)
      }
      if (slug?.current) {
        revalidatePath(`/blogs/${slug.current}`)
        revalidatePath(`/services/${slug.current}`)
      }
      return NextResponse.json({ revalidated: true, paths })
    }

    // Unknown type — revalidate everything
    revalidatePath('/', 'layout')
    return NextResponse.json({ revalidated: true, paths: ['/ (layout)'] })
  } catch {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
