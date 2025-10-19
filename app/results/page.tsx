import Link from "next/link"
import { FireEffect } from "@/components/fire-effect"
import { EmberParticles } from "@/components/ember-particles"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Trophy, Crown, Medal, Award } from "lucide-react"

// Mock results data - in a real app, this would come from a database
const results = [
  {
    category: "Best Clip of the Year",
    winner: {
      name: "The Great Gnome Escape",
      description: "When the entire chat helped navigate through the impossible maze",
      votes: 1247,
      percentage: 42,
      imageUrl: "/epic-gaming-moment.jpg",
    },
    runnerUp: {
      name: "Unexpected Victory",
      votes: 891,
      percentage: 30,
    },
  },
  {
    category: "Most Wholesome Moment",
    winner: {
      name: "Community Charity Stream",
      description: "When we all came together to support a great cause",
      votes: 1523,
      percentage: 51,
      imageUrl: "/charity-celebration.jpg",
    },
    runnerUp: {
      name: "Birthday Surprise",
      votes: 734,
      percentage: 25,
    },
  },
  {
    category: "Best New Emote",
    winner: {
      name: "gnomeLove",
      description: "The heart emote that expresses all the love",
      votes: 1089,
      percentage: 38,
      imageUrl: "/heart-emoji.png",
    },
    runnerUp: {
      name: "gnomeHype",
      votes: 956,
      percentage: 33,
    },
  },
  {
    category: "Most Hype Moment",
    winner: {
      name: "Raid Train Arrival",
      description: "When the biggest raid of the year rolled in",
      votes: 1678,
      percentage: 48,
      imageUrl: "/crowd-celebration.jpg",
    },
    runnerUp: {
      name: "Subathon Milestone",
      votes: 1123,
      percentage: 32,
    },
  },
  {
    category: "Community MVP",
    winner: {
      name: "ModMaster3000",
      description: "Always there to keep chat positive and welcoming",
      votes: 1834,
      percentage: 55,
      imageUrl: "/moderator-badge.jpg",
    },
    runnerUp: {
      name: "ClipChampion",
      votes: 892,
      percentage: 27,
    },
  },
  {
    category: "Funniest Moment",
    winner: {
      name: "The Accidental Reveal",
      description: "When the secret was accidentally spoiled in the best way",
      votes: 1456,
      percentage: 44,
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    runnerUp: {
      name: "Chat Trolls Back",
      votes: 1089,
      percentage: 33,
    },
  },
]

const totalVotes = results.reduce((sum, r) => sum + r.winner.votes, 0)

export default function ResultsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-charcoal via-forest-deep to-charcoal">
      {/* Forest background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/dark-forest-silhouette-night.jpg')] bg-cover bg-center" />
      </div>

      <FireEffect />
      <EmberParticles />

      <div className="relative z-10 px-4 py-12">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-6xl">
          <Link href="/">
            <Button
              variant="ghost"
              className="mb-6 text-parchment-dark hover:bg-charcoal-light/50 hover:text-parchment"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Clearing
            </Button>
          </Link>

          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-highlight to-amber-warm shadow-[0_0_40px_rgba(244,213,128,0.6)]">
                <Trophy className="h-10 w-10 text-charcoal" />
              </div>
            </div>
            <h1 className="mb-4 text-5xl font-bold tracking-wider text-gold-highlight drop-shadow-[0_0_30px_rgba(244,213,128,0.5)] md:text-6xl">
              Award Winners
            </h1>
            <p className="text-lg text-parchment-dark">Celebrating the best of our community</p>
          </div>

          {/* Stats */}
          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-3">
            <Card className="border-2 border-amber-warm/30 bg-gradient-to-b from-charcoal-light/90 to-forest-deep/90 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center py-6">
                <div className="text-4xl font-bold text-gold-highlight">{totalVotes.toLocaleString()}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Total Votes</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-amber-warm/30 bg-gradient-to-b from-charcoal-light/90 to-forest-deep/90 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center py-6">
                <div className="text-4xl font-bold text-gold-highlight">{results.length}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-amber-warm/30 bg-gradient-to-b from-charcoal-light/90 to-forest-deep/90 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center justify-center py-6">
                <div className="text-4xl font-bold text-gold-highlight">2025</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">Awards Year</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Winners */}
        <div className="mx-auto max-w-6xl space-y-8">
          {results.map((result, index) => (
            <Card
              key={result.category}
              className="overflow-hidden border-2 border-amber-warm/30 bg-gradient-to-b from-charcoal-light/90 to-forest-deep/90 backdrop-blur-sm"
            >
              <CardHeader className="border-b border-amber-warm/20">
                <div className="flex items-center gap-3">
                  {index === 0 ? (
                    <Crown className="h-6 w-6 text-gold-highlight" />
                  ) : index === 1 ? (
                    <Medal className="h-6 w-6 text-amber-warm" />
                  ) : (
                    <Award className="h-6 w-6 text-orange-burnt" />
                  )}
                  <CardTitle className="text-2xl text-gold-highlight">{result.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-[300px_1fr]">
                  {/* Winner Image */}
                  <div className="overflow-hidden rounded-lg border-2 border-gold-highlight/50 shadow-[0_0_20px_rgba(244,213,128,0.3)]">
                    <img
                      src={result.winner.imageUrl || "/placeholder.svg"}
                      alt={result.winner.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Winner Details */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-2 flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-gold-highlight" />
                      <span className="text-sm font-semibold uppercase tracking-wider text-amber-warm">Winner</span>
                    </div>
                    <h3 className="mb-2 text-3xl font-bold text-gold-highlight">{result.winner.name}</h3>
                    <p className="mb-4 text-base leading-relaxed text-parchment-dark">{result.winner.description}</p>

                    {/* Vote Stats */}
                    <div className="space-y-3">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span className="font-semibold text-parchment">Winner</span>
                          <span className="text-gold-highlight">
                            {result.winner.votes.toLocaleString()} votes ({result.winner.percentage}%)
                          </span>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-charcoal">
                          <div
                            className="h-full bg-gradient-to-r from-gold-highlight to-amber-warm shadow-[0_0_10px_rgba(244,213,128,0.5)]"
                            style={{ width: `${result.winner.percentage}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span className="font-semibold text-parchment-dark">Runner-up: {result.runnerUp.name}</span>
                          <span className="text-parchment-dark">
                            {result.runnerUp.votes.toLocaleString()} votes ({result.runnerUp.percentage}%)
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-charcoal">
                          <div
                            className="h-full bg-gradient-to-r from-amber-warm/60 to-orange-burnt/60"
                            style={{ width: `${result.runnerUp.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Message */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <Card className="border-2 border-amber-warm/30 bg-gradient-to-b from-charcoal-light/90 to-forest-deep/90 backdrop-blur-sm">
            <CardContent className="py-8">
              <h3 className="mb-3 text-2xl font-bold text-gold-highlight">Thank You, Wildgnomos Community!</h3>
              <p className="leading-relaxed text-parchment-dark">
                These awards celebrate the incredible moments, creativity, and connections that make our community
                special. Here's to another year of adventures together around the fire!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
