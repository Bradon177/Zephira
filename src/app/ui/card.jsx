"use client";

import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function Card({ 
  children, 
  icon: Icon, 
  title, 
  description, 
  footer,
  color = 'purple',
  variant = 'default', // 'default' | 'emergency'
  centered = false,
  onClick,
  className = "" 
}) {
  const Component = onClick ? 'button' : 'div'
  
  // Mapeo de colores y estilos
  const styles = {
    purple: {
      iconBg: 'bg-[#f5f3f7] group-hover:bg-[#8b7fa8]/10',
      iconText: 'text-[#8b7fa8]',
      actionText: 'text-[#8b7fa8]',
      border: 'hover:border-[#8b7fa8]/30',
      emergencyBg: 'bg-[#8b7fa8] text-white'
    },
    blue: {
      iconBg: 'bg-[#e8f4f8] group-hover:bg-[#88b0c4]/10',
      iconText: 'text-[#88b0c4]',
      actionText: 'text-[#88b0c4]',
      border: 'hover:border-[#88b0c4]/30',
      emergencyBg: 'bg-[#88b0c4] text-white'
    },
    red: {
      iconBg: 'bg-[#fdf2f2] group-hover:bg-[#d97373]/10',
      iconText: 'text-[#d97373]',
      actionText: 'text-[#d97373]',
      border: 'hover:border-[#d97373]/30',
      emergencyBg: 'bg-[#d97373] text-white'
    },
    lightRed: {
      iconBg: 'bg-[#fdf2f2] group-hover:bg-[#d97373]/10',
      iconText: 'text-[#d97373]',
      actionText: 'text-[#d97373]',
      border: 'hover:border-[#d97373]/30',
      emergencyBg: 'bg-[#d97373] text-white'
    },
    lightBlue: {
      iconBg: 'bg-[#e8f4f8] group-hover:bg-[#88b0c4]/10',
      iconText: 'text-[#88b0c4]',
      actionText: 'text-[#88b0c4]',
      border: 'hover:border-[#88b0c4]/30',
      emergencyBg: 'bg-[#88b0c4] text-white'
    }
  }

  const activeStyle = styles[color] || styles.purple
  
  const baseClasses = variant === 'emergency' 
    ? `${activeStyle.emergencyBg} p-8 border-none shadow-sm hover:shadow-md`
    : `bg-white p-6 border border-gray-200/50 ${activeStyle.border} hover:shadow-sm`

  const alignmentClasses = centered 
    ? 'flex flex-col items-center text-center' 
    : 'flex flex-col text-left'

  const iconClasses = variant === 'emergency'
    ? 'bg-white/20 text-white'
    : `${activeStyle.iconBg} ${activeStyle.iconText}`

  const titleClasses = variant === 'emergency' ? 'text-white' : 'text-gray-800'
  const descClasses = variant === 'emergency' ? 'text-white/90' : 'text-gray-600'
  const footerClasses = variant === 'emergency' ? 'text-white/80' : activeStyle.actionText

  return (
    <Component 
      onClick={onClick}
      className={`${baseClasses} ${alignmentClasses} rounded-2xl transition-all group w-full ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {Icon && (
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${iconClasses}`}>
          <Icon className="w-6 h-6" />
        </div>
      )}
      
      {title && <h3 className={`mb-2 font-semibold ${titleClasses}`}>{title}</h3>}
      {description && <p className={`text-sm mb-3 ${descClasses}`}>{description}</p>}
      
      {children && <div className="w-full">{children}</div>}

      {footer && (
        <span className={`${footerClasses} text-sm flex items-center gap-1 mt-auto pt-4`}>
          {footer} {variant !== 'emergency' && <ChevronRight className="w-4 h-4" />}
        </span>
      )}
    </Component>
  )
}

// Subcomponente para contenido extra
Card.Content = function CardContent({ children, className = "" }) {
  return (
    <div className={`w-full mt-2 ${className}`}>
      {children}
    </div>
  )
}
