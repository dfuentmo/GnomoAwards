"use client"

import { FireEffect } from "@/components/fire-effect"
import { EmberParticles } from "@/components/ember-particles"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const rules = [
  {
    title: "Redistribución de premios",
    description: "En caso de que un participante resulte ganador de más de un premio en la misma edición de los GnomeAwards, el Gnomo responsable de la gala se reserva el derecho de asignar un segundo ganador para una de las categorías implicadas. Esta decisión será tomada de manera arbitraria, asegurando que todos los premios tengan un destinatario único y que la celebración sea justa para la comunidad."
  },
  {
    title: "Sistema de votación",
    description: "La votación será estrictamente controlada mediante autenticación en Twitch, Discord u otra plataforma de confianza que permita garantizar la identidad de los votantes. Esto tiene como objetivo prevenir fraudes y asegurar que cada miembro de la comunidad pueda emitir su voto de manera transparente y segura."
  },
  {
    title: "Participación obligatoria de los ganadores",
    description: "Todos los ganadores de los GnomeAwards están obligados a participar activamente en la gala y en la entrega de premios. La participación puede realizarse mediante videollamada, llamada o envío de un mensaje de agradecimiento, a discreción del Gnomo encargado de la ceremonia.\n\nLa finalidad de esta obligación es mantener la cercanía con la comunidad y fomentar la interacción entre todos los miembros."
  },
  {
    title: "Comportamiento y respeto",
    description: "Durante todo el proceso de votación y gala, se espera que todos los miembros de la comunidad mantengan un comportamiento respetuoso y cordial. Se prohíbe cualquier intento de manipulación de votos, difusión de mensajes ofensivos o comportamiento disruptivo."
  },
  {
    title: "Transparencia y comunicación",
    description: "La organización de los GnomeAwards se compromete a mantener una comunicación clara con la comunidad, informando sobre los plazos de votación, los criterios de selección y los resultados finales. Cualquier incidencia será comunicada y resuelta de manera pública para garantizar la confianza de todos los participantes."
  },
  {
    title: "Sugerencias y retroalimentación",
    description: "Los miembros de la comunidad son invitados a enviar sus sugerencias y comentarios sobre el desarrollo de los GnomeAwards. Esto permite mejorar la experiencia año tras año, manteniendo viva la participación y creatividad de todos."
  },
]

export default function RulesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-charcoal via-forest-deep to-charcoal flex flex-col items-center py-12 px-4">
      {/* Fondo bosque */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/dark-forest-silhouette-night.jpg')] bg-cover bg-center" />
      </div>

      {/* Efectos de fuego y partículas */}
      <FireEffect />
      <EmberParticles />

      {/* Botón de volver */}
      <div className="relative z-10 w-full max-w-6xl mb-6">
        <Link href="/">
          <Button
            variant="ghost"
            className="text-parchment-dark hover:bg-charcoal-light/50 hover:text-parchment"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
        </Link>
      </div>

      {/* Título */}
      <h1 className="relative z-10 mb-12 text-5xl md:text-6xl text-gold-highlight font-bold drop-shadow-[0_0_30px_rgba(244,213,128,0.5)] text-center">
      NORMAS Y DIRECTRICES DE LOS GNOMEAWARDS
      </h1>

      {/* Contenido numerado */}
      <div className="relative z-10 max-w-4xl space-y-8">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start bg-charcoal-light/90 backdrop-blur-sm rounded-lg p-6 border-2 border-amber-warm/30 shadow-md hover:shadow-lg transition-all"
          >
            {/* Número de la norma */}
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-amber-warm text-charcoal font-bold text-lg md:mr-6 mb-4 md:mb-0">
              {index + 1}
            </div>

            {/* Título y descripción */}
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gold-highlight mb-2">{rule.title}</h2>
              <p className="whitespace-pre-line text-parchment-dark">{rule.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
