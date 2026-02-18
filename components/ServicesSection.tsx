import React from 'react'
import { SparklesIcon, HandIcon, PaletteIcon, CrownIcon, StarIcon, GemIcon } from 'lucide-react'

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-20 md:py-28 px-4 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">What We Offer</span>
            <div className="w-8 h-[2px] bg-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="italic text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Indulge in our carefully curated selection of premium nail services, each delivered with precision and artistry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md border border-border/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
              <SparklesIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Manicure</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Precision shaping and flawless polish for beautifully refined hands. Every detail perfected.</p>
          </div>
          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md border border-border/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors duration-300">
              <HandIcon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Pedicure</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Luxurious foot care with meticulous attention to every detail. Pure relaxation and beauty.</p>
          </div>
          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md border border-border/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
              <GemIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Acrylic Nails</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Stunning extensions crafted with precision and artistry. Durable beauty that lasts.</p>
          </div>
          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md border border-border/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors duration-300">
              <PaletteIcon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Custom Nail Designs</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Bespoke nail art tailored to your unique style. Express yourself through exquisite designs.</p>
          </div>
          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md border border-border/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
              <CrownIcon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">VIP Private Rooms</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Exclusive private sessions in our elegant VIP suites. The ultimate in luxury and privacy.</p>
          </div>
          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md border border-border/30 transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors duration-300">
              <StarIcon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Premium Nail Art</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Intricate designs by our master nail artists. Wearable art for the most discerning clients.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
