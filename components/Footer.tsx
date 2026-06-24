import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-qs-brown-deep text-white/[.78] px-[clamp(20px,5vw,64px)] pt-[clamp(48px,7vh,72px)] pb-7">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-10">
        <div className="max-w-[30ch]">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-qs-terracotta text-white font-heading font-extrabold text-[15px]">
              Q
            </span>
            <span className="font-heading font-extrabold text-[18px] tracking-[.04em] text-white">
              Quick Start
            </span>
          </div>
          <p className="text-sm mt-4">
            Kumasi's renowned driving school for new drivers — lessons, intensive courses and full
            DVLA license registration.
          </p>
        </div>

        <div className="flex flex-wrap gap-[clamp(36px,6vw,72px)]">
          <div>
            <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-qs-orange mb-3.5">
              Explore
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link href="/" className="opacity-[.82] hover:opacity-100 transition-opacity">Home</Link>
              <Link href="/courses" className="opacity-[.82] hover:opacity-100 transition-opacity">Courses</Link>
              <Link href="/about" className="opacity-[.82] hover:opacity-100 transition-opacity">About</Link>
              <Link href="/contact" className="opacity-[.82] hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>
          <div>
            <div className="font-mono text-[10.5px] tracking-[.18em] uppercase text-qs-orange mb-3.5">
              Get in touch
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="tel:0233080020" className="opacity-[.82] hover:opacity-100 transition-opacity">
                023 308 0020
              </a>
              <span className="opacity-[.82]">Kumasi · MCGP+6H</span>
              <span className="opacity-[.82]">Open daily · Closes 5 pm</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-9 pt-5 border-t border-white/[.12] flex flex-wrap justify-between gap-3 font-mono text-[11.5px] tracking-[.08em] text-white/50">
        <span>© 2026 Quick Start Driving School · Kumasi, Ghana</span>
        <span>4.0 ★ · 33 Google reviews</span>
      </div>
    </footer>
  )
}
