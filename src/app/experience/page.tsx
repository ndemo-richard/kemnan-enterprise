// src/app/experience/page.tsx
'use client'

import { useState } from 'react'
import { experienceItems, experienceCategories, serviceTypes } from '@/data/experience'
import { Building2, MapPin, Calendar, Users, Target, Globe } from 'lucide-react'
import Link from 'next/link'

export default function ExperiencePage() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects')
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const filteredItems = experienceItems.filter(item => {
    const matchesCategory = selectedCategory === 'All Projects' || item.category === selectedCategory
    const matchesService = !selectedService || item.services.includes(selectedService)
    return matchesCategory && matchesService
  })

  const stats = [
    { label: 'Projects Completed', value: '50+', icon: Target },
    { label: 'Government Clients', value: '10+', icon: Building2 },
    { label: 'International Partners', value: '15+', icon: Globe },
    { label: 'African Countries', value: '10+', icon: MapPin },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Experience</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Kemnan Enterprise has a strong track record in strategic communications, media production, 
            advocacy support, and regional media placement across Africa.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Icon className="mx-auto mb-4 text-primary" size={24} />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Filter by Sector</h3>
            <div className="flex flex-wrap gap-3">
              {experienceCategories.map((category) => (
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Filter by Service</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  !selectedService
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Services
              </button>
              {serviceTypes.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedService === service
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredItems.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all card-hover"
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{project.client}</h3>
                    <h4 className="text-lg text-gray-700 font-semibold">{project.project}</h4>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-bold text-lg">{project.year}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
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
                  <h5 className="font-semibold mb-2 text-gray-700">Services Provided:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Media Outreach */}
                {project.mediaOutreach && (
                  <div className="mb-6">
                    <h5 className="font-semibold mb-2 text-gray-700">Media Outreach:</h5>
                    <p className="text-sm text-gray-600">
                      {project.mediaOutreach.join(', ')}
                    </p>
                  </div>
                )}

                {/* Impact */}
                <div>
                  <h5 className="font-semibold mb-2 text-gray-700">Impact:</h5>
                  <ul className="space-y-2">
                    {project.impact.map((impact, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2"></div>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary font-semibold hover:text-secondary"
                  >
                    Interested in Similar Work?
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">No projects found with selected filters</div>
            <button
              onClick={() => {
                setSelectedCategory('All Projects')
                setSelectedService(null)
              }}
              className="btn-primary"
            >
              Show All Projects
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with Us</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Work with Kenya's leading development communication experts to create impactful campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 btn-primary inline-flex items-center justify-center text-lg px-8 py-3"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white hover:bg-white/10 btn-primary inline-flex items-center justify-center text-lg px-8 py-3"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}