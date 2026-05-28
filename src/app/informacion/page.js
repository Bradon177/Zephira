"use client"
import React from 'react'
import { Hand, MessageSquare, AlertTriangle, Eye, Heart, Users, ShieldAlert } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../ui/card'

export default function page() {
  return (
    <div className="min-h-screen bg-[#faf9fb]">
      <Header />
      <section className="bg-white border-b border-gray-200/50 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Aprende sobre la violencia de género</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
          title="Violencia Verbal"
          description="Uso de palabras ofensivas o agresivas para dañar emocionalmente a alguien."
          >
            <Card.Content>
              <div className="bg-[#faf9fb] p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Ejemplos:</p>
                <ul className='text-sm text-gray-600 space-y-1'>
                  <li>• Gritos constantes</li>
                  <li>• Burlas y apodos ofencivos</li>
                  <li>• Criticas destructivas</li>
                  <li>• Comentarios para hacer sentir inferior</li>
                </ul>

              </div>
            </Card.Content>

          </Card>

          <Card
          color='purple'
          icon={MessageSquare}
          title="Violencia Intrafamiliar"
          description="Cualquier tipo de violencia que ocurre dentro del hogar o núcleo familiar."
          >
            <Card.Content>
              <div className="bg-[#faf9fb] p-4 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">Ejemplos:</p>
                <ul className='text-sm text-gray-600 space-y-1'>
                  <li>• Maltrato entre parejas</li>
                  <li>• Castigos agresivos hacia hijos</li>
                  <li>• Aislamiento de familia y amigos</li>
                  <li>• Amenazas dentro del hogar</li>
                </ul>
              </div>
            </Card.Content>
          </Card>
        </div>
      </section>

      {/* Señales de Alerta */}
      <section className="bg-white border-y border-gray-200/50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Señales de alerta</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Si reconoces varias de estas señales, puede ser momento de buscar ayuda profesional o apoyo en tu círculo cercano.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              color="purple"
              icon={ShieldAlert}
              title="En la relación"
            >
              <Card.Content>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex gap-2"><span>✓</span> Te culpa por todo lo malo que pasa</li>
                  <li className="flex gap-2"><span>✓</span> Controla tu teléfono, redes o ubicación</li>
                  <li className="flex gap-2"><span>✓</span> Te prohíbe ver a tu familia o amigos</li>
                  <li className="flex gap-2"><span>✓</span> Toma decisiones por ti sin consultarte</li>
                  <li className="flex gap-2"><span>✓</span> Te amenaza si hablas de separarte</li>
                </ul>
              </Card.Content>
            </Card>

            <Card 
              color="red"
              icon={Heart}
              title="Cómo te hace sentir"
            >
              <Card.Content>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex gap-2"><span>✓</span> Sientes miedo de hacer enojar a tu pareja</li>
                  <li className="flex gap-2"><span>✓</span> Crees que "si cambias" todo mejorará</li>
                  <li className="flex gap-2"><span>✓</span> Te sientes constantemente vigilada/o</li>
                  <li className="flex gap-2"><span>✓</span> Has perdido confianza en ti misma/o</li>
                  <li className="flex gap-2"><span>✓</span> Sientes que "nadie más te querría"</li>
                </ul>
              </Card.Content>
            </Card>

            <Card 
              color="blue"
              icon={Users}
              title="Lo que otros notan"
            >
              <Card.Content>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex gap-2"><span>✓</span> Te has alejado de familia y amigos</li>
                  <li className="flex gap-2"><span>✓</span> Justificas comportamientos abusivos</li>
                  <li className="flex gap-2"><span>✓</span> Tienes marcas o lesiones inexplicadas</li>
                  <li className="flex gap-2"><span>✓</span> Cambios en tu personalidad o ánimo</li>
                  <li className="flex gap-2"><span>✓</span> Evitas ciertos temas de conversación</li>
                </ul>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
