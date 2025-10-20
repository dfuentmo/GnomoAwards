"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { FireEffect } from "@/components/fire-effect"
import { EmberParticles } from "@/components/ember-particles"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Check } from "lucide-react"
import { categoryGroups } from "@/data/categories"
import { nominadosPorCategoria } from "@/data/nominees"

function TwitchClipEmbed({ clipId }: { clipId: string }) {
  if (!clipId) return null

  const slug = clipId.includes("/") ? clipId.split("/").pop() : clipId
  const parent = typeof window !== "undefined" ? window.location.hostname : "localhost"
  const src = `https://clips.twitch.tv/embed?clip=${encodeURIComponent(slug || "")}&parent=${parent}&autoplay=true`

  return (
    <div className="w-full rounded-lg overflow-hidden" style={{ position: "relative", paddingTop: "56.25%" }}>
      <iframe
        src={src}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowFullScreen
        title="Twitch Clip"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      />
    </div>
  )
}

// Added: componente que obtiene la miniatura del clip vía oEmbed y muestra overlay de "play"
function TwitchClipPreview({ clipId, onClick }: { clipId: string; onClick: () => void }) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!clipId) return;
    let mounted = true;

    const cachedThumbnail = localStorage.getItem(`thumbnail_${clipId}`);
    if (cachedThumbnail) {
      setThumbnail(cachedThumbnail);
      setLoading(false);
      return;
    }

    async function fetchClipData() {
      try {
        const res = await fetch(`/api/twitch/clip?id=${encodeURIComponent(clipId)}`);
        const data = await res.json();
        const thumbRaw = data?.data?.[0]?.thumbnail_url;

        if (mounted && thumbRaw) {
          let thumb = String(thumbRaw)
            .replace('%{width}', '640')
            .replace('%{height}', '360');

          const qIdx = thumb.indexOf('?');
          if (qIdx !== -1) thumb = thumb.slice(0, qIdx);

          localStorage.setItem(`thumbnail_${clipId}`, thumb);
          setThumbnail(thumb);
        }
      } catch (err) {
        console.error('Error fetching Twitch clip:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchClipData();
    return () => { mounted = false; };
  }, [clipId]);

  if (loading) {
    return (
      <div className="h-48 w-full rounded-lg bg-black/30 flex items-center justify-center text-parchment-dark">
        Cargando...
      </div>
    );
  }

  if (!thumbnail) {
    return (
      <div className="h-48 w-full rounded-lg bg-black/40 flex items-center justify-center text-parchment-dark">
        Vista previa no disponible
      </div>
    );
  }

  return (
    <div className="h-48 w-full overflow-hidden rounded-lg relative group cursor-pointer" onClick={onClick}>
      <img
        src={thumbnail}
        alt="Twitch Clip Preview"
        className="h-48 w-full object-cover transition-transform group-hover:scale-110"
        onError={() => setThumbnail(null)}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-12 w-12 rounded-full bg-black/60 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function VotePage({ params }: { params: Promise<{ category: string }> }) {
  const router = useRouter()
  const [seleccion, setSeleccion] = useState<string | null>(null)
  const [haVotado, setHaVotado] = useState(false)
  const [category, setCategory] = useState<string | null>(null)
  const [modalContent, setModalContent] = useState<any>(null)

  useEffect(() => {
    async function getParams() {
      const resolved = await params
      setCategory(resolved.category)
    }
    getParams()
  }, [params])

  useEffect(() => {
    if (!category) return
    const votoGuardado = sessionStorage.getItem(`voto-${category}`)
    if (votoGuardado) setHaVotado(true)
  }, [category])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalContent(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  if (!category) return <main className="flex min-h-screen items-center justify-center text-parchment">Cargando...</main>

  const allCategories = categoryGroups.flatMap(g => g.categories.map(c => c.id))
  const categoria = categoryGroups.flatMap(g => g.categories).find(c => c.id === category)
  if (!categoria) return <main className="flex min-h-screen items-center justify-center text-parchment">Categoría no encontrada</main>

  const nominados = nominadosPorCategoria[category] || []

  const handleVote = () => {
    if (!seleccion) return
    sessionStorage.setItem(`voto-${category}`, seleccion)
    setHaVotado(true)

    const currentIndex = allCategories.indexOf(category)
    const nextCategory = allCategories[currentIndex + 1]
    setTimeout(() => {
      if (nextCategory) router.push(`/voto/${nextCategory}`)
      else router.push("/categories")
    }, 1500)
  }

  const renderMedia = (nom: any) => {
    if (nom.tipo === "imagen") {
      return <img src={nom.src} alt={nom.nombre} className="h-48 w-full object-cover transition-transform group-hover:scale-110" />
    } else if (nom.tipo === "youtube") {
      const videoId = nom.src.split("v=")[1]
      return <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={nom.nombre} className="h-48 w-full object-cover transition-transform group-hover:scale-110" />
    } else if (nom.tipo === "twitch") {
      const clipId = nom.clipId || nom.src.split("/").pop();
      return <TwitchClipPreview clipId={clipId} onClick={() => setModalContent({ tipo: 'twitch', clipId })} />;
    }
  }

  const renderModalContent = () => {
    if (!modalContent) return null
    if (modalContent.tipo === "imagen") {
      return <img src={modalContent.src} alt={modalContent.nombre} className="max-h-[80vh] w-auto rounded-lg" />
    } else if (modalContent.tipo === "youtube") {
      const videoId = modalContent.src.split("v=")[1]
      return (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full max-h-[80vh] rounded-lg"
        />
      )
    } else if (modalContent.tipo === "twitch") {
      const clipId = modalContent.clipId || modalContent.src.split("/").pop()
      return <TwitchClipEmbed clipId={clipId} />
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-charcoal via-forest-deep to-charcoal">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/dark-forest-silhouette-night.jpg')] bg-cover bg-center" />
      </div>
      <FireEffect />
      <EmberParticles />

      <div className="relative z-10 px-4 py-12">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <div className="flex items-center justify-between">
            <Link href="/categories">
              <Button variant="ghost" className="text-parchment-dark hover:bg-charcoal-light/50 hover:text-parchment">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver a categorías
              </Button>
            </Link>
          </div>
          <h1 className="mt-4 text-5xl font-bold tracking-wider text-gold-highlight drop-shadow-[0_0_30px_rgba(244,213,128,0.5)]">{categoria.name}</h1>
          <p className="mt-4 text-lg text-parchment-dark max-w-2xl mx-auto">{categoria.description}</p>
        </div>

        <div className="mx-auto mb-10 grid max-w-6xl gap-8 md:grid-cols-2">
          {nominados.map(nom => (
            <Card
              key={nom.id}
              onClick={() => !haVotado && setSeleccion(nom.id)}
              className={`group relative cursor-pointer overflow-hidden border-2 bg-gradient-to-b from-charcoal-light/90 to-forest-deep/90 p-6 backdrop-blur-sm transition-all hover:scale-[1.02] ${
                seleccion === nom.id ? "border-gold-highlight shadow-[0_0_30px_rgba(244,213,128,0.5)]" : "border-amber-warm/30 hover:border-amber-warm/60"
              } ${haVotado ? "cursor-not-allowed opacity-50" : ""}`}
            >
              {seleccion === nom.id && (
                <div className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-gold-highlight shadow-[0_0_20px_rgba(244,213,128,0.65)]">
                  <Check className="h-5 w-5 text-charcoal" />
                </div>
              )}
              <div className="mb-4 overflow-hidden rounded-lg relative">
                {renderMedia(nom)}
                <Button
                  size="sm"
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-amber-warm to-orange-burnt text-charcoal hover:scale-105 hover:from-gold-highlight hover:to-amber-warm"
                  onClick={e => { e.stopPropagation(); setModalContent(nom) }}
                >
                  Ver
                </Button>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gold-highlight">{nom.nombre}</h3>
              <p className="text-sm text-parchment-dark">{nom.descripcion}</p>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-md text-center">
          {haVotado ? (
            <div className="rounded-lg border-2 border-gold-highlight bg-gradient-to-b from-charcoal-light/90 to-forest-deep/90 p-6">
              <p className="text-xl font-bold text-gold-highlight">¡Voto forjado con éxito! 🔥</p>
              <p className="mt-2 text-sm text-parchment-dark">Redirigiendo al siguiente premio...</p>
            </div>
          ) : (
            <Button
              onClick={handleVote}
              disabled={!seleccion}
              size="lg"
              className="w-full bg-gradient-to-r from-amber-warm to-orange-burnt px-12 py-6 text-xl font-bold text-charcoal hover:scale-105 hover:from-gold-highlight hover:to-amber-warm disabled:opacity-50 disabled:hover:scale-100"
            >
              Forjar mi voto
            </Button>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setModalContent(null)}
        >
          <div
            className="relative max-w-4xl p-4"
            style={{ width: "min(90vw, 64rem)" }}
            onClick={e => e.stopPropagation()}
          >
            <Button
              size="sm"
              className="absolute right-0 top-0 m-2 bg-gradient-to-r from-amber-warm to-orange-burnt text-charcoal hover:scale-105 hover:from-gold-highlight hover:to-amber-warm z-50"
              onClick={() => setModalContent(null)}
            >
              Cerrar
            </Button>
            {renderModalContent()}
          </div>
        </div>
      )}
    </main>
  );
}
