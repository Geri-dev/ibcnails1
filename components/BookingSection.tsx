'use client'

import React from 'react'
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon, ArrowRightIcon } from 'lucide-react'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  )
}

interface BookingSectionProps {
  onBookNow?: () => void
}

export function BookingSection({ onBookNow }: BookingSectionProps) {
  return (
    <section id="contact" className="w-full py-20 md:py-28 px-4" style={{ background: 'linear-gradient(180deg, hsl(25 40% 96%) 0%, hsl(350 30% 95%) 50%, hsl(25 50% 96%) 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Get in Touch</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Ready for <span className="italic text-primary">Perfect Nails</span>?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Book your premium nail experience today and discover why IBC Nails is Tirana&apos;s most loved nail studio. Your perfect nails are just one appointment away.
            </p>
            <button onClick={onBookNow} className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-10 py-4 text-base font-medium shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300 group mb-10">
              Book Your Appointment
              <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
              <a href="tel:+355694011152" className="flex items-center gap-4 w-full hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">Call Us</p>
                  <p className="text-sm font-medium text-foreground">+355 69 40 111 52</p>
                </div>
              </a>
              <a href="mailto:info@ibcnails.al" className="flex items-center gap-4 w-full hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">info@ibcnails.al</p>
                </div>
              </a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=IBC+Nails+Albania+Lion+Park+Tiranë" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">Visit Us</p>
                  <p className="text-sm font-medium text-foreground">Lion Park, Tiranë</p>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-3 mt-8 justify-center lg:justify-start">
              <a href="https://www.instagram.com/ibcnails.al" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md hover:bg-primary/5 transition-all duration-300 group" aria-label="Follow us on Instagram">
                <InstagramIcon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.tiktok.com/@ibcnails.al" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md hover:bg-primary/5 transition-all duration-300 group" aria-label="Follow us on TikTok">
                <TikTokIcon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14873.727173903793!2d19.817992878338178!3d41.317660100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031a47374eb03%3A0xebdf1a8125b5513!2sIBC%20Nails%20Albania!5e1!3m2!1sen!2s!4v1771357929294!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IBC Nails Albania Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
