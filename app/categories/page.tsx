"use client"

import Link from "next/link"
import { FireEffect } from "@/components/fire-effect"
import { EmberParticles } from "@/components/ember-particles"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Trophy, Users, Zap, Heart, Laugh, Sparkles } from "lucide-react"

const categoryGroups = [
  {
    id: "comunidad",
    name: "🏆 PREMIOS DE COMUNIDAD 🏆",
    categories: [
      { id: "mejor-clip", name: "MEJOR CLIP", description: "Para el momento más épico, gracioso o absurdo capturado.", icon: Trophy },
      { id: "mejor-raider", name: "MEJOR RAIDER", description: "Para quien más veces ha traído su comunidad a Wildgnomos.", icon: Users },
      { id: "mayor-racha-subs", name: "MAYOR RACHA DE SUBS", description: "Para quien ha mantenido la racha de suscripción más larga.", icon: Zap },
      { id: "mayor-racha-actual-total-anual", name: "MAYOR RACHA ACTUAL / TOTAL / ANUAL", description: "Tres premios diferentes según la racha.", icon: Heart },
      { id: "mayor-racha-perdida", name: "MAYOR RACHA PERDIDA", description: "Para quien haya perdido la racha más larga.", icon: Zap },
      { id: "seguidor-mas-horas", name: "SEGUIDOR CON MÁS HORAS DE VISIONADO", description: "Para quien más ha estado presente en el canal.", icon: Users },
      { id: "seguidor-mas-pesado", name: "SEGUIDOR MÁS PESADO", description: "Para el que siempre está ahí, insistente pero querido.", icon: Laugh },
      { id: "premio-honorifico", name: "PREMIO HONORÍFICO", description: "Para alguien que haya dejado huella en la comunidad.", icon: Heart },
    ]
  },
  {
    id: "humor",
    name: "😂 PREMIOS DE HUMOR 😂",
    categories: [
      { id: "premio-postumo", name: "PREMIO PÓSTUMO", description: "Para el que desapareció misteriosamente del chat.", icon: Laugh },
      { id: "mejor-luis-random", name: '"MEJOR" "LUIS DE TURNO"', description: 'Para quien más ha encarnado la esencia del "Luis random" de la comunidad.', icon: Sparkles },
      { id: "mejor-moderador", name: '"MEJOR" MODERADOR', description: "Un premio simbólico, ya que todos son los mejores.", icon: Users },
      { id: "seguidor-favorito", name: "SEGUIDOR FAVORITO", description: "Para el más querido por el streamer, su ojito derecho.", icon: Heart },
    ]
  },
  {
    id: "creativos",
    name: "🎨 PREMIOS CREATIVOS 🎨",
    categories: [
      { id: "construccion-inspirada", name: "PREMIO CONSTRUCCIÓN INSPIRADA EN WILDGNOMOS", description: "Para quien haya hecho algo físico basado en la comunidad (cabaña, huerto, gallinero, etc.).", icon: Sparkles },
      { id: "mejor-aportacion", name: "MEJOR APORTACIÓN A LA COMUNIDAD", description: "Para alguien que haya hecho algo especial por el canal.", icon: Users },
      { id: "mejor-fan-art", name: "MEJOR FAN ART", description: "Para la mejor creación artística.", icon: Sparkles },
      { id: "mejor-meme", name: "MEJOR MEME", description: "Meme sobre Wildgnomos o su comunidad.", icon: Laugh },
      { id: "mejor-mensaje-chat", name: "MEJOR MENSAJE EN EL CHAT", description: "Para el comentario más legendario, ingenioso o memorable.", icon: Zap },
    ]
  }
]

export default function CategoriesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-charcoal via-forest-deep to-charcoal">
      {/* Fondo del bosque */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/dark-forest-silhouette-night.jpg')] bg-cover bg-center" />
      </div>

      <FireEffect />
      <EmberParticles />

      <div className="relative z-10 px-4 py-12">
        {/* Encabezado */}
        <div className="mx-auto mb-12 max-w-6xl">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-6 text-parchment-dark hover:bg-charcoal-light/50 hover:text-parchment"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>

          <h1 className="mb-4 text-center text-5xl font-bold tracking-wider text-gold-highlight drop-shadow-[0_0_30px_rgba(244,213,128,0.5)] md:text-6xl">
          GNOMEAWARDS
          </h1>
          <p className="text-center text-lg text-parchment-dark">
            Elige una categoría para emitir tu voto y celebrar a nuestra comunidad
          </p>
        </div>

        {/* Grupos de categorías */}
        {categoryGroups.map((group) => (
          <section key={group.id} className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gold-highlight text-center">{group.name}</h2>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.categories.map((category) => {
                const Icon = category.icon
                return (
                  <Link key={category.id} href={`/vote/${category.id}`}>
                    <Card className="group relative flex h-full flex-col justify-between overflow-hidden border-2 border-amber-warm/30 bg-gradient-to-b from-charcoal-light/90 to-forest-deep/90 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:border-amber-warm/60 hover:shadow-[0_0_30px_rgba(231,164,92,0.3)]">
                      {/* Icono */}
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-warm to-orange-burnt shadow-lg">
                        <Icon className="h-8 w-8 text-charcoal" />
                      </div>

                      {/* Contenido */}
                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-bold text-gold-highlight">{category.name}</h3>
                        <p className="whitespace-pre-line text-sm leading-relaxed text-parchment-dark">{category.description}</p>
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-warm/10 to-orange-burnt/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Card>
                  </Link>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
