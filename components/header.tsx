"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#vision" },
    // { label: "Specializations", href: "#philosophy" },
    { label: "Expertise", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Team", href: "#team" },
    // { label: "Partners", href: "#partners" },
    { label: "Gallery", href: "#gallery" },
  ]

  return (
    <>
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border" 
          : "bg-transparent",
        isMobileMenuOpen && !isScrolled ? "bg-background/0" : ""
      )}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative group flex items-center gap-3"
          >
            <Image src="/logo.jpg" alt="The Black Onion Logo" width={40} height={40} className="hidden md:block rounded-full" />
            <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.2em] transition-colors duration-300 text-black">
              The Black Onion
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-500 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative group text-sm tracking-[0.15em] uppercase transition-colors duration-300",
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-gray-400 hover:text-gray-100"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-[0.1em] uppercase text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              <span>Get In Touch</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span 
                className={cn(
                  "w-6 h-px transition-all duration-300",
                  isScrolled || isMobileMenuOpen ? "bg-foreground" : "bg-white",
                  isMobileMenuOpen && "rotate-45 translate-y-[4px]"
                )} 
              />
              <span 
                className={cn(
                  "w-6 h-px transition-all duration-300",
                  isScrolled || isMobileMenuOpen ? "bg-foreground" : "bg-white",
                  isMobileMenuOpen && "-rotate-45 -translate-y-[3px]"
                )} 
              />
            </div>
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu */}
    <div
      className={cn(
        "lg:hidden fixed inset-0 transition-colors duration-500 ease-out z-40",
        isMobileMenuOpen ? "pointer-events-auto bg-background/95 backdrop-blur-sm" : "pointer-events-none bg-transparent"
      )}
    >
      <nav 
        className={cn(
          "flex flex-col items-center justify-center h-full gap-8 pb-20 transition-all duration-500 ease-out transform",
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        )}
      >
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif tracking-[0.1em] text-foreground hover:text-accent transition-colors duration-300"
            style={{ 
              transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: "all 0.5s ease-out"
            }}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-8 px-8 py-4 text-sm tracking-[0.1em] uppercase text-primary-foreground bg-primary"
          style={{ 
            transitionDelay: isMobileMenuOpen ? `${navItems.length * 50}ms` : "0ms",
            transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
            opacity: isMobileMenuOpen ? 1 : 0,
            transition: "all 0.5s ease-out"
          }}
        >
          Get In Touch
        </Link>
      </nav>
    </div>
    </>
  )
}
