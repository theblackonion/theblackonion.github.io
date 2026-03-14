"use client"

import React from "react"
import { useEffect, useRef, useState } from "react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: ""
  })
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
      id="contact"
      className="relative py-32 md:py-48 bg-primary text-primary-foreground"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="contactGrid" width="5" height="5" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactGrid)" />
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
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70">(08)</span>
              <div className="w-8 h-px bg-primary-foreground/30" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/70">Contact</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left Column - Text */}
              <div className="space-y-8">
                <h2 
                  className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-[-0.01em] text-primary-foreground text-pretty"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionProperty: "all",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0.1s"
                }}
                >
                  Get in touch with The Black Onion
                </h2>
                
                <p 
                  className="text-lg text-primary-foreground/70 leading-relaxed max-w-md"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.2s"
                  }}
                >
                  Interested in our security services? Have a vulnerability to report? Want to collaborate on cybersecurity research? Reach out to our team.
                </p>

                {/* Contact Info */}
                <div 
                  className="space-y-6 pt-8"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.3s"
                  }}
                >
                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">Email</span>
                    <p className="flex flex-col text-primary-foreground">
                      <a href="mailto:theblackonion.bd@gmail.com" className="hover:text-accent transition-colors duration-300">
                        theblackonion.bd@gmail.com
                      </a>
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">Discord</span>
                    <p className="flex items-center gap-3 text-primary-foreground">
                      <a href="https://discord.gg/yt8GY5xppG" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                        discord.gg/yt8GY5xppG
                      </a>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-green-500/30 text-green-400 bg-green-500/10">Online Now</span>
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">GitHub</span>
                    <p className="text-primary-foreground">
                      <a href="https://github.com/theblackonion" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                        github.com/theblackonion
                      </a>
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">CTF Platform</span>
                    <p className="text-primary-foreground">
                      <a href="https://ctftime.org/team/229569" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">
                        ctftime.org/team/229569
                      </a>
                    </p>
                  </div>
                </div>

                  {/* Social Links */}
                <div 
                  className="flex flex-wrap items-center gap-6 pt-8"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transitionProperty: "all",
                    transitionDuration: "0.8s",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: "0.4s"
                  }}
                >
                  {[
                    { name: "GitHub", url: "https://github.com/theblackonion" },
                    { name: "Discord", url: "https://discord.gg/yt8GY5xppG" },
                    { name: "Facebook", url: "https://www.facebook.com/theblackonion" },
                    { name: "CTFTime", url: "https://ctftime.org/team/229569" },
                  ].map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      className="text-sm tracking-[0.1em] uppercase text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column - Form */}
              <form 
                action="https://formsubmit.co/help@theblackonion.org"
                method="POST"
                className="space-y-8"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionProperty: "all",
                  transitionDuration: "0.8s",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "0.3s"
                }}
              >
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Organization & Subject */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                      placeholder="Your organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="_subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-primary-foreground/20 text-primary-foreground focus:outline-none focus:border-foreground transition-colors duration-300 cursor-pointer"
                    >
                      <option value="" className="bg-[#050505] text-primary-foreground">Select a subject</option>
                      <option value="security-services" className="bg-[#050505] text-primary-foreground">Security Services</option>
                      <option value="vulnerability-report" className="bg-[#050505] text-primary-foreground">Vulnerability Report</option>
                      <option value="collaboration" className="bg-[#050505] text-primary-foreground">Collaboration</option>
                      <option value="speaking" className="bg-[#050505] text-primary-foreground">Speaking Engagement</option>
                      <option value="other" className="bg-[#050505] text-primary-foreground">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs tracking-[0.2em] uppercase text-primary-foreground/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 px-8 py-4 bg-accent text-black hover:bg-accent/90 transition-all duration-300"
                  >
                    <span className="text-sm tracking-[0.15em] uppercase">Request Reservation</span>
                    <svg 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
