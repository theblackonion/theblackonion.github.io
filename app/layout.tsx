import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600', '700']
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700']
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains',
  weight: ['400', '500']
});

export const metadata: Metadata = {
  title: 'The Black Onion — Elite Cybersecurity Professionals',
  description: 'Elite offensive security professionals. Advanced penetration testing, CTF competitions, vulnerability research, and digital defense innovation.',
  generator: 'v0.app',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    images: ['/og.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
