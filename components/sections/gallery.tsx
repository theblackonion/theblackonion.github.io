"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface GalleryImage {
  id: number
  src: string
  alt: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.JPG-Sm1EVA1isi54XvJ4LsbU4FSqN7lxie.jpeg",
    alt: "The Black Onion at BCS ICT FEST 2025"
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-fZxjwfvyhvBWaY8xTiMjKZvtrsamNm.jpg",
    alt: "Cybersecurity training event at East West University"
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-68Z5V7koNtELmhj8FfjfsOPiAGCCgc.jpg",
    alt: "The Black Onion team gathering"
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-8zFqhjCkmduSrBdO5lcK4cPYEaAflF.jpg",
    alt: "EWU National Robofest 2024 participation"
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-FJlcAdZ58mUO7lPQu66ytHhdCpUw7P.jpg",
    alt: "World Telecommunication and Information Society event"
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-HFVImikYBqgtVZrqijuMUmXfuGnu3y.jpg",
    alt: "HackerOne Bug Bounty event recognition"
  },
  {
    id: 7,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-aWFGRO5OVYawFnxwzTM5P6LsoXSzpP.jpg",
    alt: "Cybersecurity awareness training session"
  },
  {
    id: 8,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-ft3ndml0Toh6qgXY04hmlUQhgSbDl3.png",
    alt: "HackerOne Stage performance"
  },
  {
    id: 9,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-nnlaEBr26VVMqKzciu2ApwmrkRaTeK.jpg",
    alt: "HackerOne Bug Bounty 2024 team photo"
  },
  {
    id: 10,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10.JPG-sFFgaxYfxSCVqq56EN5E6ir7DV9moq.jpeg",
    alt: "World Telecommunication and Information Society conference"
  },
  {
    id: 11,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-UXVprLmCkjjEmmTVOE69mA8ErX2qh1.jpg",
    alt: "Bangladesh Biggest Cybersecurity Event"
  },
  {
    id: 12,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12.JPG-1bLI7ti9Cuf8mXkF1h9Gs8WVbzZaQC.jpeg",
    alt: "Team collaboration at tech event"
  },
  {
    id: 13,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-un8rSo3aLQ7NvUQCXZPmBCeZxwywzS.jpg",
    alt: "The Black Onion team gathering at venue"
  },
  {
    id: 14,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-Gp7ZgdqDsn0imvJLLLl9rRjfXAKLuh.jpg",
    alt: "Team Akatsuki at university event"
  },
  {
    id: 15,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-TWRCjI1AmBb88rCWDi6g4qTG9ksTMj.jpg",
    alt: "Cybersecurity lecture hall event"
  },
  {
    id: 16,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-5AreHobS1wCCpwl0Aby915HWGLta5P.jpg",
    alt: "Flag Hunt 2023 event celebration"
  },
  {
    id: 17,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-lBORX3CF1dObAUTMKnEB5Os4urjv5x.jpg",
    alt: "Team laptops with Black Onion branding"
  },
  {
    id: 18,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-3DqshbXP8amjWfZYDxGCnS093f3p3J.jpg",
    alt: "The Black Onion team group photo"
  }
]

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const selectedImage = galleryImages.find(img => img.id === selectedImageId)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    if (!selectedImageId) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageId(null)
      } else if (e.key === "ArrowRight") {
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImageId)
        if (currentIndex < galleryImages.length - 1) {
          setSelectedImageId(galleryImages[currentIndex + 1].id)
        }
      } else if (e.key === "ArrowLeft") {
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImageId)
        if (currentIndex > 0) {
          setSelectedImageId(galleryImages[currentIndex - 1].id)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageId])

  return (
    <section 
      ref={sectionRef}
      id="gallery"
      className="relative py-32 md:py-48 "
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Section Label */}
          <div className="lg:col-span-2">
            <div 
              className="flex items-center gap-4 whitespace-nowrap lg:sticky lg:top-32 lg:mt-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">(07)</span>
              <div className="w-8 h-px bg-border" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Gallery</span>
            </div>
          </div>

          <div className="lg:col-span-10">
            {/* Section Header */}
            <div className="mb-20 md:mb-32 max-w-3xl">
          <h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.01em] text-foreground mb-8 text-pretty"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transitionProperty: "all",
              transitionDuration: "0.8s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "0.1s"
            }}
          >
            Gallery & Moments
          </h2>
          <p 
            className="text-lg text-muted-foreground leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionProperty: "all",
              transitionDuration: "0.8s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "0.2s"
            }}
          >
            Capturing our journey through cybersecurity competitions, conferences, and team collaborations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative  aspect-square cursor-pointer"
              onClick={() => setSelectedImageId(image.id)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transitionProperty: "all",
                transitionDuration: "0.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${0.25 + (index % 9) * 0.05}s`
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImageId(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImageId(null)}
            className="absolute top-6 right-6 z-60 text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="Close image"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          {galleryImages.findIndex(img => img.id === selectedImageId) > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                const currentIndex = galleryImages.findIndex(img => img.id === selectedImageId)
                setSelectedImageId(galleryImages[currentIndex - 1].id)
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {galleryImages.findIndex(img => img.id === selectedImageId) < galleryImages.length - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                const currentIndex = galleryImages.findIndex(img => img.id === selectedImageId)
                setSelectedImageId(galleryImages[currentIndex + 1].id)
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image Container */}
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-6 text-white text-sm">
            {galleryImages.findIndex(img => img.id === selectedImageId) + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
