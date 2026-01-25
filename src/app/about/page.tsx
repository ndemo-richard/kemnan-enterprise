// app/about/page.tsx
import { companyInfo, visionMission, stats } from '@/data/company'
import { teamMembers } from '@/data/team'
import TeamCard from '@/components/TeamCard'
import { Target, Rocket, Gem, CheckCircle, Users } from 'lucide-react'

export default function AboutPage() {
  // Social links for team members (optional - you can add these to team.ts if needed)
  const socialLinks = {
    nancy: {
      linkedin: "https://linkedin.com/in/nancy-onyancha",
      twitter: "https://twitter.com/nancy_onyancha"
    },
    david: {
      linkedin: "https://linkedin.com/in/david-kimani",
      twitter: "https://twitter.com/david_kimani"
    },
    // Add for other team members as needed
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Kemnan Enterprise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionalism, Integrity, and Honesty in Development Communication since {companyInfo.founded}
          </p>
        </div>

        {/* Story */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl text-gray-600 font-bold mb-8">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Founded in {companyInfo.founded} in {companyInfo.location}
               , Kemnan Enterprise was established on the grounds of utmost professionalism, integrity, and honesty.
              </p>
              <p className="text-gray-600 mb-6">
                We are committed to delivering excellence in all areas of our business and pride ourselves on the knowledge, skills, and expertise of our employees who work together as a team delivering successful projects.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-600">Serving Government & Private Sector</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-600">18+ Years Collective Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={20} />
                  <span className="text-gray-600">Flexible & Responsive Approach</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-primary">Our Focus</h3>
              <div className="className= text-gray-600 space-y-4">
                {[
                  'Media Relations & Strategy',
                  'Capacity Building & Training',
                  'Event Coordination',
                  'Audio-Visual Content Production',
                  'Feasibility Studies',
                  'Branding & Communication Materials',
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-primary text-white p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Target className="mr-3" size={32} />
              <h3 className="text-2xl font-bold">Vision</h3>
            </div>
            <p className="text-lg opacity-90">{visionMission.vision}</p>
          </div>

          <div className="bg-secondary text-white p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Rocket className="mr-3" size={32} />
              <h3 className="text-2xl font-bold">Mission</h3>
            </div>
            <p className="text-lg opacity-90">{visionMission.mission}</p>
          </div>

          <div className="bg-accent text-gray-900 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Gem className="mr-3" size={32} />
              <h3 className="text-2xl font-bold">Our Values</h3>
            </div>
            <ul className="space-y-3">
              {visionMission.values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full mb-4">
              <Users className="text-primary mr-2" size={24} />
              <h2 className="text-4xl font-bold">Meet Our Team</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in development communication, media production, and strategic communications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                socialLinks={getSocialLinks(member.name)}
              />
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{teamMembers.length}</div>
                <div className="text-sm opacity-90">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">18+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-sm opacity-90">Core Specializations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Culture */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We work as one team, leveraging each other's strengths to deliver exceptional results for our clients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Constantly exploring new approaches and technologies to enhance our communication strategies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Committed to the highest standards of quality and professionalism in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to get social links based on team member name
function getSocialLinks(name: string) {
  const socialData: Record<string, { linkedin?: string; twitter?: string }> = {
    "Nancy Onyancha": {
      linkedin: "",
      twitter: ""
    },
    "David Kimani": {
      linkedin: "",
      twitter: ""
    },
    "Sarah Wambui": {
      linkedin: "",
      twitter: ""
    },
    "James Omondi": {
      linkedin: "",
      twitter: ""
    }
  }

  return socialData[name] || {}
}