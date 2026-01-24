// src/components/Testimonials.tsx - UPDATED
'use client'

import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Dr. James Mwangi",
    position: "Director, Ministry of Planning",
    content: "Kemnan Enterprise's expertise in development communication transformed our public engagement strategy. Their professional approach delivered exceptional results.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Program Manager",
    content: "The capacity building workshop organized by Kemnan was outstanding. Our team gained valuable skills that we immediately applied to our projects.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Ochieng",
    position: "CEO",
    content: "Working with Kemnan on our corporate branding was a game-changer. They understood our vision and delivered beyond expectations.",
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-accent/20">
            <Quote className="text-primary/20 mb-6" size={48} />
            
            <p className="text-xl text-gray-700 italic mb-8">
              "{testimonials[currentIndex].content}"
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
              
              <div className="flex">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-secondary fill-current" size={20} />
                ))}
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-accent' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}