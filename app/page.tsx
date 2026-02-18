'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ServicesSection } from '@/components/ServicesSection'
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { PricingSection } from '@/components/PricingSection'
import { GallerySection } from '@/components/GallerySection'
import { BookingSection } from '@/components/BookingSection'
import { Footer } from '@/components/Footer'
import { BookingPopup } from '@/components/BookingPopup'

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar onBookNow={() => setBookingOpen(true)} />
      <HeroSection onBookAppointment={() => setBookingOpen(true)} />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <PricingSection />
      <GallerySection />
      <BookingSection onBookNow={() => setBookingOpen(true)} />
      <Footer />
      <BookingPopup isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  )
}
