'use client'

import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-accent to-secondary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#ffffff_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            Since 2017 • Nairobi, Kenya
          </motion.span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Market Leader in{' '}
            <span className="text-accent relative">
              Development Communication
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl">
            Partnering with organizations to achieve their goals through innovative communication approaches, audio-visual content production, and capacity building in Kenya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center transition-all duration-300 hover:shadow-xl"
              >
                Start a Project <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/portfolio"
                className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center transition-all duration-300"
              >
                View Our Work
              </Link>
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center text-white hover:text-accent transition-colors group"
            >
              <PlayCircle className="mr-3 group-hover:scale-110 transition-transform" size={24} />
              <span className="text-lg">Watch Showreel</span>
            </motion.button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '7+', label: 'Years Experience', delay: 0.1 },
              { value: '50+', label: 'Projects Completed', delay: 0.2 },
              { value: '100%', label: 'Client Satisfaction', delay: 0.3 },
              { value: '18+', label: 'Team Experience', delay: 0.4 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/15 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}