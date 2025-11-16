'use client'

import Link from 'next/link'
import { Menu, Search, Ticket } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/40 backdrop-blur-md border-b border-white/10">
      <div className="px-8 lg:px-16 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-primary uppercase tracking-widest">
          CineMax
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground/70 hover:text-primary transition">Home</Link>
          <Link href="/" className="text-foreground/70 hover:text-primary transition">Movies</Link>
          <Link href="/" className="text-foreground/70 hover:text-primary transition">Theaters</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-lg transition">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all text-sm">
            <Ticket className="w-4 h-4" />
            Book
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10 p-4 space-y-3 bg-card/50">
          <Link href="/" className="block py-2 text-foreground/70 hover:text-primary">Home</Link>
          <Link href="/" className="block py-2 text-foreground/70 hover:text-primary">Movies</Link>
        </div>
      )}
    </nav>
  )
}
