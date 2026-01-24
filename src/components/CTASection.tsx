// src/components/CTASection.tsx - UPDATED
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Communication Strategy?
        </h2>
        
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Partner with Kenya's leading development communication experts. Let's create impact together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-secondary text-white hover:bg-yellow-700 px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center justify-center transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Get a Free Consultation <ArrowRight className="ml-2" size={20} />
          </Link>
          
          <a
            href="tel:+254728705207"
            className="border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg inline-flex items-center justify-center transition-colors duration-300"
          >
            <Phone className="mr-2" size={20} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}