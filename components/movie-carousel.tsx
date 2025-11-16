'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Clock } from 'lucide-react'
import Link from 'next/link'

export default function MovieCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const movies = [
    {
      id: 1,
      title: 'Stellar Horizon',
      rating: 8.9,
      duration: '148',
      image: '/sci-fi-movie-poster-4k.jpg',
    },
    {
      id: 2,
      title: 'Neural Nexus',
      rating: 8.6,
      duration: '156',
      image: '/cyberpunk-movie-poster-4k.jpg',
    },
    {
      id: 3,
      title: 'Quantum Leap',
      rating: 8.4,
      duration: '142',
      image: '/action-thriller-poster-4k.jpg',
    },
    {
      id: 4,
      title: 'Void Runner',
      rating: 8.7,
      duration: '151',
      image: '/space-adventure-poster-4k.jpg',
    },
    {
      id: 5,
      title: 'Synapse',
      rating: 8.5,
      duration: '138',
      image: '/sci-fi-thriller-poster-4k.jpg',
    },
  ]

  const prev = () => {
    setDirection(-1)
    setCurrent((current - 1 + movies.length) % movies.length)
  }

  const next = () => {
    setDirection(1)
    setCurrent((current + 1) % movies.length)
  }

  return (
    <div className="relative px-4">
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={prev}
          className="absolute left-0 z-20 p-3 bg-card/40 backdrop-blur-md rounded-full hover:bg-primary/20 transition-all duration-300 shadow-lg shadow-primary/50"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>

        <div className="flex gap-4 overflow-hidden px-16">
          {movies.map((movie, index) => {
            const isVisible = index >= current && index < current + 3
            return (
              <div
                key={movie.id}
                className={`flex-shrink-0 transition-all duration-300 ${
                  isVisible ? 'opacity-100' : 'hidden'
                }`}
              >
                <Link href={`/movie/${movie.id}`}>
                  <div className="bg-card/40 backdrop-blur-md border border-white/10 rounded-lg hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 group p-0 overflow-hidden h-80 w-64">
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                      <img
                        src={movie.image || "/placeholder.svg"}
                        alt={movie.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                        <h3 className="text-lg font-bold text-white">{movie.title}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="w-4 h-4 fill-secondary text-secondary" />
                            <span className="text-secondary font-semibold">{movie.rating}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-foreground/70">
                            <Clock className="w-4 h-4" />
                            <span>{movie.duration}m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        <button
          onClick={next}
          className="absolute right-0 z-20 p-3 bg-card/40 backdrop-blur-md rounded-full hover:bg-secondary/20 transition-all duration-300 shadow-lg shadow-primary/50"
        >
          <ChevronRight className="w-6 h-6 text-secondary" />
        </button>
      </div>

      {/* Carousel indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? 'w-8 bg-primary'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
