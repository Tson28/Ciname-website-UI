'use client'

import Link from 'next/link'
import { Star, Clock } from 'lucide-react'

interface MovieGridProps {
  count?: number
  comingSoon?: boolean
}

export default function MovieGrid({ count = 8, comingSoon = false }: MovieGridProps) {
  const movies = Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: comingSoon ? `Coming Soon ${i + 1}` : `Movie ${i + 1}`,
    rating: 8.0 + Math.random() * 1.5,
    duration: `${120 + i * 5}`,
    image: `/placeholder.svg?height=300&width=220&query=movie-poster-${i}-4k`,
  }))

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <Link key={movie.id} href={`/movie/${movie.id}`}>
          <div className="bg-card/40 backdrop-blur-md border border-white/10 rounded-lg hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 group p-0 overflow-hidden h-72 w-full">
            <div className="relative w-full h-full">
              <img
                src={movie.image || "/placeholder.svg"}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-sm font-bold text-white">{movie.title}</h3>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-secondary text-secondary" />
                    <span className="text-secondary">{movie.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{movie.duration}m</span>
                  </div>
                </div>
              </div>

              {comingSoon && (
                <div className="absolute top-3 right-3 bg-secondary/80 text-white px-3 py-1 text-xs font-bold rounded-full">
                  SOON
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
