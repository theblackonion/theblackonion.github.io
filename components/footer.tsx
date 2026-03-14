"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 md:py-24 border-t border-border">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Logo & Tagline */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.2em] text-foreground">
                The Black Onion
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Elite offensive security professionals redefining digital defense through penetration testing, vulnerability research, and CTF competitions worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Quick Links
            </h4>
            <nav className="space-y-4">
              {["About", "Specializations", "Expertise", "Achievements", "Team", "Gallery"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Legal
            </h4>
            <nav className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-sm text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Quick */}
          <div className="lg:col-span-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <p className="text-sm">
                <a 
                  href="mailto:help@theblackonion.org" 
                  className="text-foreground hover:text-accent transition-colors duration-300"
                >
                  help@theblackonion.org
                </a>
              </p>
              <p className="text-sm">
                <a 
                  href="https://discord.gg/G9UJzGqu" 
                  className="text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  Join Discord
                </a>
              </p>
              <p className="text-sm">
                <a 
                  href="https://github.com/theblackonion" 
                  className="text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  github.com/theblackonion
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground">
            © {currentYear} The Black Onion. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-8">
            {[
              { name: "GitHub", url: "#" },
              { name: "Discord", url: "#" },
              { name: "Twitter", url: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span>Back to top</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Large Decorative Text */}
        <div className="mt-16 md:mt-24 overflow-hidden">
          <p className="font-serif text-[8vw] md:text-[6vw] lg:text-[5vw] font-light tracking-[-0.02em] text-foreground/[0.07] leading-none whitespace-nowrap">
            Security is the foundation of digital trust.
          </p>
        </div>
      </div>
    </footer>
  )
}
