"use client";

import React from 'react'
import { LogOut, Zap } from "lucide-react";
import Button from "../ui/button";
import Link from "next/link";

export default function Header() {
  const handleQuickExit = () => {
    // Abrir una nueva ventana con contenido neutral (ej: Google o Noticias)
    window.open('https://www.google.com', '_blank', 'noopener,noreferrer');
    
    // Disparar el evento de pánico para activar el PanicOverlay en la ventana actual
    const event = new CustomEvent('zephira-panic', { detail: 'trigger-panic' });
    window.dispatchEvent(event);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src="/logo.png" 
              alt="Zephira Logo" 
              className="h-12 w-auto object-contain" 
            />
          </Link>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handleQuickExit}
              className="group flex items-center gap-2 px-5 py-2.5 bg-[#d97373] hover:bg-[#c96565] text-white rounded-full font-bold text-sm transition-all shadow-lg shadow-red-200 active:scale-95 animate-pulse hover:animate-none"
            >
              <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>SALIR RÁPIDO</span>
              <div className="hidden md:block ml-2 px-2 py-0.5 bg-white/20 rounded text-[10px] font-medium uppercase">Esc</div>
            </button>
          </div>
        </div>
      </header>
  )
}
