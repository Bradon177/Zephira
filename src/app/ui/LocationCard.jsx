"use client";

import React from 'react';
import { MapPin, Phone } from 'lucide-react';

export default function LocationCard({ 
  location, 
  isSelected, 
  onClick 
}) {
  const { name, address, phone, type } = location;

  // Configuración de estilos por tipo
  const typeStyles = {
    'Fiscalía': 'bg-rose-50 text-rose-500 border-rose-100',
    'Seguridad': 'bg-indigo-50 text-indigo-500 border-indigo-100',
    'ICBF': 'bg-emerald-50 text-emerald-600 border-emerald-100',
    'default': 'bg-slate-50 text-slate-500 border-slate-100'
  };

  const currentTypeStyle = typeStyles[type] || typeStyles.default;

  return (
    <button 
      onClick={() => onClick(location)}
      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
        isSelected 
          ? 'bg-[#8b7fa8]/5 border-[#8b7fa8]/20 shadow-sm' 
          : 'bg-white border-transparent hover:bg-slate-50'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider border ${currentTypeStyle}`}>
          {type}
        </span>
        {isSelected && <div className="w-1.5 h-1.5 bg-[#8b7fa8] rounded-full" />}
      </div>
      
      <h3 className={`font-bold text-sm mb-2 ${
        isSelected ? 'text-[#8b7fa8]' : 'text-slate-700'
      }`}>
        {name}
      </h3>
      
      <div className="space-y-1.5">
        <p className="text-[11px] text-slate-500 flex items-start gap-2 leading-relaxed">
          <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
          {address}
        </p>
        {phone && (
          <p className="text-[11px] text-slate-400 flex items-center gap-2">
            <Phone className="w-3 h-3 shrink-0" />
            {phone}
          </p>
        )}
      </div>
    </button>
  );
}
