export type Category = 'Money' | 'Tech' | 'Style' | 'Travel' | 'Wellness' | 'Hustle'

export type Section = { heading?: string; body: string[] }

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: Category
  author: string
  date: string
  readMinutes: number
  image: string
  imageAlt: string
  featured?: boolean
  sponsored?: boolean
  content: Section[]
}

export const categories: Category[] = ['Money', 'Tech', 'Style', 'Travel', 'Wellness', 'Hustle']

export const posts: Post[] = [
  {
    slug: 'side-hustle-to-main-character',
    title: 'From side hustle to main character: building a brand from your bedroom',
    excerpt:
      'No office, no investors, just Wi-Fi and a ring light. How a new wave of creators is turning bedroom studios into real businesses.',
    category: 'Hustle',
    author: 'Maya Okafor',
    date: '2026-11-12',
    readMinutes: 7,
    image: '/images/post-side-hustle.png',
    imageAlt: 'A young creator working on a laptop in a colorful bedroom studio with a ring light',
    featured: true,
    content: [
      {
        body: [
          'The 9-to-5 is not dead, but it definitely has competition. A growing number of people in their early twenties are launching businesses from the same room they sleep in, and some of them are out-earning their parents.',
          'The secret is not a viral moment. It is consistency, a clear niche, and treating your audience like friends rather than followers.',
        ],
      },
      {
        heading: 'Start embarrassingly small',
        body: [
          'Every creator we spoke to said the same thing: the first version of their idea was tiny. One product, one platform, one type of post. Narrow focus makes it easy for people to remember what you do.',
        ],
      },
      {
        heading: 'Systems over vibes',
        body: [
          'Motivation comes and goes. A simple content calendar, a batch-filming day, and a spreadsheet for income are what keep a side hustle alive through the slow weeks.',
          'Pick tools you will actually open. A notes app you use daily beats a fancy dashboard you abandon in a week.',
        ],
      },
      {
        heading: 'Know when to go full time',
        body: [
          'The rule of thumb: when your side income covers six months of expenses and keeps growing for three months straight, you are ready to have the conversation with yourself.',
        ],
      },
    ],
  },
  {
    slug: 'thrift-flip-economy',
    title: 'The thrift flip economy is worth more than you think',
    excerpt:
      'Vintage is no longer a niche. We break down how resale became the most sustainable flex in fashion.',
    category: 'Style',
    author: 'Jordan Reyes',
    date: '2026-11-09',
    readMinutes: 5,
    image: '/images/post-thrift.png',
    imageAlt: 'Friends browsing a rack of colorful vintage clothing in a thrift store',
    content: [
      {
        body: [
          'Buying secondhand used to be about saving money. Now it is about standing out. Nobody wants to show up wearing the same fast-fashion top as three other people at the party.',
        ],
      },
      {
        heading: 'Why resale is booming',
        body: [
          'Resale apps made it effortless to buy and sell, and a whole generation grew up caring about where their clothes come from. Combine those and you get a market that keeps growing every year.',
        ],
      },
      {
        heading: 'How to flip like a pro',
        body: [
          'Look for quality fabrics, recognizable labels, and pieces that photograph well. Clean, steam, and shoot in natural light. Honest descriptions build repeat buyers faster than any discount.',
        ],
      },
    ],
  },
  {
    slug: 'ai-made-my-group-chat-weird',
    title: 'AI made our group chat weird (and kind of better)',
    excerpt:
      'Chatbots are writing our birthday messages and planning our trips. Is that cringe, or the future of friendship?',
    category: 'Tech',
    author: 'Sam Lee',
    date: '2026-11-05',
    readMinutes: 6,
    image: '/images/post-ai.png',
    imageAlt: 'A surreal collage of a floating smartphone surrounded by glowing chat bubbles',
    content: [
      {
        body: [
          'It started with someone asking an AI to settle a debate. Two weeks later it was planning our weekend, roasting our playlists, and drafting apology texts.',
        ],
      },
      {
        heading: 'The good',
        body: [
          'Logistics got painless. Splitting bills, comparing flights, and finding a restaurant everyone can afford now takes minutes instead of a 200-message thread.',
        ],
      },
      {
        heading: 'The weird',
        body: [
          'When a heartfelt message reads a little too polished, you start wondering who actually wrote it. Our new rule: AI for planning, humans for feelings.',
        ],
      },
    ],
  },
  {
    slug: 'budget-travel-europe-2027',
    title: 'Europe on a student budget: the 2027 playbook',
    excerpt:
      'Night trains, hostel hacks and the cities that are still affordable. Your passport is about to get a glow up.',
    category: 'Travel',
    author: 'Priya Nair',
    date: '2026-10-30',
    readMinutes: 8,
    image: '/images/post-travel.png',
    imageAlt: 'Young backpackers taking a photo on a colorful city street at golden hour',
    content: [
      {
        body: [
          'You do not need a trust fund to see Europe. You need flexibility, a rail pass, and the willingness to share a bunk bed with strangers.',
        ],
      },
      {
        heading: 'Take the night train',
        body: [
          'Sleeper trains save you a night of accommodation and get you into the city center by morning. Book early for the cheapest couchettes.',
        ],
      },
      {
        heading: 'Cities with the best value',
        body: [
          'Lisbon, Kraków, Budapest and Valencia all deliver great food, nightlife and history without draining your account. Eat where the locals queue at lunch.',
        ],
      },
    ],
  },
  {
    slug: 'soft-life-without-burnout',
    title: 'Soft life, hard boundaries: protecting your peace in 2026',
    excerpt:
      'Rest is not a reward, it is a requirement. Small daily rituals that make burnout way less likely.',
    category: 'Wellness',
    author: 'Ava Thompson',
    date: '2026-10-24',
    readMinutes: 4,
    image: '/images/post-wellness.png',
    imageAlt: 'A person journaling on a bed with a matcha latte and a phone placed face down',
    content: [
      {
        body: [
          'Being always online is exhausting. The soft life movement is not about doing nothing, it is about choosing what deserves your energy.',
        ],
      },
      {
        heading: 'Phone face down',
        body: [
          'The first and last 30 minutes of your day are the easiest place to win back calm. Charge your phone outside the bedroom and see what happens to your sleep.',
        ],
      },
      {
        heading: 'Say no without the essay',
        body: [
          'You do not owe a paragraph every time you decline a plan. "I can\u2019t make it, have fun!" is a complete sentence.',
        ],
      },
    ],
  },
  {
    slug: 'money-moves-first-paycheck',
    title: '5 money moves to make with your first real paycheck',
    excerpt:
      'Before the shopping cart fills up: an emergency fund, a budget that does not suck, and investing basics.',
    category: 'Money',
    author: 'Leo Martins',
    date: '2026-10-18',
    readMinutes: 6,
    image: '/images/post-money.png',
    imageAlt: 'A flat lay of a phone with a budgeting app, coins and an iced coffee on a pink desk',
    sponsored: true,
    content: [
      {
        body: [
          'Your first full paycheck feels like unlimited money. It is not. A few smart moves now will make future you very grateful.',
        ],
      },
      {
        heading: 'Build a tiny emergency fund',
        body: [
          'Aim for one month of expenses first. It is a lot less scary than the usual "six months" advice and it covers most surprises.',
        ],
      },
      {
        heading: 'Automate everything',
        body: [
          'Set up an automatic transfer to savings the day you get paid. If you never see the money, you will never miss it.',
        ],
      },
      {
        heading: 'Start investing early',
        body: [
          'Even small, regular contributions to a low-cost index fund add up thanks to compounding. Time in the market is your biggest advantage right now.',
        ],
      },
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug)
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
