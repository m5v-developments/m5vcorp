import { getTeamMembers as fetchSanityTeam, getTeamMemberBySlug as fetchSanityMember, SanityTeamMember } from '@/sanity/queries';

export interface TeamMember {
  name: string;
  position: string;
  image?: string;
  bio?: string;
  slug: string;
  linkedinId?: string;
  isFounder?: boolean;
  order?: number;
}

const fallbackMembers: TeamMember[] = [
  {
    name: 'Sherard McQueen',
    position: 'Managing Partner,\nChief Visionary Officer (Entitlement Sales & Marketing)',
    image: '/images/team/sherard-2.webp',
    bio: `Sherard McQueen brings over 15 years of experience in real estate development and sales, having successfully closed over $2B in transactions and managed 75+ property acquisitions. His expertise in market analysis and strategic planning has been instrumental in M5V's growth and success.

As Co-Founder, Sherard leads our sales and marketing initiatives, ensuring our developments meet market demands while maintaining the highest standards of quality and design. His deep understanding of consumer needs and market trends has helped shape M5V's unique approach to community development.`,
    slug: 'sherard-mcqueen',
    linkedinId: 'sherard-mcqueen',
    isFounder: true,
    order: 1,
  },
  {
    name: 'Yaseen Nimjee',
    position: 'Managing Partner,\nChief Operating Officer (Construction & Development)',
    image: '/images/team/yaseen.webp',
    bio: `Yaseen Nimjee is a seasoned professional with extensive experience in construction management and real estate development. His technical expertise and hands-on approach have been crucial in delivering high-quality projects that exceed industry standards.

As Co-Founder, Yaseen oversees all aspects of construction and development, from initial planning to final delivery. His commitment to innovation and efficiency has helped M5V establish a reputation for excellence in the industry.`,
    slug: 'yaseen-nimjee',
    linkedinId: 'yaseen-nimjee-01952636',
    isFounder: true,
    order: 2,
  },
  {
    name: 'Rajeev Viswanathan',
    position: 'Managing Partner,\nChief Financial Officer (Capital Strategy)',
    image: '/images/team/rajeev.webp',
    bio: `At M5V, Rajeev leads the firm's capital strategy and financial operations, supporting the continued growth and expansion of the platform.

      Rajeev brings over two decades of experience in capital markets, real estate, and strategic finance. Most recently, he served as Managing Partner & CFO at Forum Asset Management. Prior to Forum, he was the CFO of Dream Global REIT, a $6 billion Western European office platform dual-listed on the TSX and Frankfurt Stock Exchange, which was acquired by Blackstone in 2019. Before that, he spent nearly a decade at Brookfield in various senior finance roles. Rajeev also serves on the board of the Greater Toronto Airports Authority.

      Rajeev is a CA, CPA, CFA charter holder and holds the ICD.D designation.`,
    slug: 'rajeev-viswanathan',
    linkedinId: 'rajeev-viswanathan',
    isFounder: true,
    order: 3,
  },
  {
    name: 'Linda Ford',
    position: 'Director,\nEntitlements',
    image: '/images/team/linda.webp',
    bio: `Linda Ford specializes in navigating complex entitlement processes and regulatory compliance. With over 15 years of experience in land use planning and development approvals, she ensures our projects meet all regulatory requirements while maximizing their potential.

As Director of Entitlement, Linda works closely with municipalities and stakeholders to secure necessary approvals and permits, helping to streamline the development process and minimize delays.`,
    slug: 'linda-ford',
    linkedinId: 'lindamford',
    order: 4,
  },
  {
    name: 'Leo Thomas',
    position: 'VP,\nConstruction',
    image: '/images/team/leo.webp',
    bio: `Leo Thomas is a seasoned VP of Construction with over 22 years of experience leading multi-million dollar commercial, industrial, and residential projects. His extensive background spans Western Canada and international markets, including the U.K., Middle East, and South America. Leo has a proven track record of successfully managing large teams, including senior project managers and 60+ on-site staff, while overseeing $200M+ in annual projects.

Beyond project oversight, Leo is a strategic leader who has spearheaded company expansions into new markets across Manitoba, BC, and Alberta, securing contracts valued at over $100M. He's driven business development initiatives that significantly increased profit margins and diversified portfolios into high-growth sectors like geothermal energy and green construction.

Committed to operational excellence, Leo has implemented lean management programs and introduced engineering process improvements that resulted in remarkable reductions in construction budgets by up to $13M. He's also adept at developing pre-project feasibility models, revising contracts, and establishing robust internal audit systems to protect corporate margins and enhance overall profitability.`,
    slug: 'leo-thomas',
    linkedinId: 'leo-thomas',
    order: 5,
  },
  {
    name: 'Reza Farahdel',
    position: '\nController',
    image: '/images/team/reza-edit1.webp',
    bio: `Reza Farahdel is a Certified Public Accountant with extensive experience in financial management and reporting. His expertise in accounting principles and financial analysis helps ensure M5V's financial operations run smoothly and efficiently.

As Controller, Reza manages all aspects of financial reporting, budgeting, and internal controls, providing valuable insights to support strategic decision-making and business growth.`,
    slug: 'reza-farahdel-cpa',
    linkedinId: 'reza-farahdel',
    order: 6,
  },
  {
    name: 'Yogesh Karia',
    position: '\nProject Manager',
    image: '/images/team/yogesh.webp',
    bio: `Yogesh Karia is a highly accomplished Project Manager with over 40 years of experience leading multi-million dollar residential, commercial, hospitality, and industrial projects across Canada and internationally. He's known for flawlessly guiding projects from pre-construction to occupancy, consistently ensuring timely delivery and budget adherence.

Yogesh brings hands-on expertise in advanced construction methods like ICF walls, pile foundations, and precast building systems, even excelling in extreme weather conditions. Holding a Bachelor of Civil Engineering, being a Certified Engineering Technician (CET), and a LEED Accredited Professional, he champions sustainable practices, safety, and quality control. Yogesh's vast experience and commitment to excellence make him an invaluable asset to any project.`,
    slug: 'yogesh-karia',
    linkedinId: 'yogesh-karia-c-e-t-leed-ap-94194620',
    order: 7,
  },
  {
    name: 'Martina Cabrera',
    position: 'Director,\nMarketing',
    image: '/images/team/martina.webp',
    bio: `Martina Cabrera is a dynamic Marketing Manager with over 12 years of experience in social media and digital marketing. What began as a creative curiosity has blossomed into a profound passion for building vibrant communities, crafting effective strategies, and driving impactful results that enable brands to truly shine in the digital landscape.

Martina consistently helps brands achieve millions of impressions and significantly expands their online influence. Her impressive portfolio includes collaborations with a prestigious roster of global names such as Disney, L'Oréal Paris, Maybelline, and New York Fashion Week, alongside successful boutique projects. At the core of her work is the consistent goal of creating impactful, engaging, and meaningful connections through strategic social media initiatives.`,
    slug: 'martina-cabrera',
    linkedinId: 'immartinacabrera',
    order: 8,
  },
  {
    name: 'Nami Sugimoto',
    position: '\n Operations Manager',
    image: '/images/team/nami.webp',
    bio: '',
    slug: 'nami-sugimoto',
    linkedinId: '',
    order: 9,
  },
  {
    name: 'Cynthia Yvonne',
    position: '\n Communications & Client Relations',
    image: '/images/team/cynthia.webp',
    bio: `Boasting a EdD in Education and over 40 years in academia, Cynthia's background as a media personality, author, and principal uniquely positions her to excel in communications and client relations. Her multi-disciplinary expertise ensures impactful messaging and exceptional support.`,
    slug: 'cynthia-yvonne',
    linkedinId: '',
    order: 10,
  },
  {
    name: 'Rodrigo Burgos',
    position: '\n Construction Estimator',
    image: '/images/team/rodrigo.webp',
    bio: `Rodrigo Burgos is a highly experienced Construction Estimator with over 20 years of expertise in Quantity Surveying for ICI (Industrial, Commercial, Institutional) and Residential projects. His comprehensive background includes detailed estimation for structural, architectural, mechanical, and civil works, ensuring thorough and accurate project cost analysis.

Rodrigo is a distinguished member of the Canadian Institute of Quantity Surveyors as a Construction Estimator Certified (CIQS-CEC). He also holds a Bachelor of Science in Civil Engineering (BSCE) and is a Registered Licensed Professional Civil Engineer in the Philippines (PRC Licensed), underscoring his deep technical knowledge and professional accreditation.`,
    slug: 'rodrigo-burgos',
    linkedinId: '',
    order: 11,
  },
  {
    name: 'Davian Brooks',
    position: '\n Analyst',
    image: '/images/team/davian.webp',
    bio: '',
    slug: 'davian-brooks',
    linkedinId: 'davianbrooks',
    order: 12,
  },
  {
    name: 'Alex Tran',
    position: '\n Editor',
    image: '/images/team/alex.webp',
    bio: `Alex Tran brings a strong foundation in financial reporting, audit, and operations, cultivated through his roles at the Ontario Public Service, the CRA, and Fidelity Investments. Throughout his career, Alex has developed a keen ability to dig into data, identify patterns, and empower teams to make informed, strategic decisions.

Currently on the path to earning his CPA designation, Alex is driven by the opportunity to tackle complex challenges and contribute meaningfully to an organization. His expertise spans audit, advisory, and financial analysis, reflecting his commitment to both precision and insightful contributions.`,
    slug: 'alex-tran',
    linkedinId: 'alex-tran-619853234',
    order: 13,
  },
  {
    name: 'Pritica Kher',
    position: '\n Project Manager',
    image: '/images/team/pritica-edit.webp',
    bio: ' ',
    slug: 'pritica-kher',
    linkedinId: 'pritica-kher-5843b8315',
    order: 14,
  },
];

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  try {
    const sanityMembers = await fetchSanityTeam()
    if (sanityMembers && sanityMembers.length > 0) {
      return sanityMembers
    }
  } catch {}
  return fallbackMembers
}

export async function getTeamMemberBySlug(slug: string): Promise<TeamMember | undefined> {
  try {
    const member = await fetchSanityMember(slug)
    if (member) return member
  } catch {}
  return fallbackMembers.find((m) => m.slug === slug)
}

export { fallbackMembers as teamMembers }
