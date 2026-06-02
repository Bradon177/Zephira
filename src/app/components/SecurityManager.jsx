"use client";

import { useEffect } from 'react';

/**
 * SecurityManager - Componente encargado de la protección activa del usuario.
 * Implementa medidas para evitar la inspección, copia o rastreo accidental.
 */
export default function SecurityManager() {
  useEffect(() => {
    // 3. Mensaje de integridad en consola
    const showSecurityMessage = () => {
      console.log("%cZephira Platform — Integrity & Transparency", "color: #8b7fa8; font-weight: bold; font-size: 16px;");
      console.log("%cEste sistema es de código abierto para auditoría y transparencia. Sin embargo, la extracción masiva de datos y la modificación malintencionada están prohibidas.", "color: #64748b; font-size: 12px;");
    };

    // 4. Prevenir arrastre de imágenes (evita guardar el logo o imágenes sospechosas)
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // Aplicar listeners
    document.addEventListener('dragstart', handleDragStart);
    
    showSecurityMessage();

    // Limpieza al desmontar
    return () => {
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return null; // Este componente no renderiza nada visualmente
}
