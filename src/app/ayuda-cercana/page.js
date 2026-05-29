"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Clock, ExternalLink, Shield } from 'lucide-react';

export default function AyudaCercanaPage() {
  // Datos de prueba: Fiscalía General de la Nación (Bogotá - Bunker)
  const locations = [
    {
      id: 1,
      name: "Fiscalía General de la Nación - Búnker",
      address: "Diagonal 22B No. 52-01, Bogotá, Colombia",
      phone: "01 8000 919740",
      hours: "24 Horas",
      type: "Fiscalía",
      lat: 4.6468,
      lng: -74.1022
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fb] flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Centros de Ayuda Cercanos</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Encuentra los puntos de atención legal y de seguridad más cercanos a tu ubicación. 
            Esta es una versión de prueba con datos de la Fiscalía General de la Nación.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Panel Lateral - Lista de Lugares */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#8b7fa8]" />
              Puntos Identificados
            </h2>
            
            {locations.map((loc) => (
              <div 
                key={loc.id}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 bg-[#8b7fa8]/10 text-[#8b7fa8] text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {loc.type}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#8b7fa8] transition-colors">
                  {loc.name}
                </h3>
                <div className="space-y-2 text-sm text-slate-500">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#8b7fa8]" />
                    {loc.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#8b7fa8]" />
                    {loc.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#8b7fa8]" />
                    {loc.hours}
                  </p>
                </div>
                <button className="mt-6 w-full py-3 bg-[#faf9fb] hover:bg-[#8b7fa8] hover:text-white text-slate-600 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Cómo llegar
                </button>
              </div>
            ))}
          </div>

          {/* Área del Mapa */}
          <div className="lg:col-span-2 min-h-[500px] bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden relative">
            {/* 
              Utilizaremos un iframe de OpenStreetMap para esta prueba gratuita 
              sin necesidad de configurar Leaflet o Google Maps API keys de inmediato.
            */}
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0" 
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-74.1122,4.6368,-74.0922,4.6568&layer=mapnik&marker=4.6468,-74.1022`}
              style={{ border: 0 }}
              title="Mapa de Ubicación"
            ></iframe>
            
            {/* Overlay informativo sobre el mapa */}
            <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl md:max-w-xs">
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                <span className="text-[#8b7fa8] font-bold">Nota de Seguridad:</span> Tu ubicación actual no se comparte con terceros. El mapa se carga de forma anónima a través de OpenStreetMap.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
