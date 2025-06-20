import { NewsItem } from '@/types/news';

// TODO: Replace with GROQ fetch once Sanity is wired
export const newsItems: NewsItem[] = [
  {
    id: 'rajeev-joins',
    headline: 'Rajeev Viswanathan Joins M5V as a Managing Partner',
    date: '2024-04-30',
    author: 'Davian Brooks',
    preview: 'Forum Asset Management Announces Appointment Of Rajeev Viswanathan As Partner & Chief Financial Officer. Forum Asset Management ("Forum"), a private alternative investment and development firm with a focus on real assets, is pleased to announce the appointment of Rajeev Viswanathan as Partner & Chief Financial Officer.',
    body: `Forum Asset Management Announces Appointment Of Rajeev Viswanathan As Partner & Chief Financial Officer

Forum Asset Management ("Forum"), a private alternative investment and development firm with a focus on real assets, is pleased to announce the appointment of Rajeev Viswanathan as Partner & Chief Financial Officer.

During his career, Mr. Viswanathan has worked for some of the largest Canadian real estate and asset management firms with global platforms. Prior to joining Forum, Rajeev was the CFO of Dream Global REIT, a Western European, $6 billion office and industrial platform that was acquired in 2019 by Blackstone. Previous to his appointment at Dream Global, Rajeev was CFO for Dream Office REIT. At Dream Office, Rajeev was instrumental in transforming the REIT from a cross-Canadian to a Toronto-centric office portfolio, to drive future value through development and intensification.`,
    image: '/images/news/rajeev-forum-headshot.png',
    category: 'Press Release'
  },
  {
    id: 'niagara-phase-1',
    headline: 'Bringing Stacked Towns to Niagara: What Phase 1 Taught Us',
    date: '2024-03-15',
    author: 'Sherard McQueen',
    preview: 'When we broke ground on The Niagara Phase 1, stacked townhomes were virtually unheard of in the Niagara region. Local product leaned toward traditional two-storey homes, but we saw an opportunity: increase density, maintain liveability, and unlock affordability for a new generation of buyers.',
    body: `When we broke ground on The Niagara Phase 1, stacked townhomes were virtually unheard of in the Niagara region. Local product leaned toward traditional two-storey homes, but we saw an opportunity: increase density, maintain liveability, and unlock affordability for a new generation of buyers.

Our vision was to create a community that combined the best of urban living with the comfort of suburban life. The stacked townhome design allowed us to maximize land use while providing residents with private outdoor spaces and modern amenities.

The project's success has demonstrated that innovative housing solutions can thrive in secondary markets. By challenging conventional wisdom and focusing on quality design, we've created a blueprint for future developments in the region.`,
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
    date: '2024-03-15',
    author: 'Davian Brooks',
    preview: 'M5V Developments celebrates the completion of The Niagara Phase 1, delivering 60 modern residential units in Niagara Falls. The project demonstrates our commitment to quality and community development.',
    body: `M5V Developments is proud to announce the successful completion of The Niagara Phase 1, a significant milestone in our commitment to developing high-quality residential spaces in Ontario's growing communities.

The project, which began construction in early 2023, has delivered 60 modern residential units that combine contemporary design with practical living spaces. Each unit features premium finishes, energy-efficient appliances, and thoughtfully designed floor plans that maximize both comfort and functionality.

Located in the heart of Niagara Falls, the development provides residents with easy access to local amenities while maintaining a sense of community and privacy. The project's completion marks another step in M5V's mission to create sustainable, accessible housing solutions in Ontario's secondary markets.

"The completion of The Niagara Phase 1 represents more than just adding new units to the market," says Sherard McQueen, Co-Founder of M5V. "It's about creating homes where people can thrive and build their futures. We're particularly proud of the quality and attention to detail that went into every aspect of this development."`,
    image: '/images/m5v_portfolio/the-niagara-phase-1/drone.jpg',
    category: 'Project Update'
  },
  {
    id: 'market-insights-2024',
    headline: '2024 Real Estate Market Insights: Opportunities in Ontario',
    date: '2024-02-28',
    author: 'Davian Brooks',
    preview: 'Our latest market analysis reveals emerging opportunities in Ontario\'s real estate sector. From urban developments to suburban growth, we break down the trends shaping investment strategies.',
    body: `The Ontario real estate market continues to evolve in 2024, presenting both challenges and opportunities for investors and developers. Our comprehensive analysis reveals several key trends that are shaping the market landscape.

Urban Core Revitalization
Despite previous concerns about the future of urban centers, we're seeing a strong return to city living, particularly in mid-sized Ontario cities. This trend is driven by improved infrastructure, cultural amenities, and the growing preference for walkable communities.

Secondary Market Growth
Secondary markets like Niagara, Simcoe County, and Muskoka are experiencing unprecedented growth. These regions offer a compelling combination of affordability, quality of life, and strong potential for appreciation. Our data shows that investment in these markets has increased by 45% compared to the previous year.

Sustainable Development Focus
Environmental considerations are no longer optional in real estate development. Projects that incorporate sustainable features and energy-efficient designs are seeing higher demand and better returns. This trend aligns with both consumer preferences and regulatory requirements.

Investment Implications
For investors and developers, these trends suggest a need to diversify portfolios beyond traditional urban centers. The opportunity lies in identifying underserved markets where population growth and infrastructure development create natural demand for quality housing solutions.`,
    image: '/images/news/market-update-2024.png',
    category: 'Market Update'
  }
]; 