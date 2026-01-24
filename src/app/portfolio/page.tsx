'use client'
import { useState } from 'react'
import { portfolioItems, portfolioCategories } from '@/data/portfolio'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects')

  const filteredItems = selectedCategory === 'All Projects'
    ? portfolioItems
    : portfolioItems.filter(item =>
        item.category === selectedCategory || item.services.includes(selectedCategory)
      )

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful projects that created impact through innovative development communication
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all card-hover group"
            >
              {/* Project Header */}
              <div className="h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-2xl font-bold">{project.year}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users size={16} className="mr-2" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Impact:</h4>
                  <ul className="space-y-1">
                    {project.impact.slice(0, 2).map((impact, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-secondary"
                  >
                    View Case Study <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">No projects found in this category</div>
            <button
              onClick={() => setSelectedCategory('All Projects')}
              className="btn-primary"
            >
              View All Projects
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Similar Project?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Let's discuss how we can help bring your development communication project to life.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center px-8 py-4 text-lg"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  )
}