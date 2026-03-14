"use client"

import { useEffect, useRef, useState } from "react"
import { ImageReveal } from "@/components/ui/image-reveal"

export function PhilosophySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const principles = [
    {
      number: "01",
      title: "Ethical Hacking",
      description: "We conduct all our activities within legal and ethical boundaries, always with permission and for defensive purposes."
    },
    {
      number: "02",
      title: "Knowledge Sharing",
      description: "We believe in sharing knowledge with the community to raise the overall security awareness and capabilities."
    },
    {
      number: "03",
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in cybersecurity through research and development."
    },
    {
      number: "04",
      title: "Collaboration",
      description: "We work closely with organizations and the security community to build a safer digital world together."
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-32 md:py-48 bg-primary text-primary-foreground "
    >
      {/* Architectural Background Lines */}
      <div className="absolute inset-0 pointer-events-none ">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <line
            x1="0" y1="200" x2="1920" y2="400"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-5"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: isVisible ? 0 : 2000,
              transition: "stroke-dashoffset 2s ease-out"
            }}
          />
          <line
            x1="0" y1="600" x2="1920" y2="300"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-5"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: isVisible ? 0 : 2000,
              transitionProperty: "stroke-dashoffset",
              transitionDuration: "2.5s",
              transitionTimingFunction: "ease-out",
              transitionDelay: "0.3s"
            }}
          />
          <line
            x1="0" y1="900" x2="1920" y2="700"
            stroke="currentColor"
            strokeWidth="1"
            className="opacity-5"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: isVisible ? 0 : 2000,
              transitionProperty: "stroke-dashoffset",
              transitionDuration: "2s",
              transitionTimingFunction: "ease-out",
              transitionDelay: "0.6s"
            }}
          />
        </svg>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
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
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60">(02)</span>
              <div className="w-8 h-px bg-primary-foreground/30" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60">Core Values</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-10">
            {/* Section Header */}
            <div className="mb-20 md:mb-32">
              <h2
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.01em] max-w-3xl text-pretty"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionProperty: "all",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0.1s"
                }}
              >
                Our Core Values — The principles that guide our work
              </h2>
            </div>

            {/* Principles Grid */}
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
              {principles.map((principle, index) => (
                <div
                  key={principle.number}
                  className="group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${0.2 + index * 0.1}s`
                  }}
                >
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-xs tracking-wider text-primary-foreground/40 pt-1">
                      {principle.number}
                    </span>
                    <div className="space-y-4">
                      <h3 className="font-serif text-2xl md:text-3xl font-light text-primary-foreground group-hover:text-accent transition-colors duration-500">
                        {principle.title}
                      </h3>
                      <p className="text-base leading-relaxed text-primary-foreground/70">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Image */}
        <div
          className="mt-32 md:mt-48 relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(60px)",
            transitionProperty: "all",
            transitionDuration: "1s",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "0.6s"
          }}
        >
          <div className="relative aspect-[21/15.35] ">
            <ImageReveal
              src="https://cdn.sanity.io/images/sgh3154e/production/5d19bf1fdd2fb0ca743eecc08101abd1eee867f5-2048x1536.jpg"
              alt="The Black Onion team at cybersecurity event"
              className="object-cover"
              sizes="(max-width: 1800px) 100vw, 1800px"
              delay={600}
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>

          {/* Image Caption */}
          <div className="absolute -bottom-8 right-0 bg-primary px-6 py-4">
            <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60">
              Team collaboration — Where expertise meets innovation
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
