// data/portfolio.ts
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  client: string;
  location: string;
  year: string;
  category: string;
  services: string[];
  impact: string[];
  logo: string;
  logoAlt?: string;
  detailedDescription?: string; // Add detailed description field
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "nairobi-city-county",
    title: "Public Awareness Campaign on Land Rates Compliance",
    description: "Documentaries, TV commercials, and county-wide advertisements to increase public awareness on land rates and compliance",
    client: "Nairobi City County Government",
    location: "Nairobi, Kenya",
    year: "2023",
    category: "Government",
    services: ["Media Production", "Media Placement", "Strategic Communications", "Content Development"],
    impact: [
      "Increased public awareness on land rates compliance across Nairobi County",
      "Reached diverse audiences through multiple national TV stations and newspapers",
      "Enhanced citizen engagement with county government initiatives"
    ],
    logo: "/images/clients/logos/Nairobicounty.jpeg",
    logoAlt: "Nairobi City County Government Logo",
    detailedDescription: `Kemnan Consultancy produced a series of documentaries, television commercials, and county-wide advertisements aimed at increasing public awareness on land rates and compliance. In addition to content production, we executed a comprehensive media placement strategy across leading national television stations and print media.

Our campaign was broadcast across multiple platforms including Citizen TV, K24, KBC, Kameme TV, Inooro TV, NTV, KTN, and major newspapers. This multi-channel approach ensured wide reach among diverse audiences within Nairobi City County, effectively communicating the importance of land rates compliance to both urban and peri-urban residents.

The strategic media placement was carefully timed and targeted to maximize impact during peak viewing hours and high-readership periods, resulting in significantly improved public understanding and compliance rates.`
  },
  {
    id: "dalberg-ciff",
    title: "Regional Media Placement for Development Projects",
    description: "Regional media placement services highlighting CIFF-funded development projects across multiple African countries",
    client: "Dalberg / Children's Investment Fund Foundation (CIFF)",
    location: "Multiple Countries",
    year: "2023",
    category: "International Development",
    services: ["Regional Media Placement", "Media Relations", "Strategic Communications"],
    impact: [
      "Enhanced visibility of CIFF's impact across four African countries",
      "Coordinated media coverage across major regional and international platforms",
      "Strengthened public awareness of development initiatives"
    ],
    logo: "/images/clients/logos/dalberg.jpeg",
    logoAlt: "Dalberg and CIFF Logos",
    detailedDescription: `Kemnan Consultancy provided comprehensive regional media placement services for Dalberg on behalf of its client, the Children's Investment Fund Foundation (CIFF). The campaign strategically highlighted CIFF-funded development projects implemented in Kenya, Malawi, Sierra Leone, and Ethiopia.

Our media outreach was meticulously coordinated across major regional and international platforms to ensure maximum visibility. Key placements included Citizen TV (Kenya), Malawi Times, Ethiopia Herald, DW News, and several radio stations across East and Southern Africa.

The campaign successfully enhanced visibility of CIFF's impact across multiple countries, showcasing how targeted development funding was transforming communities. Through strategic storytelling and media partnerships, we amplified success stories that demonstrated tangible results in education, healthcare, and economic development.`
  },
  {
    id: "covaw",
    title: "Ending Violence Against Women and Girls (EVAWG) Programme Support",
    description: "Supporting women's rights campaign across four African countries through media relations and advocacy",
    client: "Coalition on Violence Against Women (COVAW)",
    location: "Multiple Countries",
    year: "2022",
    category: "Civil Society",
    services: ["Media Relations", "Advocacy Support", "Rapporteur Services", "Regional Media Placement"],
    impact: [
      "Sustained media coverage across print, broadcast, and digital outlets",
      "Enhanced visibility for women's rights issues across four countries",
      "Strengthened advocacy efforts for women with disabilities"
    ],
    logo: "/images/clients/logos/covaw.png",
    logoAlt: "COVAW Logo",
    detailedDescription: `Kemnan Consultancy provided comprehensive support to COVAW under the Ending Violence Against Women and Girls (EVAWG) programme. Our services encompassed rapporteur services, media relations, advocacy paper development, and strategic media placement.

The initiative specifically focused on promoting the rights of women with disabilities and was implemented across four African countries. We developed compelling advocacy materials and coordinated with journalists across the region to ensure sensitive and accurate reporting on this critical issue.

Kemnan Consultancy facilitated extensive regional media placement, ensuring sustained coverage of the campaign across print, broadcast, and digital media outlets. Our approach combined traditional media outreach with innovative digital strategies to create a comprehensive communication ecosystem that amplified the voices of women with disabilities and drove meaningful policy discussions.`
  },
  {
    id: "born-free-foundation",
    title: "Lion Conservation Campaign",
    description: "Production and strategic media placement for Africa's lion conservation awareness",
    client: "Born Free Foundation",
    location: "Regional (Africa)",
    year: "2022",
    category: "Conservation",
    services: ["Media Production", "Strategic Media Placement", "Digital Distribution", "Content Development"],
    impact: [
      "Increased awareness of lion conservation among grassroots communities",
      "Leveraged vernacular media for effective local engagement",
      "Strengthened advocacy for wildlife protection"
    ],
    logo: "/images/clients/logos/bornfree.png",
    logoAlt: "Born Free Foundation Logo",
    detailedDescription: `Kemnan Consultancy spearheaded the production and strategic media placement of a comprehensive conservation campaign aimed at protecting Africa's lions. Recognizing the importance of local community engagement, we developed culturally appropriate content that resonated with audiences living alongside wildlife.

The campaign content was strategically distributed through vernacular radio stations and digital platforms to effectively reach grassroots communities, conservation stakeholders, and the general public. By working with local media partners and influencers, we created content that was both educational and engaging, driving awareness and advocacy for wildlife protection.

Our approach included developing documentary features, radio dramas in local languages, and social media campaigns that highlighted the ecological importance of lions and the threats they face. The campaign successfully bridged the gap between international conservation messaging and local community realities.`
  },
  {
    id: "beacon-of-hope",
    title: "Documentary Production for Community Support Initiatives",
    description: "Documentary showcasing support for vulnerable and marginalized communities",
    client: "Beacon of Hope",
    location: "Nairobi, Kenya",
    year: "2022",
    category: "Non-Profit",
    services: ["Documentary Production", "Media Distribution", "Content Strategy"],
    impact: [
      "Highlighted social impact of community support initiatives",
      "Enhanced visibility for donor and partner engagement",
      "Increased public awareness of marginalized community needs"
    ],
    logo: "/images/clients/logos/beacon.png",
    logoAlt: "Beacon of Hope Logo",
    detailedDescription: `Kemnan Consultancy managed the complete production and distribution of a compelling documentary showcasing the transformative work of Beacon of Hope in supporting vulnerable and marginalized communities across Kenya.

The documentary featured powerful personal stories that highlighted the organization's social impact, focusing on education, healthcare, and economic empowerment initiatives. We employed a participatory approach, involving community members in the storytelling process to ensure authenticity and respect.

The documentary was distributed through targeted media channels specifically selected to reach partners, donors, and the wider public. Our distribution strategy included screenings at donor events, strategic television placements, and digital platforms that aligned with the organization's communication objectives. The film successfully amplified Beacon of Hope's mission and attracted increased support for their programs.`
  },
  {
    id: "nyamira-county",
    title: "Agricultural Development Media Campaign",
    description: "Media placement services for agricultural development projects",
    client: "Nyamira County Government",
    location: "Nyamira, Kenya",
    year: "2023",
    category: "Government",
    services: ["Media Placement", "Strategic Communications", "Public Awareness"],
    impact: [
      "Increased awareness of county government agricultural initiatives",
      "Enhanced stakeholder engagement in food security projects",
      "Promoted county's investment in agricultural development"
    ],
    logo: "/images/clients/logos/nyamira.png",
    logoAlt: "Nyamira County Government Logo",
    detailedDescription: `Kemnan Consultancy provided comprehensive media placement services for content showcasing Nyamira County Government's innovative projects in food production and agricultural development. Our campaign focused on communicating the county's commitment to food security and sustainable agriculture.

The media outreach was strategically designed to inform residents and stakeholders about ongoing initiatives while promoting the county's significant investment in food security. We developed content that highlighted success stories of local farmers, showcased new agricultural technologies being implemented, and explained government programs available to support agricultural development.

Our placement strategy included local radio stations, agricultural magazines, and digital platforms that specifically target farming communities. By focusing on practical, actionable information, we helped bridge the information gap between the county government and its agricultural stakeholders, resulting in increased participation in agricultural programs.`
  },
  {
    id: "world-vision",
    title: "Water Bill Translation and Advocacy",
    description: "Translation services for Water Bill to promote clean water access",
    client: "World Vision",
    location: "Kenya",
    year: "2023",
    category: "International Development",
    services: ["Translation Services", "Advocacy Support", "Community Engagement", "Policy Communication"],
    impact: [
      "Enabled broader public understanding of water governance policies",
      "Facilitated community engagement in water policy reform",
      "Increased accessibility of policy documents to local communities"
    ],
    logo: "/images/clients/logos/worldvision.png",
    logoAlt: "World Vision Logo",
    detailedDescription: `Kemnan Consultancy undertook the crucial task of translating the national Water Bill into Kiswahili and three vernacular languages as part of a comprehensive advocacy initiative to promote access to clean and safe water in Kenya's arid and semi-arid regions.

Our translation work went beyond literal translation to ensure cultural appropriateness and community relevance. We worked closely with water policy experts and community leaders to develop versions that were not only linguistically accurate but also contextually meaningful for local communities.

The translations enabled broader public understanding and facilitated meaningful community engagement around water governance and policy reform. By making complex legal documents accessible in local languages, we empowered communities to participate in discussions about water rights, management, and conservation, ultimately contributing to more inclusive water policy development.`
  },
  {
    id: "unfpa",
    title: "Anti-Female Genital Mutilation (FGM) Campaign",
    description: "Media placement services for anti-FGM campaign across multiple counties",
    client: "United Nations Population Fund (UNFPA)",
    location: "Multiple Counties, Kenya",
    year: "2023",
    category: "International Development",
    services: ["Media Placement", "Campaign Strategy", "Public Awareness", "Behavior Change Communication"],
    impact: [
      "Achieved wide regional and national media coverage",
      "Increased awareness of anti-FGM messaging",
      "Contributed to behavior change communication efforts"
    ],
    logo: "/images/clients/logos/unfpa.svg",
    logoAlt: "UNFPA Logo",
    detailedDescription: `Kemnan Consultancy delivered comprehensive media placement services for a critical anti-Female Genital Mutilation (FGM) campaign implemented by UNFPA across multiple counties in Kenya. Recognizing the sensitivity of the topic, we developed a nuanced communication strategy that balanced cultural respect with clear advocacy for change.

The campaign achieved both regional and national coverage through strategic placement in leading broadcast, print, and digital media outlets. We collaborated with trusted community leaders, healthcare professionals, and survivors to develop authentic messaging that resonated with target audiences.

Our media placement strategy included timed broadcasts during community listening hours, partnerships with women-focused media platforms, and innovative digital campaigns that engaged younger audiences. The campaign contributed significantly to increased awareness and behavior change messaging, playing a crucial role in ongoing efforts to eliminate FGM in Kenya.`
  },
  {
    id: "wajir-county",
    title: "County Government Development Documentary",
    description: "Production and media placement for county government development showcase",
    client: "Wajir County Government",
    location: "Wajir, Kenya",
    year: "2023",
    category: "Government",
    services: ["Documentary Production", "Media Placement", "Content Development", "Public Engagement"],
    impact: [
      "Enhanced transparency of county government projects",
      "Increased public awareness of development initiatives",
      "Strengthened resident engagement with county leadership"
    ],
    logo: "/images/clients/logos/wajir.jpeg",
    logoAlt: "Wajir County Government Logo",
    detailedDescription: `Kemnan Consultancy spearheaded the production and strategic media placement for a comprehensive documentary series showcasing the development work accomplished by the current Wajir County Government. The project aimed to enhance transparency and demonstrate accountability to residents.

The documentary series featured detailed coverage of various development projects including infrastructure development, healthcare improvements, educational initiatives, and water resource management. We employed a storytelling approach that highlighted both the challenges faced and the achievements made, providing a balanced perspective that built trust with viewers.

Our media placement strategy ensured broad reach across Wajir County through local television stations, community screenings, and digital platforms. The documentaries served as a powerful communication tool that not only informed residents about government initiatives but also fostered a sense of shared progress and community pride in the county's development journey.`
  }
];

export const portfolioCategories = [
  "All Projects",
  "Government",
  "International Development",
  "Civil Society",
  "Conservation",
  "Non-Profit"
];

// Helper function to get portfolio item by ID
export function getPortfolioItemById(id: string): PortfolioItem | undefined {
  return portfolioItems.find(item => item.id === id);
}