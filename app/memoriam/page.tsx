"use client"

import { FireEffect } from "@/components/fire-effect"
import { EmberParticles } from "@/components/ember-particles"

const inMemoriamNames = [
  "Uchuva",
  "Azores",
  "Ponchlains",
  "Carretillo Robado",
  "Tengoestilopupiloyteaniquilo",
  "Traviesas de Tren",
  "Lavadora con Desatascador",
  // Añade más nombres aquí
]

export default function InMemoriamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-charcoal via-forest-deep to-charcoal flex flex-col items-center justify-center">
      {/* Fondo bosque */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/dark-forest-silhouette-night.jpg')] bg-cover bg-center" />
      </div>

      {/* Efectos de fuego y partículas */}
      <FireEffect />
      <EmberParticles />

      {/* Título */}
      <h1 className="relative z-10 mb-8 text-5xl md:text-6xl text-gold-highlight font-bold drop-shadow-[0_0_30px_rgba(244,213,128,0.5)]">
        IN MEMORIAM
      </h1>
      <p className="relative z-10 mb-12 text-center text-lg text-parchment-dark max-w-2xl">
        Seguidores baneados o desaparecidos. Siempre en nuestra memoria.
      </p>

      {/* Créditos de nombres */}
      <div className="relative z-10 flex h-96 w-full items-center justify-center overflow-hidden">
        <div className="animate-scrollCredits flex flex-col items-center space-y-4 text-center opacity-0">
          {inMemoriamNames.map((name, index) => (
            <p key={index} className="text-parchment-dark text-xl font-semibold">
              {name}
            </p>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollCredits {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 1;
          }
        }

        .animate-scrollCredits {
          animation: scrollCredits 60s linear infinite;
        }
      `}</style>
    </main>
  )
}
