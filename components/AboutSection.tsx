import React from 'react'
import { StarIcon, ClockIcon } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Eksperienca-1.webp"
              alt="IBC Nails Studio"
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-lg"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = '/images/placeholder.svg'
              }}
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-accent/10 -z-10" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">About Us</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              About <span className="italic text-primary">IBC Nails</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-base">
              IBC Nails Albania is a premium nail studio nestled in the heart of Tirana, designed for girls who appreciate elegance, quality, and perfection. Our beautifully crafted interior creates a calming sanctuary where every detail has been thoughtfully considered.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              From the moment you step inside, you&apos;ll experience a world of refined beauty — where professional nail artists deliver meticulous work with the highest hygiene standards. Whether it&apos;s a classic manicure or bespoke nail art, we ensure every visit is a luxurious escape.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-border/50">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <StarIcon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <p className="text-sm font-medium text-foreground">4.4 ⭐ (13 reviews)</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-border/50">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ClockIcon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Hours</p>
                  <p className="text-sm font-medium text-foreground">Open until 9 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
