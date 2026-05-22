"use client";

import React from 'react'

export default function Button({ 
  variant = 'ghost', 
  icon: Icon, 
  title, 
  description, 
  footer,
  color,
  onClick,
  className = ""
}) {
  // Estilos base por variante
  const variants = {
    emergency: `group text-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-3 w-full`,
    info: `group text-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-3 w-full`,
    primary: `px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 w-full`,
    ghost: `flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-gray-600`
  }

  // Colores específicos para variantes
  const colorStyles = {
    red: 'bg-[#d97373] hover:bg-[#c96565] text-white',
    blue: 'bg-[#88b0c4] hover:bg-[#7aa0b0] text-white',
    purple: 'bg-[#8b7fa8] hover:bg-[#7a6e97] text-white'
  }

  const selectedVariant = variants[variant] || variants.ghost
  const selectedColor = colorStyles[color] || ''

  if (variant === 'emergency' || variant === 'info') {
    return (
      <button onClick={onClick} className={`${selectedVariant} ${selectedColor} ${className}`}>
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          {Icon && <Icon className="w-8 h-8" />}
        </div>
        <h3 className="text-white m-0">{title}</h3>
        {description && <p className="text-white/90 text-sm m-0">{description}</p>}
        {footer && <span className="text-white/80 text-sm mt-2">{footer}</span>}
      </button>
    )
  }

  if (variant === 'primary') {
    return (
      <button onClick={onClick} className={`${selectedVariant} ${selectedColor} ${className}`}>
        {Icon && <Icon className="w-5 h-5" />}
        <span>{title}</span>
      </button>
    )
  }

  // Default / Ghost variant
  return (
    <button onClick={onClick} className={`${selectedVariant} ${className}`}>
      {Icon && <Icon className="w-4 h-4" />}
      <span className="text-sm">{title || 'Botón'}</span>
    </button>
  )
}
