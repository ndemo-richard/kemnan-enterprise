// src/data/team.ts
export interface TeamMember {
    id: number
    name: string
    position: string
    experience: string
    bio: string
    email?: string
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Nancy Onyancha",
      position: "Founder & Director",
      experience: "10+ years in Development Communication",
      bio: "Passionate about creating social impact through strategic communication. Founded Kemnan Enterprise in 2017 to bridge the gap between development organizations and effective communication.",
      email: "nancy@kemnan.co.ke"
    },
    {
      id: 2,
      name: "David Kimani",
      position: "Director of Operations",
      experience: "8+ years in Project Management",
      bio: "Expert in capacity building, training, and organizational development with extensive experience in the development sector across East Africa.",
      email: "david@kemnan.co.ke"
    },
    {
      id: 3,
      name: "Sarah Wambui",
      position: "Creative Director",
      experience: "6+ years in Content Production",
      bio: "Award-winning content producer specializing in development communication videos, documentaries, and multimedia campaigns.",
      email: "sarah@kemnan.co.ke"
    },
    {
      id: 4,
      name: "James Omondi",
      position: "Media Relations Manager",
      experience: "7+ years in Journalism & PR",
      bio: "Former journalist with deep connections in Kenyan media landscape. Specializes in strategic media engagement and crisis communication.",
      email: "james@kemnan.co.ke"
    }
  ]