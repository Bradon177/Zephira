"use client";

import React from 'react'
import { LogOut, MessageCircle, MapPin, Info, BookOpen, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const handleQuickExit = () => {
    window.open('https://www.google.com', '_blank', 'noopener,noreferrer');
    const event = new CustomEvent('zephira-panic', { detail: 'trigger-panic' });
    window.dispatchEvent(event);
  };

  const navLinks = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Chat', href: '/chat', icon: MessageCircle },
    { name: 'Ayuda', href: '/ayuda-cercana', icon: MapPin },
    { name: 'Info', href: '/informacion', icon: BookOpen },
    { name: 'Sistema', href: '/informacion-sistema', icon: Info },
  ];

  return (
    <>
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          {/* Logo - Siempre a la izquierda */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="Zephira Logo" 
              className="h-10 md:h-11 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Navigation - Centrada y minimalista */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                    isActive ? 'text-[#8b7fa8]' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#8b7fa8] rounded-full animate-in fade-in zoom-in duration-500" />
                  )}
                </Link>
              );
            })}
          </nav>
          
          {/* Botón Salir Rápido - Siempre visible a la derecha */}
          <button 
            onClick={handleQuickExit}
            className="group flex items-center gap-2 px-4 md:px-6 py-2.5 bg-[#d97373] hover:bg-[#c96565] text-white rounded-full font-black text-[10px] md:text-xs tracking-widest transition-all shadow-lg shadow-red-100 active:scale-95 animate-pulse hover:animate-none"
          >
            <LogOut className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>SALIR RÁPIDO</span>
          </button>
        </div>
      </header>

      {/* Floating Bottom Navigation - Solo para móviles */}
      <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="bg-white/90 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-2 flex items-center justify-around">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-2xl transition-all duration-500 ${
                  isActive 
                    ? 'bg-[#8b7fa8] text-white shadow-lg shadow-[#8b7fa8]/30 scale-110 -translate-y-1' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
                {isActive && (
                  <span className="absolute -bottom-6 text-[8px] font-black uppercase tracking-tighter text-[#8b7fa8] animate-in slide-in-from-top-2 duration-300">
                    {link.name}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  )
}
