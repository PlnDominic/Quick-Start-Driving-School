import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import EnrollForm from '@/components/EnrollForm'

export const metadata: Metadata = { title: 'Quick Start Driving School – Kumasi' }

const courses = [
  {
    tag: 'Beginner',
    title: 'Driving Lessons',
    desc: 'Foundational, on-road tuition for first-time drivers — controls, handling and confidence from day one.',
    items: ['Vehicle controls & road handling', 'Real on-road practice', 'Theory test preparation'],
    dark: false,
  },
  {
    tag: 'Most popular',
    title: 'Intensive Course',
    desc: 'Fast-track to test-ready in weeks with daily sessions and a structured path to your test.',
    items: ['Daily condensed sessions', 'Mock tests included', 'Test booking assistance'],
    dark: true,
  },
  {
    tag: 'Private',
    title: 'Exclusive Lessons',
    desc: 'One-to-one tuition at your own pace, with hours and pickup points chosen around you.',
    items: ['Dedicated private instructor', 'Choose your own hours', 'Door pickup available'],
    dark: false,
  },
  {
    tag: 'Licensing',
    title: 'License Registration',
    desc: "Full assistance registering your driver's license with the DVLA — from paperwork to follow-up.",
    items: ['Paperwork handled for you', 'Theory & practical booking', 'Guidance to collection'],
    dark: false,
  },
]

const reviews = [
  {
    stars: 5,
    text: '"A renowned learning centre for amateur drivers — driving licenses, lessons, intensive and exclusive courses, with flexible schedules for customers."',
    name: 'Felix Acheampong',
    meta: 'Local Guide · Google review',
  },
  {
    stars: 4,
    text: '"A driving school at a vantage point for university students who want to learn to drive. They assist with DVLA license registration and tuition as well."',
    name: 'Michael Affare',
    meta: 'Local Guide · Google review',
  },
  {
    stars: 5,
    text: '"I had my driving lessons and license with Quick Start. They are so good and delivered on time. I recommend this school."',
    name: 'Victoria Ashley',
    meta: 'Google review',
  },
]

export default function HomePage() {
  return (
    <>
      <Header activePage="home" />

      {/* ── HERO ── */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] min-h-[620px]">
        <div className="bg-qs-cream px-[clamp(28px,4.5vw,64px)] py-[clamp(40px,5vw,68px)] flex flex-col justify-center">
          <div className="font-mono text-[12px] tracking-[.24em] uppercase text-qs-terracotta">
            Kumasi · Ghana
          </div>
          <h1 className="font-heading font-extrabold text-[clamp(40px,5vw,58px)] leading-[1.04] tracking-[.01em] mt-[18px] text-qs-brown max-w-[14ch]">
            Your road to a full license starts here.
          </h1>
          <p className="text-[18px] leading-[1.65] mt-[22px] max-w-[44ch] text-qs-body">
            A renowned learning centre for new drivers — patient instruction, intensive courses and
            full DVLA license registration, all on a schedule that fits your life.
          </p>
          <div className="flex items-center gap-5 mt-8 flex-wrap">
            <Link
              href="#contact"
              className="bg-qs-brown text-white text-[13px] font-semibold tracking-[.12em] uppercase px-[30px] py-4 transition-all hover:-translate-y-0.5"
            >
              Enroll now
            </Link>
            <Link
              href="/courses"
              className="text-[13px] tracking-[.12em] uppercase text-qs-dark border-b-[1.5px] border-qs-terracotta pb-1"
            >
              View courses
            </Link>
          </div>
          <div className="mt-11 pt-6 border-t border-qs-border-warm flex items-center justify-between gap-5 flex-wrap">
            <div>
              <div className="font-mono text-[10px] tracking-[.18em] uppercase text-qs-label">
                Call to book
              </div>
              <div className="font-heading font-bold text-[21px] text-qs-dark mt-1">
                023 308 0020
              </div>
            </div>
            <div className="text-right">
              <div className="text-qs-terracotta tracking-[2px] text-base">
                ★★★★<span className="opacity-30">★</span>
              </div>
              <div className="text-[13px] text-qs-body mt-[3px]">4.0 · 33 Google reviews</div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden min-h-[280px] lg:min-h-[420px] group">
          <Image
            src="/images/signboard.png"
            alt="Quick Start Driving School signboard"
            fill
            className="object-cover object-center transition-transform duration-[600ms] ease-[cubic-bezier(.25,.1,.25,1)] group-hover:scale-[1.04]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="bg-qs-brown text-white flex flex-wrap items-center justify-center gap-[clamp(20px,5vw,72px)] px-[clamp(20px,5vw,64px)] py-[26px]">
        {[
          { bold: '4.0★', rest: '33 reviews' },
          { bold: 'DVLA', rest: 'license registration' },
          { bold: 'Flexible', rest: 'schedules' },
          { bold: 'Years', rest: 'of trusted tuition' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="font-heading font-extrabold text-[20px] text-qs-orange">{item.bold}</span>
            <span className="text-[13.5px] opacity-[.85]">{item.rest}</span>
          </div>
        ))}
      </div>

      {/* ── WHY US ── */}
      <section className="bg-white py-[clamp(64px,9vh,108px)] px-[clamp(20px,5vw,64px)]">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[clamp(36px,5vw,80px)] items-center">
          {/* image with accents */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[16px] aspect-[4/3] group">
              <div className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(.25,.1,.25,1)] group-hover:scale-[1.04]">
                <ImagePlaceholder label="Drop a car / learner photo" />
              </div>
            </div>
            {/* yellow road-sign */}
            <div className="absolute top-[-20px] left-[-16px] w-[58px] h-[58px] bg-qs-yellow border-[3px] border-qs-dark rounded-[9px] rotate-45 grid place-items-center shadow-[0_10px_24px_-10px_rgba(0,0,0,.4)]">
              <span className="-rotate-45 font-heading font-extrabold text-[26px] text-qs-dark leading-none">
                !
              </span>
            </div>
            {/* cone */}
            <div className="absolute bottom-[-14px] right-[18px] w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-qs-terracotta drop-shadow-[0_8px_14px_rgba(0,0,0,.25)]" />
          </div>

          {/* copy */}
          <div>
            <div className="font-mono text-[12px] tracking-[.24em] uppercase text-qs-terracotta">
              Why Quick Start
            </div>
            <h2 className="font-heading font-extrabold text-[clamp(30px,3.8vw,44px)] leading-[1.08] mt-3.5 text-qs-brown">
              Are you ready to drive?
            </h2>
            <p className="text-[16px] text-qs-body mt-[18px] max-w-[50ch]">
              For years, Quick Start Driving School has earned a reputation across Kumasi for
              responsible, caring tuition. With patient, licensed instructors and a relaxed,
              encouraging environment, you&apos;ll start your driving lessons and learn to drive
              with real confidence.
            </p>
            <div className="flex flex-col gap-3.5 mt-7">
              {[
                'We cover all the different test routes',
                'Flexible schedules — more than just lessons on offer',
                'Full DVLA license registration handled for you',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-qs-terracotta text-white grid place-items-center text-[13px] mt-px">
                    ✓
                  </span>
                  <span className="text-[15.5px] text-qs-dark">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="#contact"
              className="inline-block mt-[30px] bg-qs-brown text-white text-[13px] font-semibold tracking-[.12em] uppercase px-[30px] py-[15px] transition-all hover:-translate-y-0.5"
            >
              Enroll now
            </Link>
          </div>
        </div>
      </section>

      {/* ── SCHEDULE BAND ── */}
      <section className="bg-qs-brown-deep text-white py-[clamp(34px,5vh,52px)] px-[clamp(20px,5vw,64px)] overflow-hidden">
        <div className="max-w-[1180px] mx-auto flex items-center justify-center gap-[clamp(24px,4vw,56px)] flex-wrap text-center">
          <div>
            <p className="font-heading font-extrabold text-[clamp(22px,2.6vw,30px)] tracking-[.01em]">
              Schedule{' '}
              <span className="text-qs-orange">Your Driving Lessons</span>{' '}
              with Us!
            </p>
            <p className="text-[14px] text-white/65 mt-2">
              Book a taster lesson and meet your personal driving instructor.
            </p>
            <a
              href="tel:0233080020"
              className="block font-heading font-extrabold text-[clamp(26px,3.4vw,38px)] text-white mt-3.5 tracking-[.02em]"
            >
              023 308 0020
            </a>
          </div>
          {/* warning triangle */}
          <div className="relative w-[74px] h-[64px] flex-shrink-0">
            <div className="w-0 h-0 border-l-[37px] border-r-[37px] border-b-[64px] border-l-transparent border-r-transparent border-b-qs-yellow" />
            <span className="absolute left-1/2 bottom-2 -translate-x-1/2 font-heading font-extrabold text-[26px] text-qs-dark">
              !
            </span>
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" className="bg-qs-cream py-[clamp(64px,9vh,108px)] px-[clamp(20px,5vw,64px)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="font-mono text-[12px] tracking-[.24em] uppercase text-qs-terracotta">
                Our courses
              </div>
              <h2 className="font-heading font-extrabold text-[clamp(28px,3.6vw,40px)] leading-[1.1] mt-3.5 text-qs-brown">
                Packages for every kind of driver
              </h2>
            </div>
            <Link
              href="/courses"
              className="font-mono text-[12px] tracking-[.16em] uppercase text-qs-body border-b-[1.5px] border-qs-terracotta pb-1 whitespace-nowrap"
            >
              All courses →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[clamp(18px,2vw,26px)] mt-[clamp(36px,5vh,52px)]">
            {courses.map((c) => (
              <div
                key={c.title}
                className={`p-[30px_28px] flex flex-col border transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(70,40,30,.45)] ${
                  c.dark
                    ? 'bg-qs-brown text-white border-qs-brown'
                    : 'bg-white text-qs-dark border-qs-border-warm'
                }`}
              >
                <div
                  className={`font-mono text-[11px] tracking-[.16em] uppercase ${
                    c.dark ? 'text-qs-orange' : 'text-qs-terracotta'
                  }`}
                >
                  {c.tag}
                </div>
                <h3 className="font-heading font-bold text-[21px] mt-3">{c.title}</h3>
                <p className={`text-[14.5px] mt-3 ${c.dark ? 'text-white/[.82]' : 'text-qs-body'}`}>
                  {c.desc}
                </p>
                <ul className="list-none p-0 mt-[18px] flex flex-col gap-2">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className={`flex gap-[9px] text-[14px] ${
                        c.dark ? 'text-white/[.82]' : 'text-qs-body'
                      }`}
                    >
                      <span className={c.dark ? 'text-qs-orange' : 'text-qs-terracotta'}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`mt-auto pt-[22px] text-[12.5px] tracking-[.1em] uppercase font-semibold transition-all hover:-translate-y-0.5 ${
                    c.dark ? 'text-qs-orange' : 'text-qs-brown'
                  }`}
                >
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="bg-white py-[clamp(64px,9vh,108px)] px-[clamp(20px,5vw,64px)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_2fr] gap-[clamp(36px,5vw,72px)] items-start">
          <div>
            <div className="font-mono text-[12px] tracking-[.24em] uppercase text-qs-terracotta">
              Reviews
            </div>
            <div className="font-heading font-extrabold text-[68px] leading-none text-qs-brown mt-4">
              4.0
            </div>
            <div className="text-qs-terracotta tracking-[3px] text-[20px] mt-2.5">
              ★★★★<span className="opacity-30">★</span>
            </div>
            <p className="text-[15px] text-qs-body mt-3">
              Based on 33 verified Google reviews from learners across Kumasi.
            </p>
            <Link
              href="#contact"
              className="inline-block mt-[22px] bg-qs-terracotta text-white text-[12.5px] font-semibold tracking-[.1em] uppercase px-[22px] py-[13px] transition-all hover:-translate-y-0.5"
            >
              Become our next review
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(18px,2vw,24px)]">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-qs-cream border border-qs-border-warm p-[26px_24px] flex flex-col"
              >
                <div className="text-qs-terracotta tracking-[2px] text-[14px]">
                  {'★'.repeat(r.stars)}
                  {r.stars < 5 && (
                    <span className="opacity-30">{'★'.repeat(5 - r.stars)}</span>
                  )}
                </div>
                <p className="text-[14.5px] text-qs-dark mt-3.5 flex-1">{r.text}</p>
                <div className="mt-[18px] pt-4 border-t border-qs-border-warm">
                  <div className="font-heading font-bold text-[15px] text-qs-dark">{r.name}</div>
                  <div className="font-mono text-[10.5px] tracking-[.1em] text-qs-label mt-[3px]">
                    {r.meta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENROLLMENT ── */}
      <section
        id="contact"
        className="bg-qs-brown text-white py-[clamp(64px,9vh,108px)] px-[clamp(20px,5vw,64px)]"
      >
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[clamp(36px,5vw,72px)] items-start">
          <div>
            <div className="font-mono text-[12px] tracking-[.24em] uppercase text-qs-orange">
              Enroll today
            </div>
            <h2 className="font-heading font-extrabold text-[clamp(28px,3.6vw,42px)] leading-[1.1] mt-3.5 max-w-[14ch]">
              Book your first lesson.
            </h2>
            <p className="text-[16px] text-white/80 mt-[18px] max-w-[42ch]">
              Tell us a little about yourself and the course you&apos;re after. We&apos;ll call you
              back to confirm a time that suits you.
            </p>
            <div className="mt-10 flex flex-col gap-6">
              {[
                { label: 'Call', value: '023 308 0020', bold: true },
                { label: 'Visit', value: 'Kumasi, Ghana', sub: 'Plus code MCGP+6H' },
                { label: 'Hours', value: 'Open daily · Closes 5 pm' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="font-mono text-[10px] tracking-[.14em] uppercase text-qs-orange w-[74px] flex-shrink-0 pt-[3px]">
                    {item.label}
                  </div>
                  <div>
                    <div
                      className={
                        item.bold
                          ? 'font-heading font-bold text-[18px]'
                          : 'text-[15px] text-white/[.88]'
                      }
                    >
                      {item.value}
                    </div>
                    {item.sub && (
                      <div className="font-mono text-[12.5px] text-white/60 mt-0.5">{item.sub}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-[clamp(26px,3vw,38px)]">
            <EnrollForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
