"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Search, Shield } from 'lucide-react';
import LocationCard from '../ui/LocationCard';

const locations = [
  {
    id: 1,
    name: "Fiscalía General de la Nación",
    address: "Calle 11 No, 34 – 36 Barrio Buenos Aires",
    phone: "01 8000 919740",
    hours: "24 Horas",
    type: "Fiscalía",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586.9380873221432!2d-73.35716271003074!3d8.25961846664364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e677b9d7ef06dc1%3A0xf4c1c5a417cb59c0!2sFiscal%C3%ADa%20General%20de%20la%20Naci%C3%B3n!5e0!3m2!1ses-419!2sco!4v1780065399053!5m2!1ses-419!2sco"
  },
  {
    id: 2,
    name: "Policía Nacional - Estación Ocaña",
    address: "Carrera 12 # 10-45, Ocaña",
    phone: "123",
    hours: "24 Horas",
    type: "Seguridad",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.1065611214052!2d-73.35918817056518!3d8.260300618715336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e677b9d55a63311%3A0xad11c4d34ede26f9!2sEstacion%20De%20Policia%20De%20Oca%C3%B1a!5e0!3m2!1ses-419!2sco!4v1780084795878!5m2!1ses-419!2sco" 
  },
  {
    id: 3,
    name: "CENTRO DE CONVIVENCIA CIUDADANA",
    address: "Calle 7, Av. Francisco Fernandez de Contreras #29 183, Ocaña, Norte de Santander",
    type: "Seguridad",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.267565784516!2d-73.3598607803048!3d8.2543443583893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e677b6c56ac2b13%3A0x7f5352bae9c3588b!2sCENTRO%20DE%20CONVIVENCIA%20CIUDADANA!5e0!3m2!1ses-419!2sco!4v1780085454841!5m2!1ses-419!2sco"
  },
  {
    id: 4,
    name: "Centro Zonal Ocaña ICBF- Bienestar Familiar",
    address: "Cl. 8, Ocaña, Norte de Santander",
    hours: "24 Horas",
    type: "ICBF",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.1468985795677!2d-73.35656065373473!3d8.244157332289584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e677b92299e50cb%3A0x2118e58214e8cff6!2sCentro%20Zonal%20Oca%C3%B1a%20ICBF!5e0!3m2!1ses-419!2sco!4v1780086710912!5m2!1ses-419!2sco",
  }
];

export default function AyudaCercanaPage() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = locations.filter(loc => 
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#faf9fb] flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 flex flex-col min-h-0">
        <div className="bg-white border-b border-gray-100 px-4 md:px-8 py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#8b7fa8]/10 rounded-lg">
                <MapPin className="w-5 h-5 text-[#8b7fa8]" />
              </div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">Ayuda Cercana</h1>
            </div>
            
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Buscar fiscalía, policía o ICBF..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-transparent focus:border-[#8b7fa8]/20 focus:bg-white rounded-xl text-xs text-black transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row min-h-0 md:min-h-[600px]">
          {/* Panel Izquierdo - Lista Simplificada */}
          <div className="w-full md:w-[350px] h-[40vh] md:h-auto flex flex-col border-b md:border-b-0 md:border-r border-gray-100 bg-white z-10">
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {filteredLocations.map((loc) => (
                <LocationCard 
                  key={loc.id}
                  location={loc}
                  isSelected={selectedLocation.id === loc.id}
                  onClick={(location) => {
                    setSelectedLocation(location);
                    // En móviles, hacer scroll suave hasta el mapa al seleccionar
                    if (window.innerWidth < 768) {
                      document.getElementById('map-viewport')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                />
              ))}
              {filteredLocations.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-400 text-sm">No se encontraron resultados.</p>
                </div>
              )}
            </div>
          </div>

          {/* Área del Mapa - Maximizado */}
          <div id="map-viewport" className="flex-1 relative bg-[#f0f2f5] h-[60vh] md:h-auto min-h-[400px] md:min-h-[500px]">
            <iframe 
              src={selectedLocation.embedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de ${selectedLocation.name}`}
            ></iframe>
            
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-xl max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Información del punto</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{selectedLocation.name}</h4>
                <p className="text-[11px] text-slate-500 leading-tight mb-2">{selectedLocation.address}</p>
                <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
                  {selectedLocation.phone && (
                    <span className="text-[10px] font-bold text-[#8b7fa8]">{selectedLocation.phone}</span>
                  )}
                  <Shield className="w-3 h-3 text-slate-300 ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
