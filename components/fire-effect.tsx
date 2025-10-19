"use client"

export function FireEffect() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96">
      {/* Central firelight glow */}
      <div className="absolute inset-x-0 bottom-0 h-full">
        <div className="flicker absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-amber-warm/20 via-orange-burnt/10 to-transparent blur-3xl" />
        <div
          className="flicker absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-gold-highlight/30 via-amber-warm/15 to-transparent blur-2xl"
          style={{ animationDelay: "0.5s" }}
        />
      </div>
    </div>
  )
}
