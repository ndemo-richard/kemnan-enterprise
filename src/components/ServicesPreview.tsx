// src/components/ServicesPreview.tsx - UPDATED
import { services } from '@/data/services'
import ServiceCard from './ServiceCard'
import Link from 'next/link'

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our Key Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple communications solutions available under one roof
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}