import Hero from '@/components/Hero'
import ServicesPreview from '@/components/ServicesPreview'
import Testimonials from '@/components/Testimonials'
import ClientsSection from '@/components/ClientsSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Testimonials />
      <ClientsSection />
      <CTASection />
    </>
  )
}