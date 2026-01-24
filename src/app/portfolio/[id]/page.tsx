import { notFound } from 'next/navigation'
import { getPortfolioItemById } from '@/data/portfolio'
import { Calendar, MapPin, Users, CheckCircle, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'

interface PortfolioDetailPageProps {
  params: {
    id: string
  }
}

export default function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const portfolioItem = getPortfolioItemById(parseInt(params.id))
  
  if (!portfolioItem) {
    notFound()
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom max-w-6xl">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center text-primary hover:text-secondary mb-8"
        >
          <ArrowLeft className="mr-2" size={18} /> Back to Portfolio
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full font-medium mb-3">
                {portfolioItem.category}
              </span>
              <h1 className="text-4xl font-bold">{portfolioItem.title}</h1>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-primary">{portfolioItem.year}</span>
            </div>
          </div>

          {/* Project Image */}
          <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-2xl mb-8"></div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center">
              <Users className="text-primary mr-3" size={20} />
              <div>
                <div className="text-sm text-gray-500">Client</div>
                <div className="font-medium">{portfolioItem.client}</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-primary mr-3" size={20} />
              <div>
                <div className="text-sm text-gray-500">Location</div>
                <div className="font-medium">{portfolioItem.location}</div>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="text-primary mr-3" size={20} />
              <div>
                <div className="text-sm text-gray-500">Year</div>
                <div className="font-medium">{portfolioItem.year}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700">{portfolioItem.description}</p>
              </div>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Services Provided</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {portfolioItem.services.map((service, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center">
                    <CheckCircle className="text-primary mr-3" size={20} />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Project Impact</h2>
              <div className="space-y-4">
                {portfolioItem.impact.map((impact, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-medium mb-1">Achievement {index + 1}</h4>
                      <p className="text-gray-600">{impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Project Summary */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Project Summary</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Category</div>
                    <div className="font-medium">{portfolioItem.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-medium">3-6 Months</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Team Size</div>
                    <div className="font-medium">5-10 Professionals</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Status</div>
                    <div className="font-medium text-green-600">Completed Successfully</div>
                  </div>
                </div>
              </div>

              {/* Share & CTA */}
              <div className="bg-primary/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Interested in Similar Work?</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss how we can help with your next development communication project.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="block w-full btn-primary text-center"
                  >
                    Start a Project
                  </Link>
                  <div className="text-center">
                    <span className="text-sm text-gray-500">Or share this project:</span>
                    <div className="flex justify-center gap-3 mt-3">
                      <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <Share2 size={20} />
                      </button>
                      {/* Add social share buttons */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial (Optional) */}
              <div className="bg-white border rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Client Feedback</h3>
                <p className="text-gray-600 italic mb-4">
                  "Kemnan Enterprise delivered exceptional results for our project. Their professionalism and attention to detail were outstanding."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                    {portfolioItem.client.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium">{portfolioItem.client}</div>
                    <div className="text-sm text-gray-500">Project Client</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* You can add related projects logic here */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Similar Project 1</h3>
              <p className="text-gray-600 text-sm mb-4">Brief description of related project...</p>
              <Link href="#" className="text-primary text-sm font-medium">
                View Project →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Similar Project 2</h3>
              <p className="text-gray-600 text-sm mb-4">Brief description of related project...</p>
              <Link href="#" className="text-primary text-sm font-medium">
                View Project →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold mb-2">Similar Project 3</h3>
              <p className="text-gray-600 text-sm mb-4">Brief description of related project...</p>
              <Link href="#" className="text-primary text-sm font-medium">
                View Project →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}