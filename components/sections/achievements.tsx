"use client"

import { useEffect, useRef, useState } from "react"

interface Achievement {
  rank: string
  event: string
  type: string
}

const achievements: Achievement[] = [
  { rank: "Top 100", event: "Bugcrowd x BlackHat USA CTF 2025 (Two Members)", type: "Awards" },
  { rank: "2nd", event: "MayaCTF 2023", type: "CTF Competition" },
  { rank: "4th", event: "National Antrajal 2023", type: "National Competition" },
  { rank: "6th", event: "CUET StealthFlags 2025 National CTF", type: "National CTF" },
  { rank: "7th", event: "SMP CTF 2024", type: "CTF Competition" },
  { rank: "7th", event: "Invisible CTF 2023", type: "CTF Competition" },
  { rank: "13th", event: "WTISD Hackathon 2025", type: "Hackathon" },
  { rank: "15th", event: "Flag Hunt 2023", type: "CTF Competition" },
  { rank: "22nd", event: "BDSec CTF 2025", type: "CTF Competition" },
  { rank: "24th", event: "BCS ICT FEST 2025", type: "ICT Festival" },
  { rank: "26th", event: "MIST LeetCon 2023", type: "Programming Contest" },
  { rank: "27th", event: "Bugcrowd x Black Hat CTF USA 2025", type: "International CTF" },
  { rank: "29th", event: "Phoenix CTF 2025", type: "CTF Competition" },
  { rank: "37th", event: "THM Industrial Intrusion CTF 2025", type: "Industrial CTF" },
  { rank: "68th", event: "KnightCTF 2025", type: "CTF Competition" },
]

export function AchievementsSection() {
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
      id="achievements"
      className="relative py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground"
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">
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
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60">(04)</span>
              <div className="w-8 h-px bg-primary-foreground/20" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60">Achievements</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-10">
            {/* Section Header */}
            <div className="mb-20 md:mb-32">
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
                CTF Excellence & Competition Success
              </h2>
              <p 
                className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionProperty: "all",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0.2s"
                }}
              >
                Our competitive achievements demonstrate our team's expertise in cybersecurity challenges and advanced problem-solving across national and international competitions.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="space-y-0">
              {achievements.map((achievement, index) => (
                <div
                  key={`${achievement.event}-${index}`}
                  className="group border-b border-primary-foreground/10 py-6 md:py-8"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "all",
                    transitionDuration: "0.6s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${0.3 + (index * 0.03)}s`
                  }}
                >
                  <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-center">
                    {/* Rank */}
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl md:text-4xl font-light text-accent font-serif">
                          {achievement.rank}
                        </span>
                        <span className="text-xs uppercase tracking-widest text-primary-foreground/60">
                          Place
                        </span>
                      </div>
                    </div>

                    {/* Event Name */}
                    <div className="md:col-span-6">
                      <h3 className="text-lg md:text-xl font-light text-primary-foreground group-hover:text-accent transition-colors duration-300">
                        {achievement.event}
                      </h3>
                    </div>

                    {/* Event Type */}
                    <div className="md:col-span-4">
                      <span className="inline-block text-xs tracking-[0.1em] uppercase px-3 py-2 bg-primary-foreground/10 text-primary-foreground/80 rounded">
                        {achievement.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Summary */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 md:pt-24 mt-16 md:mt-24 border-t border-primary-foreground/10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionProperty: "all",
                transitionDuration: "0.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "0.8s"
              }}
            >
              <div>
                <div className="text-4xl md:text-5xl font-light text-accent font-serif mb-3">5</div>
                <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/60">Project Work</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-light text-accent font-serif mb-3">1</div>
                <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/60">CTF Organized</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-light text-accent font-serif mb-3">2</div>
                <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/60">Workshops</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-light text-accent font-serif mb-3">5</div>
                <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/60">Events Hosted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
