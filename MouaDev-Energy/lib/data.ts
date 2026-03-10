// ── Services ─────────────────────────────────────────────────────────────────

export interface Service {
  slug: string
  title: string
  shortDesc: string
  intro: string
  body: string[]
  includes: string[]
  steps: { title: string; desc: string }[]
  heroImg: string
  icon: string
}

export const services: Service[] = [
  {
    slug: 'rooftop-solar',
    title: 'Rooftop solar panel installation',
    shortDesc: 'Professional rooftop solar panel installation designed for maximum sunlight capture and energy output.',
    intro: 'Our rooftop solar panel installation service delivers high-performance solar systems engineered to maximise energy production while complementing your property.',
    body: [
      'We begin with a thorough site assessment to evaluate roof orientation, shading, and structural integrity. Our engineers then design a custom layout that captures the most sunlight throughout the day.',
      'Using premium solar panels and certified mounting hardware, our installation teams complete most residential projects within 1–2 days with zero structural damage to your roof.',
    ],
    includes: [
      'Full site assessment and custom system design',
      'Premium solar panels with 25-year performance warranty',
      'Certified racking and mounting hardware',
      'Grid-tie inverter installation and configuration',
      'Electrical safety inspection and certification',
      'Monitoring system setup and training',
    ],
    steps: [
      { title: 'Site assessment', desc: 'We visit your property to evaluate roof structure, orientation, and shading.' },
      { title: 'System design', desc: 'Our engineers create a custom layout optimised for maximum energy output.' },
      { title: 'Installation', desc: 'Certified technicians install panels, mounting hardware, and inverters.' },
      { title: 'Inspection', desc: 'A full electrical safety inspection is carried out before grid connection.' },
      { title: 'Grid connection', desc: 'We handle all paperwork and coordinate the grid tie-in with your utility.' },
      { title: 'Monitoring setup', desc: 'We configure your monitoring system so you can track production in real time.' },
    ],
    heroImg: 'https://framerusercontent.com/images/0HSvl4Kh9UWjFClIJIkYs1QIO0.jpg',
    icon: 'https://framerusercontent.com/images/Hyv2Ql52EMBz3P3BmYwhd17lDc.png',
  },
  {
    slug: 'solar-system-maintenance',
    title: 'Solar system maintenance',
    shortDesc: 'Scheduled maintenance to keep your solar system operating at peak efficiency year after year.',
    intro: 'Regular maintenance is the key to long system life and consistent energy output. Our technicians keep every component of your solar installation performing at its best.',
    body: [
      'Over time, connections can loosen, inverters can degrade, and firmware may need updating. Our annual maintenance visits catch small issues before they cause costly failures.',
      'Each visit includes a full visual inspection, electrical testing, panel cleaning, and a detailed report with recommendations.',
    ],
    includes: [
      'Annual or bi-annual maintenance visits',
      'Full electrical performance testing',
      'Panel cleaning and inspection',
      'Inverter firmware updates',
      'Wiring and connection integrity check',
      'Written performance report and recommendations',
    ],
    steps: [
      { title: 'Schedule visit', desc: 'Book your maintenance visit online or by phone at your convenience.' },
      { title: 'Visual inspection', desc: 'Technicians inspect panels, racking, wiring, and inverter housing.' },
      { title: 'Electrical testing', desc: 'We measure voltage, current, and output against expected values.' },
      { title: 'Cleaning', desc: 'Panels are cleaned to restore full light absorption.' },
      { title: 'Report', desc: 'You receive a written report with performance data and any recommended actions.' },
      { title: 'Follow-up', desc: 'Any repairs or replacements are scheduled and carried out promptly.' },
    ],
    heroImg: 'https://framerusercontent.com/images/d609Uzv5sske4DYDYAIapU3M.jpg',
    icon: 'https://framerusercontent.com/images/tYjjjnV08Cc8JGQRKY9g3S1qvLU.png',
  },
  {
    slug: 'off-grid-solar',
    title: 'Off grid solar installation',
    shortDesc: 'Complete off-grid solar systems with battery storage for full energy independence.',
    intro: 'Off-grid solar systems give you complete energy independence — no utility bills, no power outages, and no reliance on the grid.',
    body: [
      'We design systems sized to your exact energy consumption, combining high-capacity solar panels with lithium battery banks and smart charge controllers.',
      'Whether you need a cabin system, a farm installation, or a fully autonomous home, our team handles everything from design to commissioning.',
    ],
    includes: [
      'Energy audit and off-grid system sizing',
      'High-efficiency solar panels',
      'Lithium battery bank with BMS',
      'MPPT charge controller installation',
      'Off-grid inverter/charger configuration',
      'Full system commissioning and training',
    ],
    steps: [
      { title: 'Energy audit', desc: 'We calculate your daily energy needs to right-size the system.' },
      { title: 'System design', desc: 'Panels, batteries, and inverter are selected to meet your load requirements.' },
      { title: 'Installation', desc: 'All components are installed and wired by certified off-grid specialists.' },
      { title: 'Battery setup', desc: 'Battery management system (BMS) is configured for optimal cycle life.' },
      { title: 'Commissioning', desc: 'We test the full system under load to verify performance.' },
      { title: 'Training', desc: 'We walk you through monitoring and basic troubleshooting.' },
    ],
    heroImg: 'https://framerusercontent.com/images/1EnacoluFALIJqQC2THjamugM.jpg',
    icon: 'https://framerusercontent.com/images/gz6zByfwfxSk9G6Guihznt9CnjM.png',
  },
  {
    slug: 'solar-panel-cleaning',
    title: 'Solar panel cleaning services',
    shortDesc: 'Dirt, dust, and debris reduce your solar panels efficiency by up to 30%. Our cleaning service restores full output.',
    intro: 'A clean panel is an efficient panel. Dust, bird droppings, and pollen can reduce your energy yield by up to 30% over time.',
    body: [
      'Our trained cleaning teams use pure water systems and soft brushes specifically designed for solar panels — no abrasive chemicals that could void your warranty.',
      'We offer one-time deep cleans and regular scheduled contracts, and we always inspect panels for damage while on site.',
    ],
    includes: [
      'Pure water cleaning system (no chemicals)',
      'Soft-bristle brush and squeegee technique',
      'Visual panel inspection during service',
      'Debris removal from racking and gutters',
      'Before/after production comparison report',
      'Flexible scheduling: single visit or contract',
    ],
    steps: [
      { title: 'Booking', desc: 'Schedule a one-time clean or a recurring maintenance contract.' },
      { title: 'Pre-clean inspection', desc: 'Technicians check for cracked panels or loose connections before starting.' },
      { title: 'Cleaning', desc: 'Panels are cleaned with pure water and soft brushes to remove all soiling.' },
      { title: 'Rinse & dry', desc: 'A final rinse removes any residue and panels are left streak-free.' },
      { title: 'Output check', desc: 'We compare inverter output before and after cleaning to confirm improvement.' },
      { title: 'Report', desc: 'A service report is emailed to you after every visit.' },
    ],
    heroImg: 'https://framerusercontent.com/images/1rLEspARYhhuJ5AhgeapVxWeFA.jpg',
    icon: 'https://framerusercontent.com/images/R1Nc0cZIZe9itgYCE5FJSDaSJc.png',
  },
  {
    slug: 'wind-turbine-repair',
    title: 'Wind turbine repair services',
    shortDesc: 'Expert repair and maintenance services to keep wind turbines operating efficiently and safely.',
    intro: 'Wind turbines operate in harsh conditions and require specialist maintenance to deliver consistent power output throughout their 20+ year lifespan.',
    body: [
      'Our turbine technicians are trained to work at height and qualified to diagnose mechanical, electrical, and blade issues on all major small-to-medium wind turbine brands.',
      'We offer emergency call-outs, scheduled servicing, and long-term maintenance contracts for residential and commercial turbine owners.',
    ],
    includes: [
      'Full mechanical and electrical diagnostic',
      'Blade inspection and repair',
      'Nacelle and gearbox servicing',
      'Controller and inverter diagnostics',
      'Tower and foundation structural check',
      'Emergency call-out service',
    ],
    steps: [
      { title: 'Diagnostic call-out', desc: 'We visit the site and assess the turbine using specialised diagnostic tools.' },
      { title: 'Fault identification', desc: 'Mechanical, electrical, and blade faults are identified and documented.' },
      { title: 'Parts procurement', desc: 'Genuine or OEM-equivalent parts are sourced at competitive prices.' },
      { title: 'Repair', desc: 'Qualified technicians carry out repairs safely at height.' },
      { title: 'Testing', desc: 'The turbine is tested at multiple wind speeds to confirm full functionality.' },
      { title: 'Service report', desc: 'A detailed report is provided with all work completed and recommendations.' },
    ],
    heroImg: 'https://framerusercontent.com/images/YkROzWcb2tUmAxdUcRfBLgHacU.jpg',
    icon: 'https://framerusercontent.com/images/dzRxE4gVbVi1wRzrhrYjLRMpN4Y.png',
  },
  {
    slug: 'solar-inverter-repair',
    title: 'Solar inverter repair',
    shortDesc: 'Fast and reliable inverter diagnostics and repairs to restore peak energy performance.',
    intro: 'The inverter is the brain of your solar system. When it fails, your panels stop producing usable electricity. Our rapid repair service minimises downtime.',
    body: [
      'Our engineers can diagnose most inverter faults remotely using monitoring data before they even arrive on site, reducing repair time significantly.',
      'We carry a comprehensive stock of replacement components for all major inverter brands including SMA, Fronius, SolarEdge, Huawei, and Sungrow.',
    ],
    includes: [
      'Remote monitoring data analysis',
      'On-site fault diagnosis',
      'Component-level repair or full replacement',
      'Firmware and configuration updates',
      'Post-repair performance verification',
      'Warranty claim support',
    ],
    steps: [
      { title: 'Remote diagnosis', desc: 'We review monitoring data to identify the fault before visiting site.' },
      { title: 'Site visit', desc: 'An engineer visits to confirm the fault and assess repair options.' },
      { title: 'Repair or replace', desc: 'We repair at component level where possible, or replace with a compatible unit.' },
      { title: 'Firmware update', desc: 'Inverter firmware is updated to the latest stable version.' },
      { title: 'Reconfiguration', desc: 'Settings are reconfigured to match your system and grid requirements.' },
      { title: 'Sign-off', desc: 'Performance is verified and a service certificate is issued.' },
    ],
    heroImg: 'https://framerusercontent.com/images/arGA85cgsigolEQsZOeBSaQ4qI.jpg',
    icon: 'https://framerusercontent.com/images/2jvk0kJxyokxITdWGVCBwINpl6w.png',
  },
]

// ── Blogs ─────────────────────────────────────────────────────────────────────

export interface BlogSection {
  heading: string
  body: string
  list?: string[]
}

export interface Blog {
  slug: string
  title: string
  excerpt: string
  coverImg: string
  date: string
  category: string
  readTime: string
  sections: BlogSection[]
}

export const blogs: Blog[] = [
  {
    slug: 'how-solar-website-generates-leads',
    title: 'How a high-converting solar website generates more leads',
    excerpt: 'Discover the key elements that turn website visitors into solar installation enquiries and how to apply them to your business.',
    coverImg: 'https://framerusercontent.com/images/rGDjx8YMbG9oRVmwoQAAeYflmO0.jpg',
    date: 'January 14, 2025',
    category: 'Marketing',
    readTime: '4 min read',
    sections: [
      {
        heading: 'Why your website is your best salesperson',
        body: "In today's digital-first world, your website is often the first impression a potential customer has of your solar business. A slow, unclear, or untrustworthy site sends leads straight to your competitors.\n\nHigh-converting solar websites share a set of proven characteristics: they load fast, communicate value immediately, and make it effortless to request a quote.",
      },
      {
        heading: 'The five elements every solar site needs',
        body: 'Research into top-performing solar company websites consistently identifies five conversion drivers:',
        list: [
          'A clear headline that answers "what do you do and why should I care?"',
          'Social proof: real customer reviews and completed project photos',
          'A prominent, low-friction call-to-action (free quote, free survey)',
          'Trust signals: certifications, warranties, years in business',
          'Fast load times — every extra second costs you 7% of conversions',
        ],
      },
      {
        heading: 'Optimising your quote request form',
        body: "Long forms kill conversions. The best solar lead forms ask for three things only: name, postcode, and phone number. Everything else can be gathered during the follow-up call.\n\nA/B testing consistently shows that reducing form fields from seven to three can more than double completion rates.",
      },
    ],
  },
  {
    slug: 'solar-website-design-trends-2025',
    title: 'Solar website design trends to watch in 2025',
    excerpt: 'From bold typography to immersive imagery, here are the design trends shaping the most successful solar company websites this year.',
    coverImg: 'https://framerusercontent.com/images/XvHWqouzRd8NA25OWGOH1f8UMY.jpg',
    date: 'February 3, 2025',
    category: 'Design',
    readTime: '3 min read',
    sections: [
      {
        heading: 'Bold, large typography is dominating',
        body: "Gone are the days of small, safe headlines. The top solar websites in 2025 use oversized, high-impact headings that communicate confidence and authority at a glance.\n\nSpace Grotesk, Outfit, and Plus Jakarta Sans are the typefaces of choice — clean, modern, and highly legible on all screen sizes.",
      },
      {
        heading: 'Lime, chartreuse, and electric green',
        body: "The industry has shifted away from the traditional dark blue and grey palette. Lime green (#caf31d and similar) has emerged as the go-to accent colour for solar brands — it signals energy, sustainability, and innovation simultaneously.",
      },
      {
        heading: 'Key design trends for 2025',
        body: 'The most successful solar websites this year incorporate these design principles:',
        list: [
          'Hero sections with real installation photography, not stock images',
          'Sticky navigation that transitions from transparent to frosted glass on scroll',
          'Stacked card animations triggered by scroll position',
          'Dark-mode sections interspersed with bright white content areas',
          'Micro-animations on hover states for buttons and navigation links',
        ],
      },
    ],
  },
  {
    slug: 'stunning-online-presence-solar',
    title: 'Create stunning online presence for solar solutions',
    excerpt: "A strong online presence is no longer optional for solar companies. Here's how to build one that attracts, educates, and converts.",
    coverImg: 'https://framerusercontent.com/images/arGA85cgsigolEQsZOeBSaQ4qI.jpg',
    date: 'February 20, 2025',
    category: 'Strategy',
    readTime: '2 min read',
    sections: [
      {
        heading: 'Start with your Google Business Profile',
        body: 'Before investing in a new website, ensure your Google Business Profile is fully optimised. This is often the first result a local customer sees when searching for solar installers.\n\nAdd photos of completed installations, respond to every review, and keep your service area and contact details up to date.',
      },
      {
        heading: 'Content that educates and converts',
        body: "Whether you're a homeowner exploring solar for the first time or a business looking to reduce energy costs, you want to work with a company that clearly understands your needs.\n\nPublishing honest, helpful content — installation guides, payback calculators, FAQ pages — positions your company as the trusted expert and keeps visitors on your site longer.",
      },
      {
        heading: 'The channels that matter most',
        body: 'Focus your online presence effort on these high-ROI channels:',
        list: [
          'Google Business Profile for local search visibility',
          'Your website for credibility and lead capture',
          'Facebook and Instagram for before/after installation content',
          'LinkedIn for B2B commercial solar enquiries',
          'Google Ads for immediate, targeted lead generation',
        ],
      },
    ],
  },
]

// ── Team Members ─────────────────────────────────────────────────────────────

export interface TeamMember {
  name: string
  role: string
  src: string
}

export const teamMembers: TeamMember[] = [
  { src: 'https://framerusercontent.com/images/8lO1MDdXOmRLodroWn2TxIpCBQ4.jpg', name: 'James Carter', role: 'Chief Executive Officer' },
  { src: 'https://framerusercontent.com/images/B6SAUcWOaxeRbm7TmftAKKuE3bo.jpg', name: 'Emily Johnson', role: 'Chief Technology Officer' },
  { src: 'https://framerusercontent.com/images/84rQ0xS0GSXogxfHmYXKT30ETM.jpg', name: 'Michael Brown', role: 'Product Director' },
  { src: 'https://framerusercontent.com/images/aVsvLJkR2RekklaZEFisskMVMr0.jpg', name: 'Amy Walker', role: 'Sales Manager' },
  { src: 'https://framerusercontent.com/images/D6NjmeWaBY1FiFMHLr429HxpKRM.jpg', name: 'Liam Harris', role: 'Growth Strategist' },
  { src: 'https://framerusercontent.com/images/jwXvxAQ61mfcjjrQsvoreqxnrMg.jpg', name: 'Mia Walker', role: 'Client Relations Manager' },
]

// ── FAQs ─────────────────────────────────────────────────────────────────────

export interface FAQ {
  q: string
  a: string
}

export const faqs: FAQ[] = [
  { q: 'How long does a solar installation usually take?', a: 'Most residential solar installations are completed within 1–3 days, depending on system size and roof complexity. The full process from consultation to activation typically takes 4–8 weeks.' },
  { q: 'Do solar panels work on cloudy days?', a: 'Yes, solar panels still generate electricity on cloudy days, though at reduced efficiency. Modern panels are designed to capture diffused sunlight and can produce 10–25% of their normal output even on overcast days.' },
  { q: 'What maintenance do solar systems require?', a: 'Solar panels require minimal maintenance — typically just periodic cleaning and annual inspections. Our maintenance plans cover everything to keep your system running optimally.' },
  { q: 'What is grid tie solar solution?', a: 'A grid-tie solar system connects to the utility grid, allowing you to use solar energy during the day and draw from the grid at night. Excess energy can be sold back to the utility company.' },
]
