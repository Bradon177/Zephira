"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../ui/card';
import FeatureSection from '../ui/FeatureSection';
import LocationCard from '../ui/LocationCard';
import { 
  Shield, 
  Zap, 
  MessageCircle, 
  Map as MapIcon, 
  Lock, 
  Eye, 
  Code2, 
  Cpu, 
  Smartphone,
  Info,
  Server,
  Hand,
  Search,
  Send,
  AlertTriangle
} from 'lucide-react';

export default function SistemaDocPage() {
  return (
    <div className="min-h-screen bg-[#faf9fb] flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-12">
        {/* Encabezado de Documentación */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8b7fa8]/10 rounded-full text-[#8b7fa8] text-xs font-bold uppercase tracking-widest mb-6">
            <Info className="w-4 h-4" />
            Guía del Sistema
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Descubre <span className="text-[#8b7fa8]">Zephira</span>
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Entiende cómo cada ventana y módulo del sistema está diseñado para brindarte seguridad, información y apoyo en tiempo real.
          </p>
        </div>

        {/* Sección 1: El Chat Inteligente */}
        <FeatureSection 
          title="Chat de Apoyo"
          description="Una ventana de comunicación segura donde puedes hablar libremente. La inteligencia artificial está entrenada para escucharte, brindarte guías de actuación y acompañarte sin juicios."
          icon={MessageCircle}
          url="chat"
          features={["Privacidad absoluta", "Respuesta inmediata", "Sesiones anónimas", "Guías de seguridad"]}
          previewContent={
            <div className="p-4 space-y-4">
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm max-w-[80%]">
                  <p className="text-[10px] text-slate-600">Hola, soy Zephira. Estoy aquí para escucharte y apoyarte. ¿Cómo te sientes hoy?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#8b7fa8] p-3 rounded-2xl rounded-tr-none text-white shadow-md max-w-[80%]">
                  <p className="text-[10px]">Necesito información sobre qué hacer en caso de emergencia.</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-full border border-gray-100 p-2 flex items-center gap-2 shadow-lg">
                <div className="flex-1 px-3 text-[10px] text-slate-400">Escribe tu mensaje...</div>
                <div className="w-8 h-8 bg-[#8b7fa8] rounded-full flex items-center justify-center text-white">
                  <Send className="w-4 h-4" />
                </div>
              </div>
            </div>
          }
        />

        {/* Sección 2: Ayuda Cercana */}
        <FeatureSection 
          title="Ayuda Cercana"
          description="Un localizador dinámico de instituciones de apoyo. Encuentra fiscalías, estaciones de policía y centros del ICBF cercanos a tu ubicación actual para recibir atención presencial."
          icon={MapIcon}
          url="ayuda-cercana"
          reversed={true}
          features={["Mapas interactivos", "Información de contacto", "Filtros rápidos", "Sin rastreo de GPS"]}
          previewContent={
            <div className="flex h-full">
              <div className="w-1/3 bg-white border-r border-gray-100 p-2 space-y-2">
                <div className="p-2 bg-[#8b7fa8]/5 rounded-lg border border-[#8b7fa8]/20">
                  <div className="w-8 h-2 bg-[#8b7fa8]/30 rounded-full mb-1" />
                  <div className="w-full h-3 bg-[#8b7fa8]/10 rounded-sm" />
                </div>
                <div className="p-2 bg-slate-50 rounded-lg border border-transparent">
                  <div className="w-8 h-2 bg-slate-200 rounded-full mb-1" />
                  <div className="w-full h-3 bg-slate-100 rounded-sm" />
                </div>
              </div>
              <div className="flex-1 bg-slate-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapIcon className="w-12 h-12 text-slate-400 opacity-20" />
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded-lg shadow-xl max-w-[120px]">
                  <div className="w-full h-2 bg-slate-200 rounded-full mb-1" />
                  <div className="w-2/3 h-1.5 bg-slate-100 rounded-full" />
                </div>
              </div>
            </div>
          }
        />

        {/* Sección 3: Educación e Información */}
        <FeatureSection 
          title="Centro de Aprendizaje"
          description="Información detallada para identificar los diferentes tipos de violencia. Aprender a reconocer las señales de alerta es el primer paso fundamental para la prevención y la búsqueda de ayuda."
          icon={Hand}
          url="informacion"
          features={["Tipos de violencia", "Señales de alerta", "Contenido educativo", "Diseño visual claro"]}
          previewContent={
            <div className="p-6 grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
                <Hand className="w-6 h-6 text-rose-500 mb-2" />
                <div className="w-full h-2 bg-slate-100 rounded-full mb-1" />
                <div className="w-2/3 h-2 bg-slate-50 rounded-full" />
              </div>
              <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
                <AlertTriangle className="w-6 h-6 text-amber-500 mb-2" />
                <div className="w-full h-2 bg-slate-100 rounded-full mb-1" />
                <div className="w-2/3 h-2 bg-slate-50 rounded-full" />
              </div>
              <div className="col-span-2 bg-[#8b7fa8]/5 p-4 rounded-3xl border border-[#8b7fa8]/10">
                <div className="w-1/3 h-3 bg-[#8b7fa8]/20 rounded-full mb-3" />
                <div className="space-y-2">
                  <div className="w-full h-1.5 bg-[#8b7fa8]/5 rounded-full" />
                  <div className="w-full h-1.5 bg-[#8b7fa8]/5 rounded-full" />
                  <div className="w-full h-1.5 bg-[#8b7fa8]/5 rounded-full" />
                </div>
              </div>
            </div>
          }
        />

        {/* Protocolos de Seguridad (Resumen Técnico) */}
        <section className="mt-32">
          <h2 className="text-3xl font-black text-slate-800 mb-12 flex items-center gap-4">
            <div className="p-2 bg-[#d97373]/10 rounded-xl">
              <Shield className="w-6 h-6 text-[#d97373]" />
            </div>
            Protocolos de Seguridad Activa
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1e1b22] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d97373]/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
              <Zap className="w-10 h-10 text-[#d97373] mb-6" />
              <h4 className="text-xl font-black mb-4">Modo Pánico Inmediato</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Presionando el botón <strong>SALIR RÁPIDO</strong> o la tecla <strong>ESC</strong>, el sistema oculta todo el contenido real y abre Google.com en una nueva pestaña.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold border border-white/10 uppercase tracking-widest">Tecla ESC</span>
                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold border border-white/10 uppercase tracking-widest">Auto-Mimicry</span>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8b7fa8]/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
              <Eye className="w-10 h-10 text-[#8b7fa8] mb-6" />
              <h4 className="text-xl font-black text-slate-900 mb-4">Privacidad Zero-Knowledge</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                No almacenamos historiales, cookies persistentes ni direcciones IP vinculadas a la actividad. Cada sesión es única y desaparece al cerrar la ventana.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold border border-slate-100 uppercase tracking-widest text-[#8b7fa8]">No Logs</span>
                <span className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold border border-slate-100 uppercase tracking-widest text-[#8b7fa8]">Encrypted</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Marca Final */}
        <section className="mt-32 bg-[#faf9fb] border-2 border-dashed border-[#8b7fa8]/20 rounded-[4rem] p-12 text-center">
          <img src="/logo.png" alt="Zephira Logo" className="h-16 mx-auto mb-8 object-contain" />
          <h2 className="text-2xl font-black text-slate-900 mb-4">Innovación al Servicio de la Vida</h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Zephira no es solo software, es un compromiso con la seguridad y el apoyo social desarrollado por <strong>Nektra</strong>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
