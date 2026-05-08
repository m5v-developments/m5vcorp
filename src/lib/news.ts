import { NewsItem } from '@/types/news';
import { getArticles, getArticleBySlug } from '@/sanity/queries';

const fallbackItems: NewsItem[] = [
  {
    id: 'rajeev-joins',
    headline: 'Rajeev Viswanathan Joins M5V Developments as CFO',
    date: '2025-06-28',
    author: 'M5V Developments',
    preview: 'With over 20 years of capital markets and real estate experience, Rajeev will lead M5V\'s capital strategy as the firm accelerates its $500M+ development pipeline and welcomes new investment partners.',
    body: `M5V Developments ("M5V") is pleased to announce that Rajeev Viswanathan (CPA, CA, CFA, ICD.D) has joined the firm as Managing Partner, Chief Financial Officer (Capital Strategy).



Rajeev brings over two decades of experience in capital markets, real estate, and strategic finance. Most recently, he served as Managing Partner & CFO at Forum Asset Management. Prior to Forum, he was the CFO of Dream Global REIT, a $6 billion Western European office platform dual-listed on the TSX and Frankfurt Stock Exchange, which was acquired by Blackstone in 2019. Before that, he spent nearly a decade at Brookfield in various senior finance roles. Rajeev also serves on the board of the Greater Toronto Airports Authority.



At M5V, Rajeev will lead the firm's capital strategy and financial operations, supporting the continued growth and expansion of the platform.



"Rajeev is a trusted partner with unmatched depth in finance, capital strategy, and global real estate," said Yaseen Nimjee, Managing Partner, Chief Operating Officer (Construction & Development) at M5V Developments. "His leadership will be instrumental as we build the depth and breadth of our capital sources to scale the business."



"We've worked with Rajeev for over two decades and couldn't be more excited to formally welcome him as a partner," added Sherard McQueen, Managing Partner, Chief Visionary Officer (Entitlements, Sales & Marketing) at M5V Developments. "His experience and entrepreneurial mindset are a perfect fit as we enter this next phase of growth."



M5V Developments is currently advancing a $500+ million development pipeline of seniors' housing and residential communities and is now launching external partnership and investment opportunities for the first time.



For inquiries, please contact:
Rajeev Viswanathan
rajeev@m5vinc.com `,
    image: '/images/team/rajeev.webp',
    category: 'Press Release'
  },
  {
    id: 'sundial-phase2-sod-turning',
    headline: "Sod Turning Celebrates New Seniors' Apartment at Sundial Lakeview",
    date: '2025-06-24',
    author: 'M5V Developments',
    preview: "A ceremonial sod turning marks the start of construction on 152 new seniors' apartments—advancing M5V's vision for a complete, connected retirement community in the heart of Orillia.",
    body: `A ceremonial sod turning will mark the start of construction for Sundial Lakeview Residences, a new 12-storey, 152-unit seniors' apartment at 600 Sundial Drive. This development represents the second phase of the growing Sundial Lakeview Retirement & Residences community, following the successful opening of Sundial Lakeview Retirement.

Mayor Don Mcisaac, local councillors, and members of the community will join Yaseen Nimjee, President of M5V Developments Inc., and Sundial Lakeview Retirement and Residences to celebrate this exciting milestone in Orillia's evolving housing landscape for seniors.

"This next phase brings a fresh offering to Orillia-modern, affordable, and community-focused seniors' apartments," said Nimjee. "We're proud to continue building a complete retirement community in the heart of the city."

Following the ceremony, guests are invited to enjoy a complimentary BBQ lunch hosted at Sundial Lakeview Retirement, with an opportunity to meet the development team and learn more about the vision behind this multi-phased campus.

Quick Facts:
What: Sod-turning ceremony for Sundial Lakeview Residences
When: Thursday, July 3, 2025 at 12:00 PM
Where: 600 Sundial Drive, Orillia (Event entrance via Laclie Street, behind existing Sundial Retirement Residence)
Who: Mayor Don Mclsaac, MSV President Yaseen Nimjee, local leaders
Why: Celebrating the launch of a 152-unit, seniors-focused apartment residence - Phase Two of Sundial's community vision. `,
    image: '/images/m5v_portfolio/sundial-phase2/sundial-p2-render.webp',
    category: 'Press Release'
  },
  {
    id: 'niagara-phase-1',
    headline: 'Bringing Stacked Towns to Niagara: What Phase 1 Taught Us',
    date: '2024-03-15',
    author: 'Sherard McQueen',
    preview: ' Discover how Niagara Phase 1 delivered modern, amenity-rich homes at accessible prices, proving that innovative design can redefine regional real estate.',
    body: `When we began The Niagara Phase 1, stacked townhomes were virtually unknown in the Niagara region. Traditional housing primarily consisted of conventional two-storey homes, which were less efficient in land use and often less affordable. We saw an opportunity to meet an unmet market demand with a new vision: a modern, efficient design that would increase density without compromising liveability or community appeal.

    Our strategy centered on introducing a pioneering concept for the region: stacked townhomes. By arranging units vertically, we significantly maximized land utilization, which in turn reduced the land cost per unit. This innovative design directly translated into tangible savings for the consumer, offering modern, amenity-rich living spaces at more accessible price points.

    We meticulously tailored our sales design to resonate with Niagara's preferences. By deeply understanding local needs, we created layouts that offered spaciousness and comfort, with an envelope that fit seamlessly with the direction we saw Niagara going. Every design element was carefully considered to appeal to young professionals and growing families seeking a balance between urban conveniences and suburban tranquility.

    Leveraging our robust in-house sales and marketing teams, we significantly streamlined the sales process, accelerating sell-through rates. This reduction in overhead allowed us to further lower costs and deliver exceptional value to our buyers, solidifying our position as pioneers in affordable, quality housing solutions.

    The success of The Niagara Phase 1 surpassed our expectations and firmly validated our vision. It proved that innovative, thoughtfully designed housing solutions could thrive beyond primary urban markets, making a significant impact in secondary regions like Niagara. Our groundbreaking approach not only provided a blueprint for future developments but also reshaped regional housing expectations, making contemporary, affordable living accessible to more buyers than ever before.

    Through our forward-thinking strategy and unwavering commitment to affordability and quality, we've set a new standard in regional real estate development. We've shown how thoughtful design and strategic innovation can transform market dynamics and unlock previously unseen value.
`,
    image: '/images/m5v_portfolio/the-niagara-phase-1/drone.webp',
    category: 'Case Study'
  },
  {
    id: 'muskoka-cottages',
    headline: 'How Strategic Expertise Unlocked The Muskoka After a Decade of Delay',
    date: '2024-02-28',
    author: 'Yaseen Nimjee',
    preview: 'The Muskoka Cottages project presented a unique challenge: a prime development site locked in a ten-year stalemate of regulatory hurdles and local skepticism. This case study reveals the strategic insights and expert navigation that allowed us to break through the impasse, secure approvals, and deliver a sought-after community.',
    body: `The Muskoka Cottages project presented a unique challenge: a prime development site locked in a ten-year stalemate of regulatory hurdles and local skepticism. This case study reveals the strategic insights and expert navigation that allowed us to break through the impasse, secure approvals, and deliver a sought-after community.

Our approach combined deep market understanding with innovative solutions to address local concerns. We worked closely with community stakeholders to ensure the development aligned with the region's character while meeting modern living standards.

The project's success demonstrates how persistence, expertise, and community engagement can transform challenging situations into opportunities for growth and development.`,
    image: '/images/m5v_portfolio/the-muskoka/muskoka_severn.webp',
    category: 'Case Study'
  },
  {
    id: 'niagara-completion',
    headline: 'The Niagara Phase 1 Reaches Successful Completion',
    date: '2022-10-15',
    author: 'Sherard McQueen',
    preview: "M5V's Niagara Phase 1 is complete. 54 high-quality, modern homes now define living in the heart of Niagara Falls.",
    body: `M5V Developments is proud to announce the successful completion of The Niagara Phase 1, a significant milestone in our commitment to developing high-quality residential spaces in Ontario's growing communities.

The project, which began construction in early 2021, has delivered 54 modern residential units that combine contemporary design with practical living spaces. Each unit features premium finishes, energy-efficient appliances, and thoughtfully designed floor plans that maximize both comfort and functionality.

Located in the heart of Niagara Falls, the development provides residents with easy access to local amenities while maintaining a sense of community and privacy. The project's completion marks another step in M5V's mission to create sustainable, accessible housing solutions in Ontario's secondary markets.

"The completion of The Niagara Phase 1 represents more than just adding new units to the market," says Sherard McQueen, Managing Partner and Chief Visionary Officer of M5V. "It's about creating homes where people can thrive and build their futures."`,
    image: '/images/news/niagara-sherard-salute-crop.jpg',
    category: 'Project Update'
  }
];

export async function getNews(): Promise<NewsItem[]> {
  try {
    const sanityArticles = await getArticles()
    if (sanityArticles && sanityArticles.length > 0) {
      return sanityArticles
    }
  } catch {}
  return fallbackItems
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | undefined> {
  try {
    const article = await getArticleBySlug(slug)
    if (article) return article
  } catch {}
  return fallbackItems.find((item) => item.id === slug)
}

export { fallbackItems as newsItems }
