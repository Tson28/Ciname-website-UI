'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Star, Clock } from 'lucide-react'
import Navigation from '@/components/navigation'

export default function MovieDetail({ params }: { params: { id: string } }) {
  const [selectedShowtime, setSelectedShowtime] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 pt-32 pb-20">
        <Link href="/" className="flex items-center gap-2 text-primary mb-8 hover:text-secondary">
          <ChevronLeft className="w-5 h-5" />
          Back
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card/40 backdrop-blur-md border border-white/10 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-6xl">🎬</div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Stellar Horizon</h1>
              <div className="flex items-center gap-4 text-foreground/70">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <span className="font-bold">8.9/10</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-5 h-5" />
                  <span>148 min</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Synopsis</h3>
              <p className="text-foreground/70">In a distant future where humanity has conquered the stars, a legendary space pilot must navigate through a cosmic anomaly that threatens to unravel reality itself.</p>
            </div>

            <div>
              <span className="font-semibold text-primary">Director:</span> Christopher Nolan
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary uppercase tracking-widest mb-6">Select Showtime</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['10:30 AM', '1:45 PM', '5:15 PM', '8:30 PM'].map((time, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedShowtime(time)}
                className={`bg-card/40 backdrop-blur-md border rounded-lg p-6 text-center transition-all ${
                  selectedShowtime === time
                    ? 'border-primary bg-primary/20 shadow-lg shadow-primary/50'
                    : 'border-white/10 hover:border-primary/50'
                }`}
              >
                <div className="text-2xl font-bold text-white">{time}</div>
                <div className="text-xs text-foreground/60 mt-2">IMAX • 120 seats</div>
              </button>
            ))}
          </div>
        </div>

        {selectedShowtime && (
          <Link href={`/movie/${params.id}/seats`}>
            <button className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50">
              Continue to Seat Selection
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
