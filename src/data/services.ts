// src/data/services.ts
export interface Service {
  id: number
  title: string
  description: string
  icon: string // Emoji string
  detailedDescription: string
  features: string[]
}

export const services: Service[] = [
  {
    id: 1,
    title: "Media Relations",
    description: "Strategic media engagement and relationship management",
    icon: "🎤", // Emoji
    detailedDescription: "Media strategy development, press release distribution...",
    features: ["Media Outreach","Crisis Communication,","Communication Strategy","Advocacy Paper Writting"]
  },
  {
    id: 2,
    title: "Capacity Building & Training",
    description: "Empowering organizations through skill development programs",
    icon: "👥", // Emoji
    detailedDescription: "Customized training programs and capacity building workshops...",
    features: ["Customized training", "Skill gap analysis", "Interactive workshops"]
  },
  {
    id: 3,
    title: "Event Coordination",
    description: "End-to-end event planning and management",
    icon: "📅", // Emoji
    detailedDescription: "Full-service event management including conferences, workshops...",
    features: ["Event concept", "Logistics management", "Speaker coordination"]
  },
  {
    id: 4,
    title: "Feasibility Study",
    description: "Comprehensive analysis and research to determine project viability",
    icon: "📊", // Emoji
    detailedDescription: "We conduct thorough feasibility studies for development projects...",
    features: ["Market analysis", "Stakeholder assessment", "Risk analysis"]
  },
  {
    id: 5,
    title: "Capacity Building & Training",
    description: "Empowering organizations through skill development programs",
    icon: "👥", // Emoji
    detailedDescription: "Customized training programs and capacity building workshops...",
    features: ["Customized training", "Skill gap analysis", "Interactive workshops"]
  },
  {
    id: 6,
    title: "Content Production",
    description: "High-quality audio-visual content for various media platforms",
    icon: "🎥", // Emoji
    detailedDescription: "Professional video production, photography, graphic design...",
    features: ["Video production", "Photography", "Graphic design"]
  },
  {
    id: 7,
    title: "Branding & Printing Services",
    description: "Complete branding solutions from concept to print materials",
    icon: "🎨", // Emoji
    detailedDescription: "Brand identity development, graphic design, and printing services...",
    features: ["Logo design", "Print material design", "Digital assets"]
  },

  {
    id: 8,
    title: "Translation & Transcribing",
    description: "Accurate translation services in multiple languages",
    icon: "🌐", // Emoji
    detailedDescription: "Professional translation and transcription services...",
    features: ["Document translation", "Audio transcription", "Interpretation"]
  },
  {
    id: 9,
    title: "Event Coordination",
    description: "End-to-end event planning and management",
    icon: "📅", // Emoji
    detailedDescription: "Full-service event management including conferences, workshops...",
    features: ["Event concept", "Logistics management", "Speaker coordination"]
  }
]