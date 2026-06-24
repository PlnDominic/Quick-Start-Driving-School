import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CourseCarousel from '@/components/CourseCarousel'

export const metadata: Metadata = { title: 'Courses' }

export default function CoursesPage() {
  return (
    <>
      <Header activePage="courses" />

      {/* ── PAGE HERO ── */}
      <section className="bg-qs-cream py-[clamp(56px,8vh,96px)] px-[clamp(20px,5vw,64px)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[12px] tracking-[.24em] uppercase text-qs-terracotta">
            Our courses
          </div>
          <h1 className="font-heading font-extrabold text-[clamp(36px,5vw,56px)] leading-[1.05] mt-4 text-qs-brown max-w-[18ch]">
            Pick the path that fits your pace.
          </h1>
          <p className="text-[18px] text-qs-body mt-5 max-w-[54ch]">
            From a first time behind the wheel to a full DVLA license, every Quick Start package
            comes with patient instruction and a flexible schedule.
          </p>
        </div>
      </section>

      {/* ── OUR PROGRAMS CAROUSEL ── */}
      <section className="bg-white py-[clamp(56px,8vh,96px)] px-[clamp(20px,5vw,64px)]">
        <h2 className="font-heading font-extrabold text-[clamp(28px,3.6vw,40px)] text-qs-dark text-center">
          Our Programs
        </h2>
        <div className="w-[54px] h-[3px] bg-qs-terracotta mx-auto mt-4" />
        <CourseCarousel />
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-qs-cream py-[clamp(48px,7vh,84px)] px-[clamp(20px,5vw,64px)] text-center">
        <h2 className="font-heading font-extrabold text-[clamp(26px,3.4vw,38px)] text-qs-brown max-w-[20ch] mx-auto">
          Not sure which course is right for you?
        </h2>
        <p className="text-[17px] text-qs-body mt-4 max-w-[48ch] mx-auto">
          Call us and we&apos;ll talk you through the options, or send an enquiry and we&apos;ll
          get back to you.
        </p>
        <div className="flex gap-[18px] justify-center mt-[30px] flex-wrap">
          <Link
            href="/contact"
            className="bg-qs-terracotta text-white text-[13px] font-semibold tracking-[.12em] uppercase px-[30px] py-4 transition-all hover:-translate-y-0.5"
          >
            Enroll now
          </Link>
          <a
            href="tel:0233080020"
            className="bg-white border border-qs-border-input text-qs-dark text-[13px] font-semibold tracking-[.12em] uppercase px-[30px] py-4 transition-all hover:-translate-y-0.5"
          >
            Call 023 308 0020
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
