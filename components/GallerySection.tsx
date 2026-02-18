'use client'

import React, { useState, useRef } from 'react'

const galleryItems = [
  { type: 'video' as const, src: '/videos/nails-video-1.mp4', alt: 'Nail art' },
  { type: 'video' as const, src: '/videos/nails-video-2.mp4', alt: 'Nail art' },
  { type: 'video' as const, src: '/videos/nails-video-3.mp4', alt: 'Nail art' },
  { type: 'image' as const, src: '/images/details-nails-1.webp', alt: 'Nail details' },
  { type: 'image' as const, src: '/images/details-nails-2.webp', alt: 'Nail details' },
  { type: 'image' as const, src: '/images/eksperienca.webp', alt: 'Experience' },
]

export function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [fullscreenVideo, setFullscreenVideo] = useState<number | null>(null)
  const [videoErrors, setVideoErrors] = useState<Set<number>>(new Set())
  const fullscreenRef = useRef<HTMLVideoElement>(null)

  const handleVideoClick = (index: number) => {
    if (galleryItems[index].type !== 'video') return
    setFullscreenVideo(index)
  }

  const closeFullscreen = () => {
    if (fullscreenRef.current) fullscreenRef.current.pause()
    setFullscreenVideo(null)
  }

  return (
    <section id="gallery" className="w-full py-20 md:py-28 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Portfolio</span>
            <div className="w-8 h-[2px] bg-accent" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="italic text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            A glimpse into the artistry and elegance that defines every visit to IBC Nails.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-primary/10 to-accent/10">
                {item.type === 'image' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = '/images/placeholder.svg'
                    }}
                  />
                ) : videoErrors.has(index) ? (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm text-center px-4">Video not loaded. Add file to public/videos/</span>
                  </div>
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    autoPlay
                    onClick={(e) => { e.stopPropagation(); handleVideoClick(index) }}
                    onError={() => setVideoErrors((prev) => new Set(prev).add(index))}
                  />
                )}
                {item.type === 'video' && (
                  <div
                    onClick={(e) => { e.stopPropagation(); handleVideoClick(index) }}
                    className={`absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex items-end justify-center pb-6 transition-opacity duration-500 cursor-pointer ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <span className="font-heading text-white text-lg font-semibold drop-shadow-lg">Click to watch fullscreen</span>
                  </div>
                )}
                {item.type === 'image' && (
                  <div className={`absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent flex items-end justify-center pb-6 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="font-heading text-white text-lg font-semibold drop-shadow-lg">View</span>
                  </div>
                )}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-white/0 group-hover:ring-white/30 transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {fullscreenVideo !== null && galleryItems[fullscreenVideo]?.type === 'video' && (
        <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center" onClick={closeFullscreen}>
          <button onClick={closeFullscreen} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors" aria-label="Close">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video ref={fullscreenRef} src={galleryItems[fullscreenVideo].src} className="max-w-full max-h-full object-contain" controls autoPlay playsInline onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
