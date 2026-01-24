export const companyInfo = {
  name: "KEMNAN ENTERPRISE",
  tagline: "Market Leader in Development Communication",
  founded: "2017",
  founder: "Nancy Onyancha",
  location: "Nairobi, Kenya",
  address: "Westfield Court 34, Ndemi Road, Nairobi, Kenya",
  phone: "+254 728 705 207",
  email: "info@kemnanenterprise.com",
  workingHours: {
    weekdays: "8:00 AM - 5:00 PM",
    saturday: "9:00 AM - 1:00 PM",
    sunday: "Closed"
  },
  socialMedia: {
    facebook: "https://facebook.com/kemnanenterprise",
    twitter: "https://twitter.com/kemnan",
    linkedin: "https://linkedin.com/company/kemnan-enterprise",
    instagram: "https://instagram.com/kemnanenterprise"
  }
}

export const visionMission = {
  vision: "To be the market leader in Development Communication.",
  mission: "To partner with organizations and facilitate their achievement towards their goals by providing innovative and creative communication approaches.",
  values: [
    "Professionalism in all our engagements",
    "Integrity and honesty in our work",
    "Passionate about creating social impact",
    "Innovative in our approaches",
    "Excellence in service delivery",
    "Respect for diversity and inclusion",
    "Collaborative teamwork"
  ]
}

export const stats = [
  { label: "Years Experience", value: "7+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Client Satisfaction", value: "100%" },
  { label: "Team Members", value: "12+" }
]

export const servicesOverview = [
  "Audio-Visual Content Production",
  "Event Coordination & Management",
  "Capacity Building & Training",
  "Media Relations & Strategy",
  "Feasibility Studies",
  "Branding & Printing Services",
  "Translation & Transcription"
]

export const clientSectors = [
  "Government Institutions",
  "International NGOs",
  "UN Agencies",
  "Private Sector Companies",
  "Development Partners",
  "Civil Society Organizations",
  "Educational Institutions"
]

export const companyMilestones = [
  { year: "2017", event: "Company Founded in Nairobi" },
  { year: "2018", event: "First Major Government Contract" },
  { year: "2019", event: "Expanded Service Portfolio" },
  { year: "2020", event: "Remote Service Delivery Implementation" },
  { year: "2021", event: "Team Growth to 10+ Members" },
  { year: "2022", event: "International Projects Started" },
  { year: "2023", event: "50+ Projects Milestone Achieved" }
]

export const teamStructure = {
  management: [
    { name: "Nancy Onyancha", role: "Founder & Director" },
    { name: "Co-Director", role: "Director of Operations" }
  ],
  departments: [
    "Content Production Team",
    "Event Management Team",
    "Training & Capacity Building",
    "Media Relations Unit",
    "Administration & Support"
  ]
}

// Helper functions
export const getContactInfo = () => ({
  address: companyInfo.address,
  phone: companyInfo.phone,
  email: companyInfo.email,
  hours: companyInfo.workingHours
})

export const getSocialLinks = () => companyInfo.socialMedia

export const formatPhoneNumber = (phone: string) => {
  // Format phone number for display
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
}

export const getLocationMapUrl = () => {
  const encodedAddress = encodeURIComponent(companyInfo.address)
  return `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}