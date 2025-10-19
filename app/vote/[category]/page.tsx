"use client"

import { useState } from "react"
import Link from "next/link"
import { FireEffect } from "@/components/fire-effect"
import { EmberParticles } from "@/components/ember-particles"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Check } from "lucide-react"
import { useRouter } from "next/navigation"

// Mock data - in a real app, this would come from a database
const categoryData: Record<
  string,
  {
    name: string
    nominees: Array<{ id: string; name: string; description: string; imageUrl: string }>
  }
> = {
  "best-clip": {
    name: "Best Clip of the Year",
    nominees: [
      {
        id: "1",
        name: "The Great Gnome Escape",
        description: "When the entire chat helped navigate through the impossible maze",
        imageUrl: "/epic-gaming-moment.jpg",
      },
      {
        id: "2",
        name: "Unexpected Victory",
        description: "The clutch play that no one saw coming",
        imageUrl: "/victory-celebration.jpg",
      },
      {
        id: "3",
        name: "Chat Takes Control",
        description: "The chaos that ensued when chat democracy went too far",
        imageUrl: "/chaotic-gaming.jpg",
      },
      {
        id: "4",
        name: "Perfect Timing",
        description: "The perfectly timed moment that broke the internet",
        imageUrl: "/perfect-timing-moment.jpg",
      },
    ],
  },
  "most-wholesome": {
    name: "Most Wholesome Moment",
    nominees: [
      {
        id: "1",
        name: "Community Charity Stream",
        description: "When we all came together to support a great cause",
        imageUrl: "/charity-celebration.jpg",
      },
      {
        id: "2",
        name: "Birthday Surprise",
        description: "The community's heartwarming birthday surprise",
        imageUrl: "/vibrant-birthday-celebration.png",
      },
      {
        id: "3",
        name: "New Member Welcome",
        description: "How the community welcomed a nervous first-time chatter",
        imageUrl: "/welcoming-community.jpg",
      },
      {
        id: "4",
        name: "Support Squad",
        description: "When chat rallied to support someone having a tough day",
        imageUrl: "/supportive-friends.jpg",
      },
    ],
  },
  "best-emote": {
    name: "Best New Emote",
    nominees: [
      {
        id: "1",
        name: "gnomeLove",
        description: "The heart emote that expresses all the love",
        imageUrl: "/heart-emoji.png",
      },
      {
        id: "2",
        name: "gnomeHype",
        description: "For when things get absolutely wild",
        imageUrl: "/excited-emoji.jpg",
      },
      {
        id: "3",
        name: "gnomeThink",
        description: "The thinking emote for those big brain moments",
        imageUrl: "/thinking-emoji.png",
      },
      {
        id: "4",
        name: "gnomePanic",
        description: "When everything is on fire (in a good way)",
        imageUrl: "/panic-emoji.jpg",
      },
    ],
  },
  "hype-moment": {
    name: "Most Hype Moment",
    nominees: [
      {
        id: "1",
        name: "Raid Train Arrival",
        description: "When the biggest raid of the year rolled in",
        imageUrl: "/crowd-celebration.jpg",
      },
      {
        id: "2",
        name: "Subathon Milestone",
        description: "Breaking the subathon goal with hours to spare",
        imageUrl: "/milestone-celebration.jpg",
      },
      {
        id: "3",
        name: "Boss Fight Victory",
        description: "Finally defeating the boss after 47 attempts",
        imageUrl: "/epic-victory.jpg",
      },
      {
        id: "4",
        name: "Surprise Guest",
        description: "When a special guest dropped into the stream",
        imageUrl: "/surprise-guest.jpg",
      },
    ],
  },
  "community-mvp": {
    name: "Community MVP",
    nominees: [
      {
        id: "1",
        name: "ModMaster3000",
        description: "Always there to keep chat positive and welcoming",
        imageUrl: "/moderator-badge.jpg",
      },
      {
        id: "2",
        name: "ClipChampion",
        description: "Never misses a moment worth clipping",
        imageUrl: "/classic-video-camera.png",
      },
      {
        id: "3",
        name: "ArtisticGnome",
        description: "Creates amazing fan art for the community",
        imageUrl: "/artist-painting.png",
      },
      {
        id: "4",
        name: "HypeSquadLeader",
        description: "Brings the energy to every stream",
        imageUrl: "/cheerleader.jpg",
      },
    ],
  },
  "funniest-moment": {
    name: "Funniest Moment",
    nominees: [
      {
        id: "1",
        name: "The Accidental Reveal",
        description: "When the secret was accidentally spoiled in the best way",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "2",
        name: "Chat Trolls Back",
        description: "The time chat turned the tables perfectly",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "3",
        name: "Technical Difficulties",
        description: "When the tech issues became comedy gold",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "4",
        name: "Misheard Lyrics",
        description: "The karaoke moment that will never be forgotten",
        imageUrl: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
}

export default function VotePage({ params }: { params: { category: string } }) {
  const { category } = params
  const router = useRouter()
  const [selectedNominee, setSelectedNominee] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)

  const data = categoryData[category]

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-parchment">Category not found</p>
      </main>
    )
  }

  const handleVote = () => {
    if (selectedNominee) {
      // In a real app, this would submit to a backend
      setHasVoted(true)
      setTimeout(() => {
        router.push("/categories")
      }, 2000)
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
        {/* Header */}
        <div className="mx-auto mb-12 max-w-6xl">
          <Link href="/categories">
            <Button
              variant="ghost"
              className="mb-6 text-parchment-dark hover:bg-charcoal-light/50 hover:text-parchment"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Button>
          </Link>

          <h1 className="mb-4 text-center text-4xl font-bold tracking-wider text-gold-highlight drop-shadow-[0_0_30px_rgba(244,213,128,0.5)] md:text-5xl">
            {data.name}
          </h1>
          <p className="text-center text-lg text-parchment-dark">Select your favorite nominee and cast your vote</p>
        </div>

        {/* Nominees Grid */}
        <div className="mx-auto mb-8 grid max-w-6xl gap-6 md:grid-cols-2">
          {data.nominees.map((nominee) => (
            <Card
              key={nominee.id}
              onClick={() => !hasVoted && setSelectedNominee(nominee.id)}
              className={`group relative cursor-pointer overflow-hidden border-2 bg-gradient-to-b from-charcoal-light/90 to-forest-deep/90 p-6 backdrop-blur-sm transition-all hover:scale-[1.02] ${
                selectedNominee === nominee.id
                  ? "border-gold-highlight shadow-[0_0_30px_rgba(244,213,128,0.5)]"
                  : "border-amber-warm/30 hover:border-amber-warm/60"
              } ${hasVoted ? "cursor-not-allowed opacity-50" : ""}`}
            >
              {/* Selected indicator */}
              {selectedNominee === nominee.id && (
                <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gold-highlight">
                  <Check className="h-5 w-5 text-charcoal" />
                </div>
              )}

              {/* Image */}
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={nominee.imageUrl || "/placeholder.svg"}
                  alt={nominee.name}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-bold text-gold-highlight">{nominee.name}</h3>
              <p className="text-sm leading-relaxed text-parchment-dark">{nominee.description}</p>
            </Card>
          ))}
        </div>

        {/* Vote Button */}
        <div className="mx-auto max-w-md text-center">
          {hasVoted ? (
            <div className="rounded-lg border-2 border-gold-highlight bg-gradient-to-b from-charcoal-light/90 to-forest-deep/90 p-6 backdrop-blur-sm">
              <p className="text-xl font-bold text-gold-highlight">Vote Cast Successfully! 🎉</p>
              <p className="mt-2 text-sm text-parchment-dark">Returning to categories...</p>
            </div>
          ) : (
            <Button
              onClick={handleVote}
              disabled={!selectedNominee}
              size="lg"
              className="glow-pulse w-full bg-gradient-to-r from-amber-warm to-orange-burnt px-12 py-6 text-xl font-bold text-charcoal transition-all hover:scale-105 hover:from-gold-highlight hover:to-amber-warm disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              Cast Your Vote
            </Button>
          )}
        </div>
      </div>
    </main>
  )
}
