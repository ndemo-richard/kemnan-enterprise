// src/components/IconComponent.tsx
'use client'

import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react'
import { memo } from 'react'

// Dynamically import only the icons you need
const ChartBar = dynamic(() => import('lucide-react').then(mod => mod.ChartBar))
const Users = dynamic(() => import('lucide-react').then(mod => mod.Users))
const Video = dynamic(() => import('lucide-react').then(mod => mod.Video))
const Palette = dynamic(() => import('lucide-react').then(mod => mod.Palette))
const Mic = dynamic(() => import('lucide-react').then(mod => mod.Mic))
const Languages = dynamic(() => import('lucide-react').then(mod => mod.Languages))
const CalendarCheck = dynamic(() => import('lucide-react').then(mod => mod.CalendarCheck))

const iconComponents = {
  ChartBar,
  Users,
  Video,
  Palette,
  Mic,
  Languages,
  CalendarCheck
}

interface IconComponentProps extends LucideProps {
  name: keyof typeof iconComponents
}

const IconComponent = memo(({ name, ...props }: IconComponentProps) => {
  const Icon = iconComponents[name]
  return Icon ? <Icon {...props} /> : null
})

IconComponent.displayName = 'IconComponent'

export default IconComponent