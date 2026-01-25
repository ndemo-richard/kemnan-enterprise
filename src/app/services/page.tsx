'use client'

import { useState, useEffect, useCallback } from 'react'
import { services } from '@/data/services'
import { 
  ChartBarIcon, 
  UsersIcon, 
  VideoIcon, 
  PaletteIcon, 
  MicIcon, 
  LanguagesIcon, 
  CalendarCheckIcon,
  X,
  ExternalLink,
  Smartphone
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Map emoji strings to icon components
const emojiToIconMap: Record<string, React.ComponentType<any>> = {
  '📊': ChartBarIcon,     // Feasibility Study
  '👥': UsersIcon,       // Capacity Building & Training
  '🎥': VideoIcon,       // Content Production
  '🎨': PaletteIcon,     // Branding & Printing Services
  '🎤': MicIcon,         // Media Relations
  '🌐': LanguagesIcon,   // Translation & Transcribing
  '📅': CalendarCheckIcon // Event Coordination
}

export default function ServicesPage() {
  const router = useRouter()
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Handle browser back button
  useEffect(() => {
    if (!isMobileModalOpen) return

    const handlePopState = (event: PopStateEvent) => {
      event.preventDefault()
      closeMobileModal()
    }

    // Push state to browser history when modal opens
    window.history.pushState({ modalOpen: true }, '')

    // Add event listener for back button
    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      
      // Only go back if we're still on the modal state
      if (window.history.state?.modalOpen) {
        window.history.back()
      }
    }
  }, [isMobileModalOpen])

  // Also handle Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileModalOpen) {
        closeMobileModal()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMobileModalOpen])

  const handleServiceSelect = useCallback((serviceId: number) => {
    setSelectedService(serviceId)
    setHasInteracted(true)
    
    if (isMobile) {
      setIsMobileModalOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }, [isMobile])

  const closeMobileModal = useCallback(() => {
    setIsMobileModalOpen(false)
    document.body.style.overflow = 'auto'
    
    // Remove the modal state from history
    if (window.history.state?.modalOpen) {
      window.history.back()
    }
  }, [])

  const selectedServiceData = services.find(s => s.id === selectedService)

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple communications solutions available under one roof. Stay ahead of competitors utilizing our exciting strategies and products.
          </p>
          
          {/* Mobile Indicator */}
          {isMobile && !hasInteracted && (
            <div className="mt-6 flex items-center justify-center bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg px-4 py-2.5 border border-orange-200 animate-pulse shadow-sm">
              <Smartphone className="text-orange-500 mr-2" size={18} />
              <span className="text-orange-700 font-medium">Tap service to view details</span>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-4"> 
              {services.map((service) => {
                const Icon = emojiToIconMap[service.icon]
                const isSelected = selectedService === service.id
                
                return (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all relative group ${
                      isSelected
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {Icon ? (
                          <Icon className="mr-3" size={20} />
                        ) : (
                          <span className="mr-3 text-xl">{service.icon}</span>
                        )}
                        <span className="font-medium">{service.title}</span>
                      </div>
                      
                      {/* Mobile indicator */}
                      {isMobile && (
                        <div className={`flex items-center ${
                          isSelected ? 'text-white/80' : 'text-gray-400'
                        }`}>
                          <span className="text-xs mr-1 hidden sm:inline">Tap</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Active indicator for desktop */}
                    {!isMobile && isSelected && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r"></div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Desktop Service Details - Hidden on mobile */}
          <div className="lg:col-span-2 hidden lg:block">
            {selectedService ? (
              services.map((service) => {
                const Icon = emojiToIconMap[service.icon]
                if (selectedService !== service.id) return null
                
                return (
                  <div key={service.id} className="bg-white rounded-2xl shadow-lg p-8">
                    {/* ... desktop content (same as before) ... */}
                  </div>
                )
              })
            ) : (
              // Empty state for desktop when no service is selected
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="p-4 bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-3">Select a Service</h3>
                  <p className="text-gray-600 mb-6">
                    Click on any service from the list to view detailed information, features, and how we can help you.
                  </p>
                  <div className="flex items-center justify-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>← Click a service to get started</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Modal for Service Details */}
        {isMobileModalOpen && selectedServiceData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeMobileModal}
            />
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-scale-in">
              {/* Modal Header with Close Button */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    {(() => {
                      const Icon = emojiToIconMap[selectedServiceData.icon]
                      return Icon ? (
                        <Icon className="text-primary" size={20} />
                      ) : (
                        <span className="text-xl">{selectedServiceData.icon}</span>
                      )
                    })()}
                  </div>
                  <span className="font-semibold text-gray-900">{selectedServiceData.title}</span>
                </div>
                
                <button
                  onClick={closeMobileModal}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              
              {/* Modal Body */}
              <div className="p-6 overflow-y-auto">
                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-4">{selectedServiceData.description}</p>
                  
                  <p className="text-lg text-gray-800 mb-6">{selectedServiceData.detailedDescription}</p>
                  
                  <div className="bg-gray-50 p-6 rounded-xl mb-8">
                    <h3 className="text-xl text-gray-700 font-bold mb-4">What We Offer</h3>
                    <ul className="space-y-3">
                      {selectedServiceData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-primary/5 p-6 rounded-xl">
                      <h4 className="font-bold mb-3 text-primary">Delivery Approach</h4>
                      <p className="text-gray-700 text-sm">We follow a structured methodology involving initial consultation, detailed planning, execution, and evaluation phases.</p>
                    </div>
                    <div className="bg-primary/5 p-6 rounded-xl">
                      <h4 className="font-bold mb-3 text-primary">Timeline</h4>
                      <p className="text-gray-700 text-sm">Projects typically range from 2-8 weeks depending on scope and complexity. We provide regular progress updates.</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-xl text-gray-700 font-bold mb-4">Get Started</h3>
                    <p className="text-gray-600 mb-6">
                      Ready to leverage our {selectedServiceData.title.toLowerCase()} expertise for your project?
                    </p>
                    <div className="flex flex-col gap-4">
                      <Link
                        href="/contact"
                        className="bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-all text-center"
                        onClick={closeMobileModal}
                      >
                        Request a Quote
                      </Link>
                      <Link
                        href="/portfolio"
                        className="border-2 border-primary text-primary hover:bg-primary/5 px-6 py-3 rounded-lg font-semibold text-center transition-all"
                        onClick={closeMobileModal}
                      >
                        View Similar Projects
                      </Link>
                    </div>
                    
                    {/* View Full Page Link */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button
                        onClick={() => {
                          closeMobileModal()
                          // Navigate to full services page after a brief delay
                          setTimeout(() => {
                            router.push(`/services#${selectedServiceData.title.toLowerCase().replace(/\s+/g, '-')}`)
                          }, 300)
                        }}
                        className="flex items-center justify-center w-full text-primary font-medium hover:text-primary/80 py-2"
                      >
                        View full service page
                        <ExternalLink size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Services CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Multiple Services?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Many of our clients benefit from bundled services. Contact us for a comprehensive communication package.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white hover:bg-primary/90 px-8 py-4 text-lg rounded-lg font-semibold inline-flex items-center transition-all"
          >
            Get Custom Package
          </Link>
        </div>

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
          
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
          .animate-pulse {
            animation: pulse 2s infinite;
          }
        `}</style>
      </div>
    </div>
  )
}