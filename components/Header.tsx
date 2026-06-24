'use client'

import Link from 'next/link'
import { useState } from 'react'

type Page = 'home' | 'courses' | 'about' | 'contact'

interface HeaderProps {
  activePage?: Page
}

const navLinks: { href: string; label: string; key: Page | 'reviews' }[] = [
  { href: '/',        label: 'Home',    key: 'home' },
  { href: '/courses', label: 'Courses', key: 'courses' },
  { href: '/about',   label: 'About',   key: 'about' },
  { href: '/#reviews',label: 'Reviews', key: 'reviews' },
  { href: '/contact', label: 'Contact', key: 'contact' },
]

export default function Header({ activePage }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-qs-brown text-white flex items-center justify-between gap-6 px-[clamp(20px,5vw,64px)] h-[74px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="grid place-items-center w-[34px] h-[34px] rounded-full bg-qs-terracotta text-white font-heading font-extrabold text-base">
            Q
          </span>
          <span>
            <span className="block font-heading font-extrabold text-[19px] tracking-[.04em] leading-none">
              Quick Start
            </span>
            <span className="block font-mono text-[8.5px] tracking-[.32em] uppercase opacity-[.82] mt-[3px]">
              Driving School · Kumasi
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-[30px] text-[14.5px] tracking-[.02em]">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`transition-opacity hover:opacity-[.68] ${
                activePage === link.key
                  ? 'opacity-60 border-b-[1.5px] border-qs-terracotta pb-[3px]'
                  : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-[18px]">
          <a
            href="tel:0233080020"
            className="font-mono text-[13px] tracking-[.08em] opacity-[.9]"
          >
            023 308 0020
          </a>
          <Link
            href="/contact"
            className="bg-qs-terracotta text-white text-[12.5px] font-semibold tracking-[.1em] uppercase px-5 py-3 transition-all hover:-translate-y-0.5"
          >
            Book a lesson
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="fixed top-[74px] left-0 right-0 bg-qs-brown z-40 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="px-[clamp(20px,5vw,64px)] py-4 text-white text-base border-b border-white/10 hover:bg-white/[.08] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0233080020"
            className="px-[clamp(20px,5vw,64px)] py-4 text-qs-orange border-b border-white/10"
          >
            023 308 0020
          </a>
        </div>
      )}
    </>
  )
}
