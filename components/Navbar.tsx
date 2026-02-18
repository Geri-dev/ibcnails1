'use client'

import React, { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
]

interface NavbarProps {
  onBookNow?: () => void
}

export function Navbar({ onBookNow }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-heading text-2xl font-bold tracking-wide text-foreground">
              IBC <span className="text-accent">Nails</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onBookNow}
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium shadow-sm hover:shadow-md hover:opacity-90 transition-all duration-300"
            >
              Book Now
            </button>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <XIcon className="h-6 w-6 text-foreground" /> : <MenuIcon className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-border px-4 py-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-1.5"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
