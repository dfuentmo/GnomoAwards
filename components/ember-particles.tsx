"use client"
import React from "react"

export function EmberParticles() {
  // Generamos 20 brasas con altura, retraso y duración aleatorios
  const embers = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 4}s`,
    duration: `${4 + Math.random() * 3}s`,
    rise: `${200 + Math.random() * 300}px`, // altura aleatoria entre 200px y 500px
    sway: `${Math.random() * 20 - 10}px`, // movimiento horizontal aleatorio entre -10px y 10px
  }))

  return (
    <div className="pointer-events-none absolute inset-0">
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="absolute bottom-0 h-1 w-1 rounded-full bg-gold-highlight opacity-70 blur-sm"
          style={{
            left: ember.left,
            animation: `ember-rise ${ember.duration} ease-out infinite`,
            animationDelay: ember.delay,
            '--rise-height': ember.rise,
            '--sway-x': ember.sway,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

