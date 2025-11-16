'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Star, Clock, Ticket, MapPin, Award } from 'lucide-react'
import Navigation from '@/components/navigation'

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState('all')
  const genres = ['All', 'Action', 'Drama', 'Sci-Fi', 'Horror', 'Comedy']

  const nowShowingMovies = [
    { id: 1, title: 'Nexus Infinite', rating: 8.9, image: '/movie-1-sci-fi-4k.jpg', genre: 'sci-fi' },
    { id: 2, title: 'Crimson Protocol', rating: 8.7, image: '/movie-2-action-4k.jpg', genre: 'action' },
    { id: 3, title: 'Beyond Horizons', rating: 8.5, image: '/movie-3-scifi-adventure-4k.jpg', genre: 'sci-fi' },
  ]

  const filteredMovies = selectedGenre === 'all' 
    ? nowShowingMovies 
    : nowShowingMovies.filter(m => m.genre === selectedGenre)

  const comingSoonMovies = [
    { id: 4, title: 'Temporal Shift', image: '/coming-soon-1-4k.jpg' },
    { id: 5, title: 'Eclipse Rising', image: '/coming-soon-2-4k.jpg' },
    { id: 6, title: 'Void Chronicles', image: '/coming-soon-3-4k.jpg' },
    { id: 7, title: 'Quantum Nexus', image: '/coming-soon-4-4k.jpg' },
  ]

  const showtimes = [
    { time: '2:30 PM', seats: 145 },
    { time: '5:15 PM', seats: 42 },
    { time: '8:00 PM', seats: 8 },
    { time: '11:00 PM', seats: 98 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative w-full h-screen overflow-hidden group">
        <Image
          src="/hero-blockbuster-4k.jpg"
          alt="Epic Blockbuster Cinema"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="max-w-2xl px-8 lg:px-16 z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md border border-primary/50 rounded-lg w-fit hover:bg-primary/30 transition-colors">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">Now Showing</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-black leading-tight text-balance">
                <span className="text-primary">NEXUS</span>
                <span className="block text-white">INFINITE</span>
                <span className="text-secondary">CINEMA</span>
              </h1>
              
              <p className="text-xl text-foreground/80 leading-relaxed max-w-md">
                Experience premium cinema with cutting-edge IMAX technology, ultra-comfort seating, and immersive 4K projection
              </p>
              
              <div className="flex gap-4 pt-4 flex-wrap">
                <Link href="/movie/1" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
                  <Ticket className="w-5 h-5" />
                  Book Now
                </Link>
                <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genre Filter */}
      <section className="relative z-20 -mt-20 px-8 lg:px-16 pb-16">
        <div className="flex gap-3 flex-wrap">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre.toLowerCase())}
              className={`px-6 py-2 rounded-full font-semibold border backdrop-blur-md transition-all duration-500 ease-out transform ${
                selectedGenre === genre.toLowerCase()
                  ? 'bg-primary/30 border-primary text-primary shadow-lg shadow-primary/50 scale-105'
                  : 'bg-card/40 border-white/10 text-foreground/60 hover:text-foreground hover:border-white/20 hover:scale-102'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Showtime Schedule */}
      <section className="px-8 lg:px-16 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary uppercase tracking-widest mb-4">Quick Showtimes</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {showtimes.map((show, idx) => (
            <div key={idx} className="bg-card/40 backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all group cursor-pointer">
              <div className="text-lg font-bold text-primary mb-2">{show.time}</div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Clock className="w-4 h-4" />
                <span>{show.seats} seats left</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Movie Carousel */}
      <section className="px-8 lg:px-16 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary uppercase tracking-widest mb-4">Now Showing</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, idx) => (
              <Link key={`${selectedGenre}-${movie.id}`} href={`/movie/${movie.id}`}>
                <div className="bg-card/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden relative">
                    <Image
                      src={movie.image || "/placeholder.svg"}
                      alt={movie.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{movie.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-secondary text-secondary" />
                        <span className="text-sm font-semibold">{movie.rating}/10</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-foreground/60">No movies in this genre at the moment</p>
            </div>
          )}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="px-8 lg:px-16 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary uppercase tracking-widest mb-4">Coming Soon</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-500">
          {comingSoonMovies.map((movie, idx) => (
            <div key={movie.id} className="bg-card/40 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden hover:border-secondary/50 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                <Image
                  src={movie.image || "/placeholder.svg"}
                  alt={movie.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <span className="relative bg-gradient-to-r from-secondary to-primary text-white px-3 py-1 text-xs font-bold rounded-full">COMING</span>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold group-hover:text-secondary transition-colors">{movie.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="px-8 lg:px-16 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary uppercase tracking-widest mb-4">Special Offers</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md border border-primary/30 rounded-lg p-8 hover:border-primary/50 transition-all">
            <Award className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">VIP Membership</h3>
            <p className="text-foreground/70 mb-4">Get exclusive access to advanced bookings and premium discounts</p>
            <button className="text-primary font-semibold hover:text-secondary transition-colors">Learn More →</button>
          </div>
          <div className="bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-md border border-secondary/30 rounded-lg p-8 hover:border-secondary/50 transition-all">
            <Ticket className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Student Discount</h3>
            <p className="text-foreground/70 mb-4">20% off on weekday tickets with valid student ID</p>
            <button className="text-secondary font-semibold hover:text-primary transition-colors">Get Voucher →</button>
          </div>
        </div>
      </section>

      {/* Theater Locations */}
      <section className="px-8 lg:px-16 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-primary uppercase tracking-widest mb-4">Our Locations</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: 'Downtown IMAX', city: 'New York' },
            { name: 'Midtown Cineplex', city: 'Los Angeles' },
            { name: 'Uptown Premium', city: 'Chicago' },
            { name: 'Westfield IMAX', city: 'Miami' },
          ].map((theater, idx) => (
            <div key={idx} className="bg-card/40 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-primary/50 hover:bg-card/60 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{theater.name}</h3>
                  <p className="text-sm text-foreground/60 mb-3">{theater.city}</p>
                  <button className="text-primary text-sm font-semibold hover:text-secondary transition-colors">Get Directions →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-md border-t border-white/10 mt-20 px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-black text-primary mb-2">CineMax</div>
            <p className="text-foreground/60 text-sm">Premium cinema experience with cutting-edge technology</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors" />
              <button className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors" />
              <button className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors" />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-foreground/60 text-sm">© 2025 CineMax. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
