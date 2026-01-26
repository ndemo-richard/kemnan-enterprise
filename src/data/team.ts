// src/data/team.ts
export interface TeamMember {
  id: number
  name: string
  position: string
  experience: string
  bio: string
  email?: string
  profileImage: string // Add profile image field
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nancy Onyancha",
    position: "Founder & Director",
    experience: "10+ years in Development Communication",
    bio: "Passionate about creating social impact through strategic communication. Founded Kemnan Enterprise in 2017 to bridge the gap between development organizations and effective communication.",
    email: "kemnan2018@gmail.com",
    profileImage: "/images/team/nancyonyancha.jpg" // Add profile image path
  },
  {
    id: 2,
    name: "Emma Kerubo",
    position: "Finance and operations",
    experience: "Financial Management & Operational Excellence",
    bio:"Finance and operations manager with strong expertise in financial panning, udgeting and operational manaement. She is skilled in streamlining business processes, managing procument and administrative functions and supportin strategic decision making to improve efficiency and drive sustainable business gorwth.",
    email: "",
    profileImage: "/images/team/emmakerubo.jpg"
  },
  {
    id: 3,
    name: "Richard Ndemo",
    position: "Project Manager",
    experience: "Project Coordination & Stakeholder Engagement",
    bio: "Skilled in managing complex communication projects from conception to completion. Specializes in stakeholder coordination, timeline management, and ensuring project deliverables meet client expectations. Known for meticulous attention to detail and effective team leadership.",
    email: "",
    profileImage: "/images/team/user.png"
  },

]