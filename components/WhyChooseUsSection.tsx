import React from 'react'
import { HomeIcon, UsersIcon, HeartIcon, ShieldCheckIcon, SparklesIcon, MapPinIcon } from 'lucide-react'

export function WhyChooseUsSection() {
  return (
    <section className="w-full py-20 md:py-28 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">The IBC Difference</span>
            <div className="w-8 h-[2px] bg-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="italic text-primary">IBC Nails</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Every detail of our studio is designed to deliver an unparalleled beauty experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-300">
              <HomeIcon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Premium & Calming Interior</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">Designed for ultimate relaxation and comfort. Every corner reflects elegance and tranquility.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/15 transition-colors duration-300">
              <UsersIcon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Professional Nail Artists</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">Skilled artisans with meticulous attention to detail and years of refined expertise.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-300">
              <HeartIcon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Personalized Service</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">Every visit tailored to your preferences. We listen, understand, and deliver perfection.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/15 transition-colors duration-300">
              <ShieldCheckIcon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">High Hygiene Standards</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">Uncompromising cleanliness and sterilization. Your safety and health are our priority.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors duration-300">
              <SparklesIcon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Precision & Finishing</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">Flawless shapes and immaculate finishing touches that set us apart from the rest.</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/15 transition-colors duration-300">
              <MapPinIcon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Heart of Tirana</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">Conveniently located in the center of the city. Luxury beauty just moments away.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
