import React from 'react'
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  const nektraUrl = "https://nektrap.vercel.app/dashboard/inicio?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAR9m3VleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAacjm2QMK4zjhIVaW7BoTJ4TihgZgbPfCJ0VjEx4sxUoBAmCYtLf8SCu_OR9Cg_aem_8-PrVev_UDpqyeaogN10Sg";

  return (
    <footer className="bg-[#1e1b22] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Sobre Zephira</h4>
            <p className="text-sm leading-relaxed">
              Un espacio seguro y confidencial dedicado a brindar apoyo, recursos y acompañamiento a víctimas de violencia de género.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Emergencias</h4>
            <div className="space-y-2">
              <p className="text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                Línea Nacional: 123 (24/7)
              </p>
              <p className="text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                Chat Seguro en línea
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Privacidad</h4>
            <p className="text-sm leading-relaxed">
              Tu seguridad es nuestra prioridad. No almacenamos historiales de navegación ni datos personales identificables.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Desarrollado por</h4>
            <a 
              href={nektraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#8b7fa8]/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-black tracking-tighter text-white group-hover:text-[#8b7fa8] transition-colors">
                  NEKTRA
                </span>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-all" />
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover:text-gray-400">
                Innovación Social
              </p>
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Zephira — Aquí estamos para ti.
          </p>
          <div className="flex gap-6 text-[11px] uppercase tracking-widest font-bold">
            <span className="hover:text-white cursor-help transition-colors">Privacidad</span>
            <span className="hover:text-white cursor-help transition-colors">Ayuda</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
