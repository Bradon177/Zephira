import React from 'react'

export default function Footer() {
  return (
    <div>
            <footer className="bg-[#2d2a32] text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="text-gray-300 mb-3">Sobre Zephira</h4>
              <p className="text-sm">Espacio seguro dedicado a prevenir la violencia de género</p>
            </div>
            <div>
              <h4 className="text-gray-300 mb-3">Emergencias</h4>
              <p className="text-sm">Línea Nacional: 911 (24/7)</p>
              <p className="text-sm">Chat disponible en esta página</p>
            </div>
            <div>
              <h4 className="text-gray-300 mb-3">Tu privacidad</h4>
              <p className="text-sm">No guardamos tu historial de navegación</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm">
            <p>Zephira - Aquí estamos para ti</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
