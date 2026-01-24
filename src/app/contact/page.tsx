'use client'

import { useState } from 'react'
import { companyInfo } from '@/data/company'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will contact you soon.')
    setFormData({ name: '', email: '', company: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Kenya's leading development communication experts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Address</h4>
                    <p className="text-gray-600">{companyInfo.address}</p>
                    <p className="text-gray-600">{companyInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-gray-600">{companyInfo.phone}</p>
                    <p className="text-gray-600 text-sm">Available 8:00 AM - 5:00 PM, Mon - Fri</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-600">{companyInfo.email}</p>
                    <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: {companyInfo.workingHours.weekdays}</p>
                    <p className="text-gray-600">Saturday: {companyInfo.workingHours.saturday}</p>
                    <p className="text-gray-600">Sunday: {companyInfo.workingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Find Us</h3>
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808173376318!2d36.821146!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109996536c39%3A0x4eb5f68c7c5c4f3a!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1644567890123!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kemnan Enterprise Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your organization name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="feasibility">Feasibility Study</option>
                  <option value="capacity">Capacity Building & Training</option>
                  <option value="content">Content Production</option>
                  <option value="branding">Branding & Printing Services</option>
                  <option value="media">Media Relations</option>
                  <option value="translation">Translation & Transcribing</option>
                  <option value="events">Event Coordination</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Tell us about your project or requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center"
              >
                Send Message <Send className="ml-2" size={18} />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t text-center">
              <p className="text-gray-500 text-sm">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                <br />
                We never share your information with third parties.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-primary text-white p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-4">Quick Call</h3>
            <p className="mb-4">Prefer to speak directly?</p>
            <a
              href={`tel:${companyInfo.phone}`}
              className="text-2xl font-bold hover:underline"
            >
              {companyInfo.phone}
            </a>
          </div>
          
          <div className="bg-secondary text-white p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="mb-4">Send us an email anytime</p>
            <a
              href={`mailto:${companyInfo.email}`}
              className="text-xl font-bold hover:underline break-all"
            >
              {companyInfo.email}
            </a>
          </div>
          
          <div className="bg-accent text-gray-900 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <p className="mb-4">Schedule an appointment</p>
            <p className="font-medium">{companyInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  )
}