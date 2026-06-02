"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  History, 
  Database, 
  UserCheck,
  Zap,
  ShieldAlert
} from 'lucide-react';

export default function PrivacidadPage() {
  const privacyPoints = [
    {
      icon: EyeOff,
      title: "Navegación Anónima",
      description: "No utilizamos cookies de rastreo ni herramientas de análisis que identifiquen tu comportamiento personal. Tu visita es invisible para nosotros."
    },
    {
      icon: History,
      title: "Sin Historial Local",
      description: "La plataforma está diseñada para no dejar rastro en el historial de tu navegador una vez que activas el Modo de Salida Rápida."
    },
    {
      icon: Database,
      title: "Cero Almacenamiento",
      description: "No guardamos bases de datos con tus conversaciones. Cada sesión de chat es efímera y se destruye al cerrar la pestaña."
    },
    {
      icon: Lock,
      title: "Encriptación de Extremo a Extremo",
      description: "Toda la comunicación entre tú y nuestra IA viaja a través de canales cifrados de alta seguridad (SSL/TLS)."
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fb] flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 md:px-8 py-16">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-600 text-xs font-black uppercase tracking-widest mb-6 border border-emerald-100">
            <ShieldCheck className="w-4 h-4" />
            Privacidad Garantizada
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Tu seguridad es nuestra <span className="text-[#8b7fa8]">prioridad absoluta</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            En Zephira, la privacidad no es una opción, es la base de todo lo que construimos. Aquí te explicamos cómo protegemos tu identidad.
          </p>
        </div>

        {/* Cuadrícula de Puntos Clave */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {privacyPoints.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#8b7fa8]/5 transition-all duration-500 group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8b7fa8] transition-colors duration-500">
                <point.icon className="w-7 h-7 text-[#8b7fa8] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{point.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sección Detallada: Cómo manejamos tus datos */}
        <div className="bg-[#1e1b22] rounded-[3.5rem] p-10 md:p-16 text-white mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8b7fa8]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
              <UserCheck className="w-8 h-8 text-[#8b7fa8]" />
              Compromiso de No-Rastreo
            </h2>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 font-black text-[#8b7fa8]">01</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Identificadores Personales</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    No solicitamos nombres, correos electrónicos, números de teléfono ni ninguna información que pueda vincular tu actividad en la plataforma con tu identidad real en el mundo físico.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 font-black text-[#8b7fa8]">02</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Ubicación y GPS</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    En el módulo de "Ayuda Cercana", no accedemos a tu GPS de forma automática. Tú decides qué dirección buscar, y esa consulta se realiza de forma anónima directamente con los proveedores de mapas.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 font-black text-[#8b7fa8]">03</div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Terceros y Autoridades</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Zephira no comparte datos con ninguna entidad gubernamental ni comercial de forma automática. Tú eres la única persona que decide cuándo y cómo contactar a las autoridades a través de la información que proporcionamos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aviso de Seguridad Final */}
        <div className="bg-rose-50 border-2 border-dashed border-rose-100 rounded-[3rem] p-10 text-center">
          <ShieldAlert className="w-12 h-12 text-rose-500 mx-auto mb-6" />
          <h3 className="text-xl font-black text-rose-900 mb-4">Aviso de Seguridad Crítica</h3>
          <p className="text-rose-700/70 max-w-2xl mx-auto text-sm leading-relaxed">
            Aunque nuestra plataforma es segura, te recordamos siempre utilizar el botón <strong>SALIR RÁPIDO</strong> si sientes que alguien está vigilando tu pantalla. La prevención es la herramienta más fuerte.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
