"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Lock, MessageCircle } from 'lucide-react';

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-[#faf9fb] flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 flex flex-col min-h-0 relative">
        {/* Barra superior de estado del chat */}
        <div className="mt-2 md:mt-4 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl md:rounded-3xl p-3 md:p-4 shadow-sm flex items-center justify-between z-10 sticky top-0">
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/" className="p-1.5 md:p-2 hover:bg-gray-50 rounded-full transition-all">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
            </Link>
            <div>
              <h2 className="text-slate-900 text-base md:text-lg font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Zephira
              </h2>
              <p className="text-slate-500 text-[10px] md:text-xs flex items-center gap-1">
                <Lock className="w-2.5 h-2.5" /> Privado
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden xs:flex flex-col items-end">
              <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-slate-400">Seguridad</span>
              <span className="text-[10px] md:text-[11px] text-[#8b7fa8] font-medium">Activa</span>
            </div>
            <img 
              src="/logo.png" 
              alt="Zephira Logo" 
              className="h-8 md:h-10 w-auto object-contain" 
            />
          </div>
        </div>

        {/* Iframe de Dify integrado */}
        <div className="flex-1 mt-2 md:mt-4 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
          <iframe
            src="https://udify.app/chatbot/2Py2p7gsyUtr3lt0"
            className="w-full h-full"
            style={{ minHeight: 'calc(100vh - 200px)' }}
            frameBorder="0"
            allow="microphone"
            title="Chat de Zephira"
          />
        </div>
      </main>
      
      <div className="pb-24 md:pb-0">
        <Footer />
      </div>
    </div>
  );
}
