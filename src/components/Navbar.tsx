// src/components/Navbar.tsx - WITH GRADIENT BACKGROUND
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Feasibility Study', href: '/services#feasibility-study' },
      { name: 'Capacity Building', href: '/services#capacity-building' },
      { name: 'Content Production', href: '/services#content-production' },
      { name: 'Branding & Printing', href: '/services#branding-printing' },
      { name: 'Media Relations', href: '/services#media-relations' },
      { name: 'Translation Services', href: '/services#translation' },
      { name: 'Event Coordination', href: '/services#event-coordination' },
    ]
  },
  { name: 'Experience', href: '/experience' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const handleDropdownToggle = (e: React.MouseEvent, itemName: string) => {
    e.stopPropagation()
    setOpenDropdown(openDropdown === itemName ? null : itemName)
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-primary via-accent/90 to-secondary shadow-lg py-2 backdrop-blur-sm' 
          : 'bg-gradient-to-r from-primary via-accent/80 to-secondary shadow-md py-4'
      } text-white`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo - White text on gradient */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">KEMNAN</span>
                <span className="text-xs text-white/80 font-medium">ENTERPRISE</span>
              </div>
              <div className="hidden sm:block">
                <div className="h-8 w-px bg-white/30"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-sm text-white/90">Development Communication</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <button
                      onClick={(e) => handleDropdownToggle(e, item.name)}
                      className={`flex items-center font-medium px-3 py-2 rounded-lg transition-colors ${
                        pathname === item.href || pathname.startsWith(item.href)
                          ? 'text-white bg-white/20'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-medium px-3 py-2 rounded-lg transition-colors ${
                        pathname === item.href
                          ? 'text-white bg-white/20'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === item.name && (
                    <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Contact CTA */}
              <div className="flex items-center space-x-4 pl-6 border-l border-white/30">
                <a
                  href="tel:+254728705207"
                  className="flex items-center text-white font-semibold hover:text-yellow-200"
                >
                  <Phone size={16} className="mr-2" />
                  <span className="hidden xl:inline">+254 728 705 207</span>
                  <span className="xl:hidden">Call</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-primary hover:bg-gray-100 px-5 py-2 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden pt-16">
          {/* Mobile Menu with same gradient */}
          <div className="bg-gradient-to-b from-primary to-accent shadow-xl">
            <div className="container-custom py-6">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={(e) => handleDropdownToggle(e, item.name)}
                          className={`flex items-center justify-between w-full px-4 py-3 rounded-lg font-medium transition-colors ${
                            pathname === item.href || pathname.startsWith(item.href)
                              ? 'text-white bg-white/20'
                              : 'text-white/90 hover:bg-white/10'
                          }`}
                        >
                          {item.name}
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform text-white ${
                              openDropdown === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        {/* Mobile Dropdown */}
                        {openDropdown === item.name && (
                          <div className="ml-4 mt-1 space-y-1 border-l border-white/30 pl-4">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                          pathname === item.href
                            ? 'text-white bg-white/20'
                            : 'text-white/90 hover:bg-white/10'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-white/30">
                <a
                  href="tel:+254728705207"
                  className="flex items-center text-white font-semibold mb-4 px-4 py-3 bg-white/10 rounded-lg"
                >
                  <Phone size={16} className="mr-2" />
                  +254 728 705 207
                </a>
                <Link
                  href="/contact"
                  className="block w-full bg-white text-primary hover:bg-gray-100 px-4 py-3 rounded-lg font-semibold text-center transition-colors shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 -z-10 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  )
}