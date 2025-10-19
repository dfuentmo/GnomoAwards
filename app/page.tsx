"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { FireEffect } from "@/components/fire-effect"
import { EmberParticles } from "@/components/ember-particles"
import { Button } from "@/components/ui/button"
import { Twitch, Youtube } from "lucide-react"

export default function HomePage() {
  const votingEnds = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  const [rulesRead, setRulesRead] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const hasRead = sessionStorage.getItem("rulesRead") === "true"
    if (hasRead) setRulesRead(true)
  }, [])

  const handleRulesClick = () => {
    if (!rulesRead) {
      setRulesRead(true)
      sessionStorage.setItem("rulesRead", "true")
    }
  }

  const handleVoteClick = () => {
    if (!rulesRead) {
      setShowModal(true)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-charcoal via-forest-deep to-charcoal">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/dark-forest-silhouette-night.jpg')] bg-cover bg-center" />
      </div>

      <FireEffect />
      <EmberParticles />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-6xl font-bold tracking-wider text-gold-highlight drop-shadow-[0_0_30px_rgba(244,213,128,0.5)] md:text-8xl">
            GnomeAwards
          </h1>
          <div className="mx-auto h-1 w-32 bg-gradient-to-r from-transparent via-amber-warm to-transparent" />
        </div>

        <div className="mb-12 max-w-2xl rounded-lg border-2 border-amber-warm/30 bg-gradient-to-b from-charcoal-light/90 to-forest-deep/90 p-8 shadow-2xl backdrop-blur-sm">
          <p className="mb-4 text-center text-xl leading-relaxed text-parchment">
            Ha llegado el tiempo de los GnomeAwards.
          </p>
          <p className="text-center text-base leading-relaxed text-parchment-dark">
            Como en las antiguas festividades del bosque, los gnomos se congregan para honrar a quienes han sembrado inspiración, camaradería y buen hacer.
            Deja tu voto grabado en la madera y únete a la celebración de nuestra comunidad.
          </p>
        </div>

        <div className="mb-8 flex gap-4">
          {/* Botón de Normas */}
          <Link href="/normas">
            <Button
              size="lg"
              className={`glow-pulse bg-gradient-to-r from-amber-warm to-orange-burnt px-12 py-6 text-xl font-bold text-charcoal transition-all hover:scale-105 hover:from-gold-highlight hover:to-amber-warm ${
                rulesRead ? "opacity-60" : ""
              }`}
              onClick={handleRulesClick}
            >
              Normas
            </Button>
          </Link>

          {/* Botón Forjar mi voto */}
          {rulesRead ? (
            <Link href="/categories">
              <Button
                size="lg"
                asChild
                className="glow-pulse bg-gradient-to-r from-amber-warm to-orange-burnt px-12 py-6 text-xl font-bold text-charcoal transition-all hover:scale-105 hover:from-gold-highlight hover:to-amber-warm"
              >
                <span>Forjar mi voto</span>
              </Button>
            </Link>
          ) : (
            <Button
              size="lg"
              className="glow-pulse opacity-60 cursor-not-allowed bg-gradient-to-r from-amber-warm to-orange-burnt px-12 py-6 text-xl font-bold text-charcoal transition-all hover:scale-105 hover:from-gold-highlight hover:to-amber-warm"
              onClick={handleVoteClick}
            >
              Forjar mi voto
            </Button>
          )}
        </div>

        <div className="mb-12 text-center flex flex-col items-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-muted-foreground">
            La votación termina en
          </p>
          <CountdownTimer targetDate={votingEnds} />
        </div>

<footer className="mt-auto pt-12">
  <div className="flex items-center justify-center gap-6">
    <a
      href="https://twitch.tv/wildgnomos"
      target="_blank"
      rel="noopener noreferrer"
      className="text-parchment-dark transition-colors hover:text-primary"
    >
      <Twitch className="h-6 w-6" />
    </a>
    <a
      href="https://www.youtube.com/@WildGnomosTV/"
      className="text-parchment-dark transition-colors hover:text-primary"
    >
      <Youtube className="h-6 w-6" />
    </a>
  </div>
  <p className="mt-4 text-center text-sm text-muted-foreground">
    Tallado a mano, con amor y sin prisa, para la comunidad de Wildgnomos.
  </p>
</footer>

      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="max-w-md rounded-lg bg-charcoal p-8 text-center shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-gold-highlight">¡Atención!</h2>
            <p className="mb-6 text-parchment-dark">
              Debes leer las normas antes de poder forjar tu voto.
            </p>
            <Button
              size="md"
              onClick={() => setShowModal(false)}
              className="bg-gradient-to-r from-amber-warm to-orange-burnt px-6 py-3 font-bold text-charcoal"
            >
              Entendido
            </Button>
          </div>
        </div>
      )}
    </main>
  )
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const days = Math.floor((targetDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  const hours = Math.floor(((targetDate.getTime() - Date.now()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

  return (
    <div className="flex gap-4 text-center">
      <div className="rounded-lg border border-amber-warm/30 bg-charcoal-light/50 px-4 py-2 backdrop-blur-sm">
        <div className="text-3xl font-bold text-gold-highlight">{days}</div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Días</div>
      </div>
      <div className="rounded-lg border border-amber-warm/30 bg-charcoal-light/50 px-4 py-2 backdrop-blur-sm">
        <div className="text-3xl font-bold text-gold-highlight">{hours}</div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Horas</div>
      </div>
    </div>
  )
}
