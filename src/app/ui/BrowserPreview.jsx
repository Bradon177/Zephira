"use client";

import React from 'react';
import { Globe, Shield, Lock } from 'lucide-react';

export default function BrowserPreview({ url, children, title = "Zephira Platform" }) {
  return (
    <div className="w-full bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden group transition-all duration-500 hover:shadow-[#8b7fa8]/10">
      {/* Barra de Navegación del Navegador Falso */}
      <div className="bg-slate-50 border-b border-gray-100 p-4 flex items-center gap-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        
        <div className="flex-1 bg-white border border-gray-200 rounded-lg py-1.5 px-4 flex items-center gap-2 shadow-sm">
          <Lock className="w-3 h-3 text-emerald-500" />
          <span className="text-[10px] text-slate-400 font-medium truncate">https://zephira.app/{url}</span>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <Globe className="w-4 h-4 text-slate-300" />
          <div className="w-8 h-8 rounded-full bg-slate-200" />
        </div>
      </div>

      {/* Contenido de la Ventana */}
      <div className="relative aspect-video md:aspect-[16/10] overflow-y-auto bg-[#faf9fb] custom-scrollbar">
        {children}
        
        {/* Overlay sutil para indicar que es una preview */}
        <div className="absolute inset-0 bg-[#8b7fa8]/0 group-hover:bg-[#8b7fa8]/5 pointer-events-none transition-colors duration-500" />
      </div>
    </div>
  );
}
