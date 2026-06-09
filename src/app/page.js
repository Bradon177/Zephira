"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Button from "./ui/button";
import Card from "./ui/card";
import Footer from "./components/Footer";
import Link from "next/link";
import EmergencyModal from "./components/EmergencyModal";
import { Shield, LogOut, Phone, MessageCircle, BookOpen, ChevronRight, MapPin, Lock, Heart, Users, AlertCircle } from "lucide-react";

export default function Home() {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  const handleEmergencyCall = () => {
    window.location.href = "tel:123";
    setIsEmergencyModalOpen(false);
  };

  return (
       <div className="min-h-screen bg-[#faf9fb]">
      {/* Header minimalista con salida rápida */}
      <Header />

      {/* Panel de Ayuda Inmediata - LO PRIMERO Y MÁS VISIBLE */}
      <section className="bg-white border-b border-gray-100/80">
        <div className="max-w-4xl mx-auto px-6 py-10 md:py-16">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="mb-4 text-slate-900 text-2xl md:text-4xl font-bold tracking-tight">¿Necesitas ayuda ahora?</h1>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Si estás en peligro o necesitas hablar con alguien de inmediato, estamos aquí para ti. Usa uno de estos botones seguros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {/* Card de Emergencia Centrada */}
            <Card 
              variant="emergency"
              color="red"
              icon={Phone}
              title="Llamar Emergencia" 
              description="Si estás en peligro inmediato, usa esta línea disponible 24/7"
              centered={true}
              className="h-full"
              onClick={() => setIsEmergencyModalOpen(true)}
            >
              <Button 
                variant="primary"
                color="red"
                title="Llamar al 123"
                className="mt-4 bg-white !text-[#b91c1c] hover:bg-[#fef2f2] hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-300 w-full"
              />
            </Card>

            {/* Card de Chat Centrada */}
            <Card 
              variant="emergency"
              color="blue"
              icon={MessageCircle}
              title="Chat Anónimo" 
              description="Habla con un consejero en privado de forma totalmente confidencial"
              centered={true}
              className="h-full"
            >
              <Link href="/chat" className="block w-full">
                <Button 
                  variant="primary"
                  color="blue"
                  title="Iniciar Chat"
                  className="mt-4 bg-white !text-[#88b0c4]  hover:bg-[#f2f9ff] hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-300 w-full"
                />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección "¿No es una emergencia?" */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 pb-32 lg:pb-20">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="mb-4 text-slate-900 text-xl md:text-3xl font-bold">Si no es una emergencia</h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explora nuestros recursos, encuentra información o lee sobre cómo podemos acompañarte en este proceso.
          </p>
        </div>

        {/* Opciones claras y directas usando el componente Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto place-items-center">
          {/* Opción 1: Recursos */}
          <Card 
            color="purple"
            icon={BookOpen}
            title="Aprender sobre violencia"
            description="Información, señales de alerta y guías educativas"
            footer="Ver recursos"
        onClick={() => window.location.href = '/informacion'}
          />

          {/* Opción 2: Directorio */}
          <Card 
            color="lightBlue"
            icon={MapPin}
            title="Buscar ayuda cercana"
            description="centros de apoyo en tu área"
            footer="Ver mapa"
            onClick={() => window.location.href = '/ayuda-cercana'}
          />        
        </div>
      </section>

    

      {/* Footer simple */}
      <Footer />
      
      <EmergencyModal 
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        onConfirm={handleEmergencyCall}
      />
    </div>
  );
}
