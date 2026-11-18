export const packages = [
  {
    id: 'starter',
    name: 'Starter Spill',
    price: 149,
    blurb: 'Perfect for a first feature.',
    features: ['600-word sponsored story', '1 dofollow backlink', 'Permanent placement', 'Published in 7 days'],
  },
  {
    id: 'glow-up',
    name: 'Glow Up',
    price: 349,
    blurb: 'Our most popular package.',
    popular: true,
    features: [
      '1,200-word sponsored story',
      '3 dofollow backlinks',
      'Custom images',
      'Instagram + TikTok story share',
      'Published in 5 days',
    ],
  },
  {
    id: 'main-character',
    name: 'Main Character',
    price: 899,
    blurb: 'Go big with a full campaign.',
    features: [
      '3-story content series',
      '8 dofollow backlinks',
      'Homepage feature for 2 weeks',
      'Newsletter spotlight',
      'Performance report',
    ],
  },
] as const

export type PackageId = (typeof packages)[number]['id']
export const packageIds = packages.map((p) => p.id) as string[]
