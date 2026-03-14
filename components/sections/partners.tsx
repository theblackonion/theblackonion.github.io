"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Partner {
  name: string
  type: string
  description: string
  image: string
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
    image: "/images/collaborators/Team-Akatsuki.jpg"
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
      className="relative py-24 md:py-32 lg:py-40 bg-muted/30"
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
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">(06)</span>
              <div className="w-8 h-px bg-border" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Partners</span>
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
            Our Trusted Collaborators
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
            Partnering with top organizations to fortify global cyber defenses through knowledge, collaboration, and responsible disclosure.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="group bg-background rounded-2xl  border border-border/50 hover:border-border transition-colors duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(60px)",
                transitionProperty: "all",
                transitionDuration: "0.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${0.3 + index * 0.1}s`
              }}
            >
              <div className="p-8 space-y-6 flex flex-col items-center text-center h-full">
                {/* Partner Image */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 rounded-full bg-muted/20"
                  />
                </div>

                {/* Partner Info */}
                <div className="space-y-3 flex-grow flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-light tracking-[-0.01em] text-foreground">
                    {partner.name}
                  </h3>
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wide mx-auto">
                    {partner.type}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}
