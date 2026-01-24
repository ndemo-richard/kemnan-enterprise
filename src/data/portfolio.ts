export interface PortfolioItem {
    id: number
    title: string
    category: string
    description: string
    year: string
    client: string
    location: string
    services: string[]
    impact: string[]
  }
  
  export const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "National Development Conference 2023",
      category: "Event Coordination",
      description: "Coordinated a major national conference bringing together 500+ government officials, development partners, and private sector representatives to discuss Kenya's development agenda.",
      year: "2023",
      client: "Ministry of Planning",
      location: "Nairobi, Kenya",
      services: ["Event Coordination", "Media Relations", "Content Production", "Logistics Management"],
      impact: ["500+ participants attended", "National media coverage achieved", "Policy recommendations developed", "Stakeholder engagement enhanced"]
    },
    {
      id: 2,
      title: "Public Health Awareness Campaign",
      category: "Content Production",
      description: "Produced educational videos and materials for a nationwide health awareness campaign targeting rural communities with vital health information.",
      year: "2022",
      client: "WHO Kenya",
      location: "Nationwide",
      services: ["Content Production", "Translation Services", "Media Relations", "Community Engagement"],
      impact: ["5 million reach achieved", "100+ health facilities equipped", "30% increase in awareness", "Local language content created"]
    },
    {
      id: 3,
      title: "Agricultural Development Program",
      category: "Capacity Building",
      description: "Designed and delivered training programs for smallholder farmers on modern agricultural practices and market access strategies.",
      year: "2023",
      client: "USAID Kenya",
      location: "Western Kenya",
      services: ["Capacity Building", "Content Production", "Translation Services", "Monitoring & Evaluation"],
      impact: ["2,000 farmers trained", "40% yield increase reported", "Community training manuals developed", "Market linkages established"]
    },
    {
      id: 4,
      title: "Corporate Branding Package",
      category: "Branding & Printing",
      description: "Complete branding overhaul for an international development organization including logo redesign, brand guidelines, and all communication materials.",
      year: "2023",
      client: "International NGO",
      location: "Nairobi",
      services: ["Branding & Printing", "Content Production", "Graphic Design", "Digital Assets"],
      impact: ["Unified brand identity created", "500+ printed materials produced", "Improved brand recognition", "Digital templates developed"]
    },
    {
      id: 5,
      title: "Climate Change Documentary",
      category: "Content Production",
      description: "Produced a documentary on climate change impacts and adaptation strategies in East Africa, highlighting local solutions and community resilience.",
      year: "2022",
      client: "UN Environment Programme",
      location: "East Africa Region",
      services: ["Content Production", "Translation Services", "Research & Scripting", "Post-production"],
      impact: ["Award-winning documentary", "International film festivals", "Educational tool for schools", "Policy influence achieved"]
    },
    {
      id: 6,
      title: "Youth Empowerment Summit",
      category: "Event Coordination",
      description: "Organized a national youth summit focusing on entrepreneurship, skills development, and employment opportunities for young Kenyans.",
      year: "2023",
      client: "Ministry of Youth Affairs",
      location: "Nairobi, Kenya",
      services: ["Event Coordination", "Media Relations", "Capacity Building", "Sponsorship Management"],
      impact: ["1,000 youth participants", "50 startups showcased", "Employment opportunities created", "Partnerships established"]
    },
    {
      id: 7,
      title: "Media Training Workshop",
      category: "Capacity Building",
      description: "Conducted media training for government communication officers to enhance their skills in crisis communication and media engagement.",
      year: "2023",
      client: "County Government",
      location: "Mombasa, Kenya",
      services: ["Capacity Building", "Media Relations", "Training Materials", "Practical Sessions"],
      impact: ["50 officers trained", "Media engagement improved", "Crisis response enhanced", "Training manual developed"]
    },
    {
      id: 8,
      title: "Annual Report Design",
      category: "Branding & Printing",
      description: "Designed and produced annual reports for multiple development organizations with compelling visuals and data presentation.",
      year: "2023",
      client: "Multiple NGOs",
      location: "Nairobi, Kenya",
      services: ["Branding & Printing", "Graphic Design", "Content Layout", "Print Management"],
      impact: ["10+ annual reports produced", "Donor satisfaction improved", "Professional presentation", "Timely delivery achieved"]
    },
    {
      id: 9,
      title: "Digital Communication Strategy",
      category: "Media Relations",
      description: "Developed comprehensive digital communication strategies for organizations to enhance their online presence and engagement.",
      year: "2023",
      client: "Civil Society Organization",
      location: "Kenya",
      services: ["Media Relations", "Digital Strategy", "Content Planning", "Analytics & Reporting"],
      impact: ["Digital presence enhanced", "Engagement metrics improved", "Target audience reached", "ROI demonstrated"]
    }
  ]
  
  export const portfolioCategories = [
    "All Projects",
    "Event Coordination",
    "Content Production",
    "Capacity Building",
    "Media Relations",
    "Branding & Printing",
  ]
  
  // Helper functions
  export const getPortfolioItemById = (id: number): PortfolioItem | undefined => {
    return portfolioItems.find(item => item.id === id)
  }
  
  export const getPortfolioByCategory = (category: string): PortfolioItem[] => {
    if (category === "All Projects") return portfolioItems
    return portfolioItems.filter(item => 
      item.category === category || item.services.includes(category)
    )
  }
  
  export const getPortfolioByYear = (year: string): PortfolioItem[] => {
    return portfolioItems.filter(item => item.year === year)
  }
  
  export const getAllClients = (): string[] => {
    const clients = portfolioItems.map(item => item.client)
    return Array.from(new Set(clients)) // Remove duplicates
  }
  
  export const getAllServices = (): string[] => {
    const allServices = portfolioItems.flatMap(item => item.services)
    return Array.from(new Set(allServices)) // Remove duplicates
  }
  
  export const getPortfolioStats = () => {
    return {
      totalProjects: portfolioItems.length,
      totalClients: getAllClients().length,
      totalServices: getAllServices().length,
      yearsActive: Array.from(new Set(portfolioItems.map(item => item.year))).length,
      totalImpact: portfolioItems.reduce((sum, item) => sum + item.impact.length, 0)
    }
  }