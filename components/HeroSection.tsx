'use client'

import React, { useState } from 'react'
import { ArrowRightIcon } from 'lucide-react'

const HERO_POSTER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23f5e0db' width='400' height='500'/%3E%3Ctext x='50%25' y='50%25' fill='%23999' font-family='serif' font-size='24' text-anchor='middle' dy='.3em'%3ELuxury Awaits%3C/text%3E%3C/svg%3E"

interface HeroSectionProps {
  onBookAppointment?: () => void
}

export function HeroSection({ onBookAppointment }: HeroSectionProps) {
  const [videoError, setVideoError] = useState(false)
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(25 60% 97%) 0%, hsl(350 30% 95%) 50%, hsl(25 60% 97%) 100%)',
      }}
    >
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute top-40 right-1/4 w-3 h-3 rounded-full bg-accent/40 animate-pulse" />
      <div className="absolute top-60 left-1/4 w-2 h-2 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/3 w-4 h-4 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-1 lg:order-none">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">Premium Nail Studio in Tirana</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Premium Nail <span className="italic text-primary">Experience</span> in Tirana
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-light max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Manicure&ensp;•&ensp;Pedicure&ensp;•&ensp;VIP Rooms&ensp;•&ensp;Custom Nail Designs
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={onBookAppointment}
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300 group"
              >
                Book Your Appointment
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-foreground/20 text-foreground px-8 py-4 text-base font-medium hover:border-primary hover:text-primary transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
            <div className="flex items-center gap-6 mt-12 justify-center lg:justify-start">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">4.4</span>
              </div>
              <div className="w-px h-5 bg-border" />
              <span className="text-sm text-muted-foreground">Trusted by hundreds of clients</span>
            </div>
          </div>
          <div className="flex justify-center items-center relative order-2 lg:order-none">
            <div className="relative w-full max-w-lg aspect-[4/5] max-h-[400px] lg:max-h-none">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-black/5">
                {!videoError ? (
                  <video
                    src="/videos/main-video.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={HERO_POSTER}
                    onError={() => setVideoError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-[#f5e0db]" />
                )}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-none">
                  <span className="font-heading text-xl text-white drop-shadow-lg italic">Luxury Awaits</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg">💅</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Premium Service</p>
                  <p className="text-xs text-muted-foreground">VIP Rooms Available</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <span className="text-accent text-lg">⭐</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">4.4</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
