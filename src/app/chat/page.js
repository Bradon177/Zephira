"use client";

import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../ui/button';
import { Send, Lock, MessageCircle, ArrowLeft, Loader2, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { sendMessageToN8n } from '../../lib/n8n';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [sessionId] = useState(`session-${Date.now()}`);
  const messagesEndRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Inicializar el primer mensaje solo en el cliente para evitar errores de hidratación
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "Hola, soy Zephira. Estoy aquí para escucharte y apoyarte en un entorno seguro y confidencial. ¿En qué puedo ayudarte hoy?",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      // Mostrar botón si el usuario se ha alejado más de 300px del fondo
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 300;
      setShowScrollButton(!isNearBottom);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const sanitizedInput = inputValue.trim().replace(/[<>]/g, ''); // Sanitización básica
    if (!sanitizedInput || isLoading) return;

    const userMessage = sanitizedInput;
    const newMessage = {
      id: Date.now(),
      text: userMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToN8n(userMessage, sessionId);
      
      const botResponse = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      const errorResponse = {
        id: Date.now() + 1,
        text: "Lo siento, tuve un problema al conectar con mis sistemas. Por favor, intenta de nuevo en unos momentos.",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen bg-[#faf9fb] flex flex-col overflow-hidden">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 flex flex-col min-h-0 relative">
        {/* Barra superior de estado del chat */}
        <div className="mt-4 bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl p-4 shadow-sm flex items-center justify-between z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-gray-50 rounded-full transition-all">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <div>
              <h2 className="text-slate-900 text-lg font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Zephira
              </h2>
              <p className="text-slate-500 text-xs flex items-center gap-1">
                <Lock className="w-3 h-3" /> Privado
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Seguridad</span>
              <span className="text-[11px] text-[#8b7fa8] font-medium">Activa</span>
            </div>
            <img 
              src="/logo.png" 
              alt="Zephira Logo" 
              className="h-10 w-auto object-contain" 
            />
          </div>
        </div>

        {/* Área de Mensajes */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto min-h-0 py-6 custom-scrollbar scroll-smooth"
        >
          <div className="space-y-8 pb-32 relative"> {/* Espacio extra al final para el input flotante */}
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div className={`
                  flex flex-col 
                  ${message.sender === 'user' 
                    ? 'items-end max-w-[85%] md:max-w-[75%]' 
                    : 'items-start w-full max-w-[100%] md:max-w-[95%]'
                  }
                `}>
                  <div className={`
                    p-5 md:p-6 rounded-[2rem] text-sm md:text-base leading-relaxed prose prose-slate max-w-none shadow-sm
                    ${message.sender === 'user' 
                      ? 'bg-[#8b7fa8] text-white rounded-tr-none prose-invert shadow-[#8b7fa8]/10' 
                      : 'bg-white text-slate-700 rounded-tl-none border border-gray-100 w-full overflow-x-auto custom-scrollbar-horizontal'
                    }
                  `}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.text}
                    </ReactMarkdown>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-2 px-4 font-medium uppercase tracking-tight">
                    {message.sender === 'user' ? 'Tú' : 'Zephira'} • {message.time}
                  </span>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="bg-white border border-gray-100 p-5 rounded-[2rem] rounded-tl-none flex items-center gap-3 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[#8b7fa8] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#8b7fa8] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#8b7fa8] rounded-full animate-bounce"></span>
                  </div>
                  <span className="text-sm text-slate-500 font-medium italic">Zephira está escribiendo...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Botón flotante para bajar al final */}
          {showScrollButton && (
            <div className="absolute bottom-32 left-0 right-0 flex justify-center z-20 pointer-events-none">
              <button
                onClick={scrollToBottom}
                className="pointer-events-auto p-2 bg-white/80 backdrop-blur-md border border-gray-100 rounded-full shadow-lg text-[#8b7fa8] hover:bg-white transition-all duration-300 animate-in fade-in zoom-in slide-in-from-bottom-4"
                aria-label="Ir al final"
              >
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Input de Mensaje - Estilo ChatGPT (Flotante/Sticky) */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 md:pb-8 bg-gradient-to-t from-[#faf9fb] via-[#faf9fb]/90 to-transparent pt-10 pointer-events-none">
          <div className="max-w-4xl mx-auto pointer-events-auto">
            <div className="bg-white border border-gray-100 rounded-[2rem] shadow-2xl p-1.5 md:p-2 focus-within:ring-4 focus-within:ring-[#8b7fa8]/10 transition-all duration-300">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe tu mensaje aquí..."
                  className="flex-1 bg-transparent border-none px-4 md:px-6 py-3 md:py-4 focus:outline-none text-slate-700 text-sm md:text-base"
                />
                <button 
                  type="submit"
                  className={`
                    p-3 md:p-4 rounded-2xl transition-all duration-300 flex items-center justify-center
                    ${inputValue.trim() 
                      ? 'bg-[#8b7fa8] text-white hover:bg-[#7a6e97] shadow-lg hover:scale-105 active:scale-95' 
                      : 'bg-slate-50 text-slate-300'
                    }
                  `}
                  disabled={!inputValue.trim() || isLoading}
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
            <p className="text-[9px] md:text-[10px] text-slate-400 text-center mt-2 md:mt-3 font-medium uppercase tracking-widest opacity-60 px-4">
              Zephira puede cometer errores. Verifica la información importante.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
