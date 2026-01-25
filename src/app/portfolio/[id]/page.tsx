import { notFound } from 'next/navigation'
import { getPortfolioItemById, portfolioItems } from '@/data/portfolio'
import { Calendar, MapPin, Users, CheckCircle, ArrowLeft, Share2, Building } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface PortfolioDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  // Unwrap the params promise
  const { id } = await params
  
  const portfolioItem = getPortfolioItemById(id)
  
  if (!portfolioItem) {
    notFound()
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = portfolioItems
    .filter(item => item.id !== id && item.category === portfolioItem.category)
    .slice(0, 3)

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
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
            <div className="flex-1">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full font-medium mb-3">
                {portfolioItem.category}
              </span>
              <h1 className="text-4xl font-bold mb-4">{portfolioItem.title}</h1>
              
              {/* Client Logo and Name */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full p-3 shadow-md mr-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={portfolioItem.logo}
                      alt={portfolioItem.logoAlt || `${portfolioItem.client} Logo`}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center text-gray-600">
                    <Building className="mr-2" size={18} />
                    <span className="font-medium">Client:</span>
                  </div>
                  <div className="text-xl font-bold">{portfolioItem.client}</div>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <span className="text-3xl font-bold text-primary">{portfolioItem.year}</span>
            </div>
          </div>

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
                <p className="text-lg text-gray-700 mb-6">{portfolioItem.description}</p>
                
                {portfolioItem.detailedDescription && (
                  <div className="mt-8 space-y-4">
                    {portfolioItem.detailedDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Services Provided</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {portfolioItem.services.map((service, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg flex items-center">
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
              <div className="bg-gray-700 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Project Summary</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Category</div>
                    <div className="font-medium">{portfolioItem.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-medium">{portfolioItem.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="font-medium">{portfolioItem.location}</div>
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
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Logo Display */}
              <div className=" border rounded-2xl p-6">
                <div className="flex items-center justify-center">
                  <div className="w-40 h-40 bg-gray-50 rounded-full p-6">
                    <div className="relative w-full h-full">
                      <Image
                        src={portfolioItem.logo}
                        alt={portfolioItem.logoAlt || `${portfolioItem.client} Logo`}
                        fill
                        className="object-contain"
                        sizes="160px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  className="bg-gray-900 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white rounded-full p-2 mr-3">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.logo}
                          alt={project.client}
                          fill
                          className="object-contain"
                          sizes="48px"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold">{project.client.split(' / ')[0]}</h3>
                      <p className="text-gray-600 text-sm">{project.category}</p>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <span className="text-primary text-sm font-medium">
                    View Project →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}