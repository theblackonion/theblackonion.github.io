"use client"

import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ value, isVisible }: { value: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <>{count}</>;
}

export function VisionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="vision"
      className="relative py-32 md:py-48 lg:py-64 "
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
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
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">(01)</span>
              <div className="w-8 h-px bg-border" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">About Us</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-10">
            <div className="space-y-16 md:space-y-24">
              {/* Large Statement */}
              <div className="">
                <h2 
                  className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-light leading-[1.1] tracking-[-0.01em] text-foreground max-w-5xl text-pretty"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(60px)",
                    transitionProperty: "all",
                    transitionDuration: "1s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.1s"
                  }}
                >
                  We are The Black Onion — a collective of elite offensive security professionals driven by curiosity, technical mastery, and a relentless pursuit of excellence in the digital domain.
                </h2>
              </div>

              {/* Supporting Content */}
              <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                <div 
                  className="space-y-6"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.3s"
                  }}
                >
                  <p className="text-lg leading-relaxed text-foreground/80">
                    Our team operates at the intersection of creativity and cyber warfare, specializing in advanced penetration testing, red teaming, exploit development, and capture-the-flag (CTF) competitions that challenge the limits of what's possible in modern cybersecurity.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    At The Black Onion, we believe that true defense begins with understanding offense. By thinking like adversaries, we uncover vulnerabilities before they can be exploited by malicious actors. Every system, every protocol, and every line of code is an opportunity to learn, innovate, and strengthen the world's digital resilience.
                  </p>
                </div>
                <div 
                  className="space-y-6"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(40px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.4s"
                  }}
                >
                  <p className="text-lg leading-relaxed text-foreground/80">
                    Our members include researchers, ethical hackers, and cyber strategists united by a single mission — to fortify global cyber defenses through knowledge, collaboration, and responsible disclosure. From dissecting zero-day exploits to contributing to open-source security tools, we share our findings with the broader cybersecurity community.
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    <strong className="text-foreground">The Black Onion isn't just a team — it's a mindset.</strong> A commitment to continuous learning, ethical hacking, and pushing technology beyond its comfort zone. Because in a world of ever-evolving digital threats, only those who dare to explore the dark corners of cyberspace can truly protect the light.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8 border-t border-border"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionProperty: "all",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0.5s"
                }}
              >
                {[
                  { value: 8, label: "Project Work" },
                  { value: 1, label: "CTF Organize" },
                  { value: 5, label: "Workshop" },
                  { value: 3, label: "Event" },
                ].map((stat, index) => (
                  <div key={stat.label} className="my-0 space-x-0 leading-5">
                    <span className="text-4xl md:text-5xl font-light text-foreground font-sans lg:text-8xl">
                      <AnimatedCounter value={stat.value} isVisible={isVisible} />
                    </span>
                    <p className="text-xs pt-4 tracking-[0.15em] uppercase text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div 
        className="absolute bottom-0 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 h-px bg-border"
        style={{
          transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transitionProperty: "transform",
          transitionDuration: "1.5s",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: "0.6s"
        }}
      />
    </section>
  )
}
