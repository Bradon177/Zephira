import React from 'react'
import { Shield, LogOut } from "lucide-react";
import Button from "../ui/button";

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-[#8b7fa8]" />
            <span className="text-gray-800 font-medium">Zephira</span>
          </div>
          <Button 
            variant="ghost" 
            icon={LogOut} 
            title="Salir Rápido" 
          />
        </div>
      </header>
  )
}
