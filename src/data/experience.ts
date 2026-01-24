// src/data/experience.ts
export interface ExperienceItem {
    id: number
    client: string
    project: string
    description: string
    services: string[]
    year: string
    location: string
    mediaOutreach?: string[]
    impact: string[]
    category: string
  }
  
  export const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      client: "Nairobi City County Government",
      project: "Public Awareness Campaign on Land Rates",
      description: "Produced a series of documentaries, television commercials, and county-wide advertisements aimed at increasing public awareness on land rates and compliance.",
      services: ["Content Production", "Media Placement", "Strategic Communications"],
      year: "2023",
      location: "Nairobi, Kenya",
      mediaOutreach: ["Citizen TV", "K24", "KBC", "Kameme TV", "Inooro TV", "NTV", "KTN", "Major Newspapers"],
      impact: ["Wide reach among diverse audiences", "Increased public awareness", "Enhanced compliance"],
      category: "Government"
    },
    {
      id: 2,
      client: "Dalberg / Children's Investment Fund Foundation (CIFF)",
      project: "Regional Media Placement for Development Projects",
      description: "Provided regional media placement services highlighting CIFF-funded development projects implemented in Kenya, Malawi, Sierra Leone, and Ethiopia.",
      services: ["Regional Media Placement", "Strategic Communications", "Campaign Management"],
      year: "2023",
      location: "Multiple Countries (Kenya, Malawi, Sierra Leone, Ethiopia)",
      mediaOutreach: ["Citizen TV", "Malawi Times", "Ethiopia Herald", "DW News", "Radio stations across East and Southern Africa"],
      impact: ["Enhanced visibility across multiple countries", "Regional awareness of CIFF's impact", "Stakeholder engagement"],
      category: "International Development"
    },
    {
      id: 3,
      client: "Coalition on Violence Against Women (COVAW)",
      project: "Ending Violence Against Women and Girls (EVAWG) Programme",
      description: "Supported COVAW through rapporteur services, media relations, and advocacy paper development, focusing on promoting the rights of women with disabilities.",
      services: ["Media Relations", "Advocacy Support", "Rapporteur Services", "Regional Media Placement"],
      year: "2023",
      location: "Four African Countries",
      impact: ["Sustained campaign coverage", "Rights advocacy enhancement", "Multi-country impact"],
      category: "Human Rights"
    },
    {
      id: 4,
      client: "Born Free Foundation",
      project: "Lion Conservation Campaign",
      description: "Spearheaded the production and strategic media placement of a conservation campaign aimed at protecting Africa's lions.",
      services: ["Content Production", "Strategic Media Placement", "Grassroots Outreach"],
      year: "2022",
      location: "Africa",
      mediaOutreach: ["Vernacular Radio Stations", "Digital Platforms"],
      impact: ["Grassroots community reach", "Conservation awareness", "Wildlife protection advocacy"],
      category: "Conservation"
    },
    {
      id: 5,
      client: "Beacon of Hope",
      project: "Documentary Production for Community Support",
      description: "Managed the production and distribution of a documentary showcasing the work of Beacon of Hope in supporting vulnerable and marginalized communities.",
      services: ["Documentary Production", "Media Distribution", "Impact Storytelling"],
      year: "2022",
      location: "Kenya",
      impact: ["Enhanced donor engagement", "Increased public awareness", "Community impact showcase"],
      category: "Community Development"
    },
    {
      id: 6,
      client: "Nyamira County Government",
      project: "Agricultural Development Media Campaign",
      description: "Provided media placement services for content showcasing Nyamira County Government's projects in food production and agricultural development.",
      services: ["Media Placement", "Content Strategy", "Stakeholder Communication"],
      year: "2023",
      location: "Nyamira, Kenya",
      impact: ["Informed residents and stakeholders", "Promoted food security initiatives", "County development visibility"],
      category: "Government"
    },
    {
      id: 7,
      client: "World Vision",
      project: "Water Bill Translation for Advocacy",
      description: "Translated a Water Bill into Kiswahili and three vernacular languages to promote access to clean and safe water in Kenya's arid and semi-arid regions.",
      services: ["Translation Services", "Advocacy Support", "Community Engagement"],
      year: "2023",
      location: "Kenya",
      impact: ["Broader public understanding", "Enhanced community engagement", "Policy reform awareness"],
      category: "Humanitarian"
    },
    {
      id: 8,
      client: "United Nations Population Fund (UNFPA)",
      project: "Anti-Female Genital Mutilation (FGM) Campaign",
      description: "Delivered media placement services for an anti-FGM campaign implemented across multiple counties in Kenya.",
      services: ["Media Placement", "Campaign Strategy", "Behavior Change Communication"],
      year: "2023",
      location: "Multiple Counties, Kenya",
      mediaOutreach: ["Leading broadcast, print, and digital media outlets"],
      impact: ["Increased awareness", "Behavior change messaging", "National coverage"],
      category: "Health & Rights"
    },
    {
      id: 9,
      client: "Wajir County Government",
      project: "County Development Documentaries",
      description: "Spearheaded the production and media placement for documentaries showcasing the work done by the county government on development projects.",
      services: ["Documentary Production", "Media Placement", "Government Communication"],
      year: "2023",
      location: "Wajir, Kenya",
      impact: ["Showcased development projects", "Enhanced government transparency", "Public engagement"],
      category: "Government"
    }
  ]
  
  export const experienceCategories = [
    "All Projects",
    "Government",
    "International Development",
    "Human Rights",
    "Conservation",
    "Community Development",
    "Humanitarian",
    "Health & Rights"
  ]
  
  export const serviceTypes = [
    "Content Production",
    "Media Placement",
    "Strategic Communications",
    "Translation Services",
    "Advocacy Support",
    "Documentary Production",
    "Campaign Management",
    "Media Relations"
  ]