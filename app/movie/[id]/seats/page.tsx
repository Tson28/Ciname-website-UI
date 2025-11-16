'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Check } from 'lucide-react'
import Navigation from '@/components/navigation'

export default function SeatSelection({ params }: { params: { id: string } }) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  const seatsPerRow = 12
  const price = 15.99

  const generateSeats = () => {
    const seats = []
    const reservedSeats = ['A5', 'A6', 'B3', 'C7', 'D8']
    rows.forEach((row) => {
      for (let i = 1; i <= seatsPerRow; i++) {
        const seatId = `${row}${i}`
        seats.push({
          id: seatId,
          row,
          number: i,
          reserved: reservedSeats.includes(seatId),
        })
      }
    })
    return seats
  }

  const allSeats = generateSeats()
  const totalPrice = selectedSeats.length * price

  const toggleSeat = (seatId: string) => {
    setSelectedSeats(prev =>
      prev.includes(seatId) ? prev.filter(id => id !== seatId) : [...prev, seatId]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-8 lg:px-16 pt-32 pb-20">
        <Link href={`/movie/${params.id}`} className="flex items-center gap-2 text-primary mb-8 hover:text-secondary">
          <ChevronLeft className="w-5 h-5" />
          Back to Movie
        </Link>

        <h1 className="text-4xl font-bold mb-2">Select Your Seats</h1>
        <p className="text-foreground/60 mb-12">Stellar Horizon • Premium IMAX • 8:30 PM</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Seat Map */}
          <div className="lg:col-span-2">
            <div className="bg-card/40 backdrop-blur-md border border-white/10 rounded-lg p-12">
              <div className="text-center mb-12">
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mb-4" />
                <p className="text-sm text-foreground/60 uppercase tracking-widest font-bold">Screen</p>
              </div>

              <div className="space-y-3">
                {rows.map((row) => (
                  <div key={row} className="flex items-center justify-center gap-3">
                    <span className="w-6 text-sm font-bold text-foreground/60">{row}</span>
                    <div className="flex gap-2">
                      {allSeats
                        .filter((seat) => seat.row === row)
                        .map((seat) => (
                          <button
                            key={seat.id}
                            onClick={() => !seat.reserved && toggleSeat(seat.id)}
                            disabled={seat.reserved}
                            className={`w-9 h-9 rounded transition-all text-xs font-bold flex items-center justify-center border backdrop-blur-md ${
                              seat.reserved
                                ? 'bg-muted/30 border-muted/30 cursor-not-allowed'
                                : selectedSeats.includes(seat.id)
                                ? 'bg-primary/40 border-primary shadow-lg shadow-primary/50 text-primary'
                                : 'bg-card/40 border-white/10 text-foreground/60 hover:border-primary'
                            }`}
                          >
                            {selectedSeats.includes(seat.id) ? <Check className="w-4 h-4" /> : seat.number}
                          </button>
                        ))}
                    </div>
                    <span className="w-6 text-sm font-bold text-foreground/60">{row}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 mt-8 pt-6 flex gap-8 justify-center text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-card/40 border border-white/10 rounded" />
                  Available
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-primary/40 border border-primary rounded" />
                  Selected
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-muted/30 border border-muted/30 rounded" />
                  Reserved
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card/40 backdrop-blur-md border border-white/10 rounded-lg p-8 sticky top-32 space-y-6">
              <h3 className="font-bold text-lg">Order Summary</h3>

              {selectedSeats.length > 0 ? (
                <>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Seats:</span>
                      <span className="font-semibold text-primary">{selectedSeats.length}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground/70">{selectedSeats.sort().join(', ')}</span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between">
                      <span className="text-foreground/70">Total:</span>
                      <span className="text-primary font-bold">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50">
                    Proceed to Payment
                  </button>
                </>
              ) : (
                <p className="text-center text-foreground/60 py-8">Select seats to continue</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
