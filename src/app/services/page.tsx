'use client'

import { useState } from 'react'
import { services } from '@/data/services'
import { ChartBar, Users, Video, Palette, Mic, Languages, CalendarCheck } from 'lucide-react'
import Link from 'next/link'

const iconMap = {
  ChartBar,
  Users,
  Video,
  Palette,
  Mic,
  Languages,
  CalendarCheck,
}

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<number | null>(1)

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple communications solutions available under one roof. Stay ahead of competitors utilizing our exciting strategies and products.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-4">
              {services.map((service) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedService === service.id
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <Icon className="mr-3" size={20} />
                      <span className="font-medium">{service.title}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              if (selectedService !== service.id) return null
              
              return (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 mb-6">{service.detailedDescription}</p>
                    
                    <div className="bg-gray-50 p-6 rounded-xl mb-8">
                      <h3 className="text-xl font-bold mb-4">What We Offer</h3>
                      <ul className="space-y-3">
                        {[
                          'Comprehensive research and analysis',
                          'Stakeholder engagement strategies',
                          'Detailed project planning',
                          'Risk assessment and mitigation',
                          'Implementation roadmap',
                          'Monitoring and evaluation framework'
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-primary/5 p-6 rounded-xl">
                        <h4 className="font-bold mb-3 text-primary">Delivery Approach</h4>
                        <p className="text-gray-700">We follow a structured methodology involving initial consultation, detailed planning, execution, and evaluation phases.</p>
                      </div>
                      <div className="bg-primary/5 p-6 rounded-xl">
                        <h4 className="font-bold mb-3 text-primary">Timeline</h4>
                        <p className="text-gray-700">Projects typically range from 2-8 weeks depending on scope and complexity. We provide regular progress updates.</p>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t">
                      <h3 className="text-xl font-bold mb-4">Get Started</h3>
                      <p className="text-gray-600 mb-6">
                        Ready to leverage our {service.title.toLowerCase()} expertise for your project?
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                          href="/contact"
                          className="btn-primary inline-flex items-center justify-center"
                        >
                          Request a Quote
                        </Link>
                        <Link
                          href="/portfolio"
                          className="border-2 border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-lg font-semibold text-center transition-all"
                        >
                          View Similar Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* All Services CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Multiple Services?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Many of our clients benefit from bundled services. Contact us for a comprehensive communication package.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center px-8 py-4 text-lg"
          >
            Get Custom Package
          </Link>
        </div>
      </div>
    </div>
  )
}