// src/components/Footer.tsx
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">KEMNAN ENTERPRISE</h3>
            <p className="text-gray-400 mb-4">Market Leader in Development Communication</p>
            <p className="text-gray-400">Founded in 2017</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/Our Work" className="text-gray-400 hover:text-secondary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-secondary">
                  Services
                </Link>
              </li>
        
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-gray-400 mr-3 mt-1" size={18} />
                <span className="text-gray-400">Westfield Court 34, Ndemi Road, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-gray-400 mr-3" size={18} />
                <a href="tel:+254728705207" className="text-gray-400 hover:text-white">
                  +254 728 705 207
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-gray-400 mr-3" size={18} />
                <a href="mailto:info@kemnanenterprise.com" className="text-gray-400 hover:text-white">
                  info@kemnanenterprise.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2017 - {currentYear} Kemnan Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}