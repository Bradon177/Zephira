"use client";

import React, { useState, useEffect } from 'react';
import { Phone, X, ShieldAlert } from 'lucide-react';

export default function EmergencyModal({ isOpen, onClose, onConfirm }) {
  const [countdown, setCountdown] = useState(3);
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Pequeño delay para que la animación de entrada se active
      setTimeout(() => setIsAnimating(true), 10);
      setCountdown(3);
    } else {
      setIsAnimating(false);
      // Esperar a que termine la animación de salida (500ms según duration-500)
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    let timer;
    if (isOpen && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (isOpen && countdown === 0) {
      onConfirm();
    }

    return () => clearInterval(timer);
  }, [isOpen, countdown, onConfirm]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop con desenfoque */}
      <div 
        className={`absolute inset-0 bg-[#1e1b22]/80 backdrop-blur-md transition-opacity duration-500 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Contenido del Modal */}
      <div className={`relative bg-white w-full max-w-sm rounded-[3rem] p-8 shadow-2xl border border-gray-100 transition-all duration-500 transform ${
        isAnimating 
          ? 'scale-100 opacity-100 translate-y-0' 
          : 'scale-95 opacity-0 translate-y-8'
      }`}>
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 bg-rose-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="w-10 h-10 text-rose-500 animate-pulse" />
          </div>
          
          <h3 className="text-2xl font-black text-slate-900 mb-2">Llamada de Emergencia</h3>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            Se realizará una llamada a la <strong className="text-rose-500">Línea 123</strong> de forma automática.
          </p>

          <div className="relative w-24 h-24 mx-auto mb-8">
            {/* Círculo de progreso animado */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="44"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-slate-100"
              />
              <circle
                cx="48"
                cy="48"
                r="44"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={276}
                strokeDashoffset={276 - (276 * (3 - countdown)) / 3}
                className="text-rose-500 transition-all duration-1000 ease-linear"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-black text-slate-900">{countdown}</span>
            </div>
          </div>

          <div className="space-y-3">
            <button 
              onClick={onConfirm}
              className="w-full py-4 bg-rose-500 hover:bg-rose-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-rose-200 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Llamar Ahora
            </button>
            <button 
              onClick={onClose}
              className="w-full py-4 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-2xl font-black uppercase tracking-widest text-xs transition-all active:scale-95"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
