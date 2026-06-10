"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Search, Shield } from 'lucide-react';
import LocationCard from '../ui/LocationCard';
import { locations } from '../../lib/locations';

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
      
      <main className="flex-1 flex flex-col min-h-0 pb-24 md:pb-0">
        <div className="bg-white border-b border-gray-100 px-4 md:px-8 py-3 md:py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#8b7fa8]/10 rounded-lg">
                <MapPin className="w-5 h-5 text-[#8b7fa8]" />
              </div>
              <h1 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">Ayuda Cercana</h1>
            </div>
            
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Buscar fiscalía, policía o ICBF..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-transparent focus:border-[#8b7fa8]/20 focus:bg-white rounded-xl text-[11px] md:text-xs text-black transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row min-h-0">
          {/* Panel Izquierdo - Lista Simplificada */}
          <div className="w-full md:w-[350px] h-[35vh] md:h-auto flex flex-col border-b md:border-b-0 md:border-r border-gray-100 bg-white z-10">
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {filteredLocations.map((loc) => (
                <LocationCard 
                  key={loc.id}
                  location={loc}
                  isSelected={selectedLocation.id === loc.id}
                  onClick={(location) => {
                    setSelectedLocation(location);
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
          <div id="map-viewport" className="flex-1 relative bg-[#f0f2f5] h-[55vh] md:h-auto min-h-[350px] md:min-h-[500px]">
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
            
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 w-[calc(100%-2rem)] md:w-auto">
              <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-xl max-w-xs mx-auto md:mx-0">
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
