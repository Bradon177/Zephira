"use client";

import React from 'react';
import { MapPin, Phone, ExternalLink, Map } from 'lucide-react';
import Link from 'next/link';

export default function ChatLocationCard({ location }) {
  const { name, address, phone, type } = location;

  // Estilos por tipo
  const typeStyles = {
    'Fiscalía': 'bg-rose-50 text-rose-600 border-rose-100',
    'Seguridad': 'bg-indigo-50 text-indigo-600 border-indigo-100',
    'ICBF': 'bg-emerald-50 text-emerald-700 border-emerald-100',
    'default': 'bg-slate-50 text-slate-600 border-slate-100'
  };

  const currentStyle = typeStyles[type] || typeStyles.default;

  return (
    <div className="mt-3 bg-slate-50 rounded-xl border border-slate-200 p-3 shadow-sm w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border ${currentStyle}`}>
          {type}
        </span>
      </div>
      
      <h4 className="font-bold text-slate-900 text-sm mb-1">{name}</h4>
      
      <p className="text-[11px] text-slate-600 flex items-start gap-1 mb-2">
        <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
        {address}
      </p>
      
      <div className="flex items-center gap-2 mt-2">
        {phone && (
          <a 
            href={`tel:${phone}`}
            className="flex items-center gap-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <Phone className="w-3 h-3" />
            {phone}
          </a>
        )}
        
        <Link 
          href="/ayuda-cercana"
          className="flex items-center gap-1 px-2 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-medium text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <Map className="w-3 h-3" />
          Ver en mapa
        </Link>
      </div>
    </div>
  );
}
