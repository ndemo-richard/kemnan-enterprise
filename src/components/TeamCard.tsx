// src/components/TeamCard.tsx
import Image from 'next/image'
import { Linkedin, Mail, Twitter } from 'lucide-react'
import { TeamMember } from '@/data/team'

interface TeamCardProps {
  member: TeamMember
  socialLinks?: {
    linkedin?: string
    twitter?: string
  }
}

export default function TeamCard({ member, socialLinks }: TeamCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Profile Image Section */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        {member.profileImage ? (
          <div className="relative w-full h-full">
            <Image
              src={member.profileImage}
              alt={`${member.name} - ${member.position}`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={member.id <= 2} // Prioritize first two images
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ) : (
          // Fallback with initials
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
            <span className="text-white text-4xl font-bold">
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        )}
        
        {/* Experience Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-medium">
            {member.experience}
          </span>
        </div>
      </div>

      {/* Member Details */}
      <div className="p-6">
        {/* Name and Position */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-primary font-medium">{member.position}</p>
        </div>

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {member.bio}
        </p>

        {/* Contact & Social Links */}
        <div className="flex items-center justify-between pt-4 border-t">
          {/* Email */}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center text-gray-600 hover:text-primary transition-colors group/email"
            >
              <Mail size={16} className="mr-2 group-hover/email:scale-110 transition-transform" />
              <span className="text-sm">Email</span>
            </a>
          )}

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks?.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <Linkedin size={18} />
              </a>
            )}
            
            {socialLinks?.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label={`${member.name}'s Twitter`}
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}