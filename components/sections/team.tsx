"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface TeamMember {
  name: string
  position: string
  image: string
  social: {
    linkedin?: string
    github?: string
    twitter?: string
    website?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Nesar Uddin Dawood",
    position: "Founder / Team Lead | Digital Forensic Analyst | C|SCU | CNSP | CAP | DFE | CNSS | CCEP | NSE-1, NSE-2 | CCNA | MTCNA, MTCRE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nesar-Uddin-IdsAQOmTdmLrLSiyUdb9werpCMxxIF.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/nesaruddindawood/",
      github: "https://github.com/nesaruddindawood",
      twitter: "https://x.com/inn0centzero"
    }
  },
  {
    name: "Md Amanat Ullah",
    position: "Team Advisor | Cyber Security Engineer | CEH Practical | CAP | CNSP | ISO 27001 Lead Auditor",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amanat-ullah-Bam1pOhFpPETfDD62YIWS4di7pmfKn.jpg",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
      website: "https://preview--amanat-cyber-folio.lovable.app"
    }
  },
  {
    name: "MD AB Momin",
    position: "Co-Founder | Penetration Tester | CAPv2 | CNSP",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Momin-4pTgigYRKb8j5BzoI0W5HJDtxbnbcl.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/me-ab-momin",
      twitter: "https://x.com/me_ab_momin"
    }
  },
  {
    name: "Zabed Ullah Poyel",
    position: "Management Lead | Penetration Tester | CAP | CNSP | CEHPT | CCEP | CWAP | CAPIE | EHE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zabed-ullah-poyel-BpDrTc80Em2dZC3u4SJd1DKx3mwm6v.png",
    social: {
      linkedin: "https://linkedin.com/in/zabed-ullah-poyel/",
      github: "https://github.com/XploitPoy-777",
      twitter: "https://x.com/zabedullahpoyel",
      website: "https://zabedullahpoyel.netlify.app"
    }
  },
  {
    name: "AaRiz Rahman",
    position: "Web Penetration Tester | CNSP | CCEP",
    image: "https://theblackonion.netlify.app/Image/Team/Aariz.jpg",
    social: {
      twitter: "https://x.com/z3r0X0r"
    }
  },
  {
    name: "Morakib Hossain",
    position: "Reverse Engineer",
    image: "https://theblackonion.netlify.app/Image/Team/Nashit.png",
    social: {
      linkedin: "https://www.linkedin.com/in/morakib-hossain-837250255",
      github: "https://github.com/morakib"
    }
  },
  {
    name: "Subaita Maryam",
    position: "Security Analyst | CAP | CNSP | ISO/IEC 42001:2023 | CCEP | FCA | EHE | DFE | NDE | CPTAV2",
    image: "https://theblackonion.netlify.app/Image/Team/Subaita.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/subaita-maryam311",
      github: "https://github.com/subaita-maryam"
    }
  },
  {
    name: "MD Zidan Khan",
    position: "Digital Forensic Analyst",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zidan-Khan-cYEUEkvMNf3gUfCgWmEKoyCgzbDzcw.jpg",
    social: {
      linkedin: "https://linkedin.com/in/md-zidan-khan-147025229"
    }
  },
  {
    name: "Shahriar Hasan",
    position: "Web Penetration Tester | CNSP | CBP | CAP | CCEP | EHE",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hasan-tdvMKTKnGvtJ4zxtN5TEHzI72rfwHV.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/tavismoussouris",
      github: "https://github.com/hs32",
      website: "https://m4x1d.vercel.app"
    }
  },
  {
    name: "Anik Sutrodhar",
    position: "Web Penetration Tester",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Monster-Anik-A5MSAQIm0d3ylsHcXYyuSzrmpNLxuS.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/anik-sutrodhar-b56a25233"
    }
  },
  {
    name: "Mahir Shahriar Tanshen",
    position: "Backend Developer",
    image: "https://theblackonion.netlify.app/Image/Team/Mahir.jpg",
    social: {
      linkedin: "https://linkedin.com/in/0xmahir",
      github: "https://github.com/mahirshahriartanshen",
      twitter: "https://x.com/mahirshahriar66"
    }
  },
  {
    name: "Umma Morium Sathi",
    position: "Web Penetration Tester | CCEP",
    image: "https://theblackonion.netlify.app/Image/Team/Morium.jpg",
    social: {
      linkedin: "https://linkedin.com/in/umma-morium-sathi-8898b9337"
    }
  }
]

export function TeamSection() {
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
      id="team"
      className="relative py-24 md:py-32 lg:py-40 bg-background"
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
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">(05)</span>
              <div className="w-8 h-px bg-border" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Team</span>
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
            Our Elite Team
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
            Meet the cybersecurity experts pushing the boundaries of digital security.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(60px)",
                transitionProperty: "all",
                transitionDuration: "0.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: `${0.3 + index * 0.05}s`
              }}
            >
              <div className="space-y-4">
                {/* Member Image */}
                <div className="relative  aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-light tracking-[-0.01em] text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.position}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 pt-2">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                      </svg>
                    </a>
                  )}
                  {member.social.website && (
                    <a
                      href={member.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                      aria-label="Website"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </a>
                  )}
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
