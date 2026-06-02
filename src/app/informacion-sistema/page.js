"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../ui/card';
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
  Server
} from 'lucide-react';

export default function SistemaDocPage() {
  return (
    <div className="min-h-screen bg-[#faf9fb] flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-12">
        {/* Encabezado de Documentación */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8b7fa8]/10 rounded-full text-[#8b7fa8] text-xs font-bold uppercase tracking-widest mb-6">
            <Info className="w-4 h-4" />
            Documentación Técnica
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Arquitectura de <span className="text-[#8b7fa8]">Zephira</span>
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Explora el funcionamiento interno, los protocolos de seguridad y la infraestructura tecnológica de la plataforma diseñada para el apoyo social y la protección ciudadana.
          </p>
        </div>

        {/* Pilares del Sistema */}
        <section className="mb-20">
          <h2 className="text-2xl font-black text-slate-800 mb-10 flex items-center gap-3">
            <div className="w-2 h-8 bg-[#8b7fa8] rounded-full" />
            Pilares Fundamentales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card color="purple" icon={Shield} title="Seguridad Crítica" description="Sistemas de escape inmediato y ocultamiento de interfaz ante situaciones de riesgo.">
              <Card.Content>
                <ul className="text-xs text-slate-500 space-y-2 mt-2">
                  <li>• Panic Button (Esc Key)</li>
                  <li>• Safe Mode (Google Mimicry)</li>
                  <li>• Doble Tap Restoration</li>
                </ul>
              </Card.Content>
            </Card>
            <Card color="blue" icon={Lock} title="Privacidad Total" description="Arquitectura Zero-Knowledge que garantiza el anonimato absoluto de las víctimas.">
              <Card.Content>
                <ul className="text-xs text-slate-500 space-y-2 mt-2">
                  <li>• No-Logs Policy</li>
                  <li>• Sesiones efímeras</li>
                  <li>• Encriptación End-to-End</li>
                </ul>
              </Card.Content>
            </Card>
            <Card color="red" icon={Zap} title="Respuesta Inmediata" description="Conexión directa con autoridades y canales de apoyo en tiempo real.">
              <Card.Content>
                <ul className="text-xs text-slate-500 space-y-2 mt-2">
                  <li>• Chat n8n Automatizado</li>
                  <li>• Geocalización de Fiscalía</li>
                  <li>• Acceso 24/7</li>
                </ul>
              </Card.Content>
            </Card>
          </div>
        </section>

        {/* Detalles Técnicos */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
              <Code2 className="w-7 h-7 text-[#8b7fa8]" />
              Stack Tecnológico
            </h2>
            
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-slate-600">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Framework & Frontend</h4>
                  <p className="text-sm text-slate-500 mt-1">Construido sobre Next.js (App Router) para máxima velocidad y SEO optimizado. Estilado con Tailwind CSS 4 para una UI ligera y responsiva.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-slate-600">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Backend & IA</h4>
                  <p className="text-sm text-slate-500 mt-1">Integración con n8n para flujos de trabajo inteligentes y procesamiento de lenguaje natural en el chat de apoyo.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-2xl text-slate-600">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">UX Adaptativo</h4>
                  <p className="text-sm text-slate-500 mt-1">Diseño Mobile-First con optimización de gestos táctiles (touch-action) para sistemas de seguridad en smartphones.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3">
              <Eye className="w-7 h-7 text-[#8b7fa8]" />
              Sistemas de Seguridad
            </h2>
            
            <div className="bg-[#1e1b22] p-8 rounded-[2.5rem] text-white shadow-2xl space-y-6">
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-[#8b7fa8] mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Modo Pánico
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Al activar la tecla <code>Escape</code> o el botón de <code>Salir Rápido</code>, el sistema dispara un evento global <code>zephira-panic</code>. Esto oculta instantáneamente el contenido real bajo una interfaz falsa de Google y abre una pestaña neutral.
                </p>
              </div>

              <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-[#8b7fa8] mb-2 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> Flujo del Chat
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Utiliza una arquitectura de sesiones efímeras (Session IDs basados en timestamp) que se limpian automáticamente. Los mensajes se procesan a través de webhooks seguros hacia instancias privadas de n8n.
                </p>
              </div>

              <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
                <h4 className="font-bold text-[#8b7fa8] mb-2 flex items-center gap-2">
                  <MapIcon className="w-4 h-4" /> Geolocalización Segura
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  El sistema de mapas utiliza iframes de Google Maps / OpenStreetMap cargados bajo demanda, asegurando que la ubicación del usuario solo sea procesada por el proveedor del mapa y no almacenada en nuestros servidores.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Marca */}
        <section className="bg-white border border-gray-100 rounded-[3rem] p-10 md:p-16 shadow-sm text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Desarrollado con Propósito</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            Zephira es un proyecto de innovación social creado por **Nektra**, enfocado en utilizar la tecnología como una herramienta de protección y empoderamiento.
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-3 bg-slate-50 rounded-2xl text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-100">
              Open Source
            </div>
            <div className="px-6 py-3 bg-slate-50 rounded-2xl text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-100">
              Social Impact
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
