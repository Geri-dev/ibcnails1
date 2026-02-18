'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react'

const testimonials = [
  { quote: "Best nail salon in Tirana! The attention to detail is incredible. I've never felt so pampered.", name: 'Elisa M.', role: 'Regular Client' },
  { quote: "Amazing attention to detail. My nails have never looked better! The artists here are true professionals.", name: 'Sara K.', role: 'VIP Member' },
  { quote: "Very professional and meticulous. I won't go anywhere else. IBC Nails is in a league of its own.", name: 'Arta B.', role: 'Loyal Client' },
  { quote: 'Beautiful and calming environment. It feels like a spa retreat. The interior is absolutely stunning.', name: 'Dea L.', role: 'First-time Visitor' },
  { quote: 'Best nail service in Albania. Truly a premium experience from start to finish. Highly recommend!', name: 'Mira T.', role: 'Regular Client' },
]

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const next = useCallback(() => setActive((prev) => (prev + 1) % testimonials.length), [])
  const prev = useCallback(() => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length), [])
  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="w-full py-20 md:py-28 px-4" style={{ background: 'linear-gradient(180deg, hsl(350 30% 96%) 0%, hsl(25 40% 96%) 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Testimonials</span>
            <div className="w-8 h-[2px] bg-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="italic text-primary">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            We&apos;re proud to deliver experiences that our clients love. Here&apos;s what they have to say.
          </p>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-6 left-6 opacity-10">
              <QuoteIcon className="w-16 h-16 text-primary" />
            </div>
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent fill-accent" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="min-h-[100px] flex items-center justify-center">
              <p className="font-heading text-xl md:text-2xl text-foreground italic leading-relaxed transition-opacity duration-500">
                &quot;{testimonials[active].quote}&quot;
              </p>
            </div>
            <div className="mt-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="font-heading text-lg font-semibold text-primary">{testimonials[active].name.charAt(0)}</span>
              </div>
              <p className="font-semibold text-foreground text-base">{testimonials[active].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[active].role}</p>
            </div>
          </div>
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:bg-primary/5" aria-label="Previous testimonial">
            <ChevronLeftIcon className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:bg-primary/5" aria-label="Next testimonial">
            <ChevronRightIcon className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-300 ${i === active ? 'w-8 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-primary/25 hover:bg-primary/40'}`} aria-label={`Go to testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-md mx-auto">
          We value every client&apos;s feedback and continuously strive to elevate our service quality.
        </p>
      </div>
    </section>
  )
}
