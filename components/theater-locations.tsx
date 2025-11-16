'use client'

import { MapPin, Phone, Clock } from 'lucide-react'

export default function TheaterLocations() {
  const theaters = [
    {
      id: 1,
      name: 'CineMax Downtown',
      location: '123 Main Street, City Center',
      phone: '+1 (555) 123-4567',
      screens: 12,
      hours: '11:00 AM - 11:00 PM',
    },
    {
      id: 2,
      name: 'CineMax Uptown',
      location: '456 Park Avenue, Uptown District',
      phone: '+1 (555) 234-5678',
      screens: 8,
      hours: '12:00 PM - 10:00 PM',
    },
    {
      id: 3,
      name: 'CineMax Riverside',
      location: '789 River Road, Riverside',
      phone: '+1 (555) 345-6789',
      screens: 10,
      hours: '10:00 AM - 11:30 PM',
    },
    {
      id: 4,
      name: 'CineMax Premium',
      location: '321 Elite Plaza, Premium District',
      phone: '+1 (555) 456-7890',
      screens: 6,
      hours: '2:00 PM - 12:00 AM',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {theaters.map((theater) => (
        <div key={theater.id} className="bg-card/40 backdrop-blur-md border border-white/10 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all p-8 space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-white">{theater.name}</h3>
            <div className="text-xs bg-primary/30 text-primary px-3 py-1 rounded-full font-semibold">
              {theater.screens} Screens
            </div>
          </div>
          
          <div className="space-y-3 text-foreground/70">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p>{theater.location}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
              <p>{theater.phone}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <p>{theater.hours}</p>
            </div>
          </div>

          <button className="w-full mt-4 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold text-sm">
            Get Directions
          </button>
        </div>
      ))}
    </div>
  )
}
