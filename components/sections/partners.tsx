"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Partner {
  name: string
  type: string
  description: string
  image: string
  link?: string
}

const partners: Partner[] = [
  {
    name: "Syntax Society",
    type: "Student Innovation Partner",
    description: "CTF & Student Cybersecurity Training",
    image: "/images/collaborators/CS-USA.jpg"
  },
  {
    name: "Team Akatsuki",
    type: "CTF Partner",
    description: "CTF Team",
    image: "/images/collaborators/Team-Akatsuki.jpg",
    link: "https://teamakatsuki.theblackonion.org"
  },
  {
    name: "NPC Computer Club",
    type: "Training & Education Partner",
    description: "Cybersecurity Research & Education",
    image: "/images/collaborators/npc-computer-club.jpg"
  }
]

export function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section
      ref={sectionRef}
      id="partners"
      className="relative py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground"
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
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60">(06)</span>
              <div className="w-8 h-px bg-primary-foreground/30" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60">Partners</span>
            </div>
          </div>

          <div className="lg:col-span-10">
            {/* Section Header */}
            <div className="mb-20 md:mb-32 max-w-3xl">
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.01em] text-primary-foreground mb-8 text-pretty"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transitionProperty: "all",
              transitionDuration: "0.8s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "0.1s"
            }}
          >
            Our Trusted Collaborators
          </h2>
          <p
            className="text-lg text-primary-foreground/70 leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transitionProperty: "all",
              transitionDuration: "0.8s",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "0.2s"
            }}
          >
            Partnering with top organizations to fortify global cyber defenses through knowledge, collaboration, and responsible disclosure.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {partners.map((partner, index) => {
            const PartnerCard = (
              <div
                className="group relative bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10 hover:border-primary-foreground/30 transition-colors duration-500 overflow-hidden h-full flex flex-col"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(60px)",
                  transitionProperty: "all",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${0.3 + index * 0.1}s`
                }}
              >
                <div className="p-8 space-y-6 flex flex-col items-center text-center h-full relative z-10">
                  {/* Partner Image */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500 rounded-full bg-primary-foreground/10"
                    />
                  </div>

                  {/* Partner Info */}
                  <div className="space-y-3 flex-grow flex flex-col justify-center">
                    <h3 className="font-serif text-2xl font-light tracking-[-0.01em] text-primary-foreground">
                      {partner.name}
                    </h3>
                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-medium tracking-wide mx-auto">
                      {partner.type}
                    </div>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed pt-2">
                      {partner.description}
                    </p>
                  </div>
                </div>

                {/* Visit Button revealed on hover */}
                {partner.link && (
                  <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="inline-flex items-center gap-2 px-6 py-2.5 text-xs tracking-[0.15em] uppercase text-primary bg-primary-foreground rounded-full hover:bg-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Visit Partner
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            )

            return partner.link ? (
              <a key={partner.name} href={partner.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
                {PartnerCard}
              </a>
            ) : (
              <div key={partner.name}>{PartnerCard}</div>
            )
          })}
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}
