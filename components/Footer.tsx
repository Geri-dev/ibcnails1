import React from 'react'
import { InstagramIcon, HeartIcon } from 'lucide-react'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="w-full bg-[hsl(15_25%_18%)] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              IBC <span className="text-[hsl(38_45%_60%)]">Nails</span>
            </h3>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs mb-6">
              A premium beauty destination in the heart of Tirana, designed for girls who value quality, elegance, and perfection.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/ibcnails.al" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4 text-white/80" />
              </a>
              <a href="https://www.tiktok.com/@ibcnails.al" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300" aria-label="TikTok">
                <TikTokIcon className="w-4 h-4 text-white/80" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[{ href: '#home', label: 'Home' }, { href: '#about', label: 'About Us' }, { href: '#services', label: 'Services' }, { href: '#pricing', label: 'Pricing' }, { href: '#gallery', label: 'Gallery' }, { href: '#contact', label: 'Contact' }].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-white/60 hover:text-white transition-colors duration-300">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://www.google.com/maps/dir/?api=1&destination=IBC+Nails+Albania+Lion+Park+Tiranë" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors duration-300">Lion Park, Tiranë, Albania</a>
              </li>
              <li>
                <a href="tel:+355694011152" className="text-sm text-white/60 hover:text-white transition-colors duration-300">+355 69 40 111 52</a>
              </li>
              <li>
                <a href="mailto:info@ibcnails.al" className="text-sm text-white/60 hover:text-white transition-colors duration-300">info@ibcnails.al</a>
              </li>
              <li className="text-sm text-white/60">Mon – Sat: 9 AM – 9 PM</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© 2026 IBC Nails Albania. All rights reserved.</p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Made with <HeartIcon className="w-3 h-3 text-[hsl(350_40%_75%)] fill-[hsl(350_40%_75%)]" /> in Tirana
          </p>
        </div>
      </div>
    </footer>
  )
}
