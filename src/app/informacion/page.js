"use client"
import React from 'react'
import { Hand, MessageSquare, AlertTriangle, Eye } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../ui/card'

export default function page() {
  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <Header />
        <section className="bg-white border-b border-gray-200/50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="mb-4 text-gray-800">Aprende sobre la violencia de género</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conocer las señales de alerta y entender los tipos de violencia es el primer paso para protegerte o ayudar a alguien más
          </p>
        </div>
      </section>

      {/* Tipos de Violencia */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="mb-3 text-gray-800">Tipos de violencia de género</h2>
          <p className="text-gray-600">La violencia puede manifestarse de muchas formas. No siempre es física.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Violencia Física */}
          <Card 
            color="red"
            icon={Hand}
            title="Violencia Física"
            description="Cualquier acto que cause daño corporal o que pueda causarlo"
          >
            <Card.Content>
              <div className="bg-[#faf9fb] p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Ejemplos:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Golpes, empujones, bofetadas</li>
                  <li>• Jalar el cabello, pellizcos</li>
                  <li>• Lanzar objetos con intención de lastimar</li>
                  <li>• Uso de armas o amenazas con armas</li>
                </ul>
              </div>
            </Card.Content>
          </Card>

          {/* Violencia Psicológica */}
          <Card 
            color="purple"
            icon={MessageSquare}
            title="Violencia Psicológica"
            description="Actos u omisiones que dañan la estabilidad emocional"
          >
            <Card.Content>
              <div className="bg-[#faf9fb] p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Ejemplos:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Insultos, humillaciones, gritos constantes</li>
                  <li>• Amenazas, intimidación</li>
                  <li>• Aislamiento de familia y amigos</li>
                  <li>• Control excesivo, celos patológicos</li>
                </ul>
              </div>
            </Card.Content>
          </Card>

          {/* Violencia Sexual */}
          <Card 
            color="red"
            icon={AlertTriangle}
            title="Violencia Sexual"
            description="Actos de naturaleza sexual sin consentimiento"
          >
            <Card.Content>
              <div className="bg-[#faf9fb] p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Ejemplos:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Forzar o presionar a tener relaciones sexuales</li>
                  <li>• Tocamientos no deseados</li>
                  <li>• Obligar a ver pornografía</li>
                  <li>• Compartir imágenes íntimas sin consentimiento</li>
                </ul>
              </div>
            </Card.Content>
          </Card>

          {/* Violencia Económica */}
          <Card 
            color="blue"
            icon={Eye}
            title="Violencia Económica"
            description="Control o limitación de recursos económicos"
          >
            <Card.Content>
              <div className="bg-[#faf9fb] p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Ejemplos:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Controlar todo el dinero del hogar</li>
                  <li>• Impedir trabajar o estudiar</li>
                  <li>• Destruir documentos importantes</li>
                  <li>• Robo de ingresos o propiedades</li>
                </ul>
              </div>
            </Card.Content>
          </Card>


          <Card
          color="lightRed"
          icon={MessageSquare}
          title="Violencia Psicológica"
          description="Actos u omisiones que dañan la estabilidad emocional"
          >

          </Card>
        </div>
      </section>

      {/* Señales de Alerta */}
      <section className="bg-white border-y border-gray-200/50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="mb-3 text-gray-800">Señales de alerta</h2>
            <p className="text-gray-600">Si reconoces varias de estas señales, puede ser momento de buscar ayuda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#faf9fb] p-5 rounded-xl border border-gray-200/50">
              <h4 className="mb-3 text-gray-800">En la relación</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Te culpa por todo lo malo que pasa</li>
                <li>✓ Controla tu teléfono, redes sociales o ubicación</li>
                <li>✓ Te prohíbe ver a tu familia o amigos</li>
                <li>✓ Toma decisiones por ti sin consultarte</li>
                <li>✓ Te amenaza si hablas de separarte</li>
              </ul>
            </div>

            <div className="bg-[#faf9fb] p-5 rounded-xl border border-gray-200/50">
              <h4 className="mb-3 text-gray-800">Cómo te hace sentir</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Sientes miedo de hacer enojar a tu pareja</li>
                <li>✓ Crees que "si cambias" todo mejorará</li>
                <li>✓ Te sientes constantemente vigilada/o</li>
                <li>✓ Has perdido confianza en ti misma/o</li>
                <li>✓ Sientes que "nadie más te querría"</li>
              </ul>
            </div>

            <div className="bg-[#faf9fb] p-5 rounded-xl border border-gray-200/50">
              <h4 className="mb-3 text-gray-800">Lo que otros notan</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Te has alejado de familia y amigos</li>
                <li>✓ Justificas comportamientos abusivos</li>
                <li>✓ Tienes marcas o lesiones inexplicadas</li>
                <li>✓ Cambios en tu personalidad o estado de ánimo</li>
                <li>✓ Evitas ciertos temas de conversación</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
