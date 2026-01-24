import { companyInfo, visionMission, stats } from '@/data/company'
import { teamMembers } from '@/data/team'
import { Target, Rocket, Gem, CheckCircle } from 'lucide-react'

export default function AboutPage() {
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
                  'Audio-Visual Content Production',
                  'Event Coordination',
                  'Capacity Building & Training',
                  'Media Relations & Strategy',
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

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Our Management Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.experience}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-block mt-4 text-primary hover:text-secondary text-sm font-medium"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}