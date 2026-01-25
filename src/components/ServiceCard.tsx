// src/components/ServiceCard.tsx - UPDATED with mobile popup
'use client'

import { useState } from 'react'
import { X, ExternalLink } from 'lucide-react'

interface ServiceCardProps {
  service: {
    id: number
    title: string
    description: string
    icon: string
    detailedDescription?: string
    features?: string[]
  }
  index?: number
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) { // Mobile view
      e.preventDefault()
      setIsModalOpen(true)
    }
    // On desktop, the Link will handle navigation normally
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {/* Main Card - Clickable Link for desktop, button-like for mobile */}
      <a
        href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={handleClick}
        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-accent/20 hover:border-accent/40 group h-full flex flex-col cursor-pointer block"
      >
        <div className="flex items-start mb-4">
          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
            <span className="text-2xl" role="img" aria-label={service.title}>
              {service.icon}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 text-gray-900">
          {service.title}
        </h3>
        
        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center text-accent font-medium hover:text-secondary group-hover:translate-x-1 transition-all duration-300">
            Learn more
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </span>
        </div>
      </a>

      {/* Mobile Modal/Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-hidden animate-scale-in">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="text-2xl" role="img" aria-label={service.title}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 overflow-y-auto">
              <p className="text-gray-700 mb-6">{service.description}</p>
              
              {service.detailedDescription && (
                <>
                  <h4 className="font-bold text-lg mb-3 text-primary">Detailed Description</h4>
                  <p className="text-gray-600 mb-6">{service.detailedDescription}</p>
                </>
              )}
              
              {service.features && service.features.length > 0 && (
                <>
                  <h4 className="font-bold text-lg mb-3 text-primary">What We Offer</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              {/* Call to Actions */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <a
                  href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center justify-center text-primary font-medium hover:text-accent"
                  onClick={(e) => {
                    e.preventDefault()
                    closeModal()
                    // Navigate to full services page after a brief delay
                    setTimeout(() => {
                      window.location.href = `/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`
                    }, 300)
                  }}
                >
                  View full details on Services page
                  <ExternalLink size={16} className="ml-2" />
                </a>
                
                <a
                  href="/contact"
                  className="block w-full bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
                  onClick={closeModal}
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add animation styles */}
      <style jsx global>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </>
  )
}