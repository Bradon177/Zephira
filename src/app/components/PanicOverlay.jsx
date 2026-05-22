"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function PanicOverlay() {
  const [isActive, setIsActive] = useState(false);
  const lastClickTime = useRef(0);

  const handleInteraction = (e) => {
    const currentTime = new Date().getTime();
    const gap = currentTime - lastClickTime.current;

    if (gap > 0 && gap < 300) {
      // Es un doble clic/toque
      setIsActive(false);
    }
    lastClickTime.current = currentTime;
  };

  useEffect(() => {
    const handlePanic = (e) => {
      if (e.detail === 'trigger-panic' || e.key === 'Escape') {
        setIsActive(true);
        // Opcional: Si es por teclado, también abrir la pestaña
        if (e.key === 'Escape') {
          window.open('https://www.google.com', '_blank', 'noopener,noreferrer');
        }
      }
    };

    window.addEventListener('zephira-panic', handlePanic);
    window.addEventListener('keydown', handlePanic);
    return () => {
      window.removeEventListener('zephira-panic', handlePanic);
      window.removeEventListener('keydown', handlePanic);
    };
  }, []);

  if (!isActive) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-white overflow-y-auto cursor-default select-none"
      style={{ touchAction: 'manipulation' }}
      onClick={handleInteraction}
    >
      {/* Contenido falso: Buscador de Google simulado o algo similar */}
      <div className="max-w-3xl mx-auto pt-20 px-6 font-sans">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-6xl font-bold text-gray-200 select-none">Google</h1>
          <div className="w-full max-w-xl bg-white border border-gray-200 rounded-full py-3 px-6 shadow-sm flex items-center gap-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <div className="w-full h-5 bg-gray-50 rounded animate-pulse" />
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded border border-gray-100">Buscar con Google</div>
            <div className="px-4 py-2 bg-gray-50 text-gray-600 text-sm rounded border border-gray-100">Voy a tener suerte</div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-50 select-none">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="space-y-3">
              <div className="h-4 bg-gray-100 rounded w-3/4" />
              <div className="h-3 bg-gray-50 rounded w-full" />
              <div className="h-3 bg-gray-50 rounded w-5/6" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicador invisible o muy sutil para el desarrollador/usuario que sabe qué pasa */}
      <div className="fixed bottom-4 right-4 text-[10px] text-gray-100 select-none">
        Safe Mode Active
      </div>
    </div>
  );
}
