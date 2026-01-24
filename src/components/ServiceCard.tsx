// src/components/ServiceCard.tsx - UPDATED
import Link from 'next/link'

interface ServiceCardProps {
  service: {
    id: number
    title: string
    description: string
    icon: string
  }
  index?: number
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-accent/20 hover:border-accent/40 group h-full flex flex-col"
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
    </Link>
  )
}