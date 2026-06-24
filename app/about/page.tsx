import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = { title: 'About' }

const values = [
  {
    title: 'Patience first',
    desc: 'Every learner moves at their own pace. We teach for confidence, never just to pass.',
  },
  {
    title: 'On your schedule',
    desc: 'Mornings, evenings or weekends — flexible lessons that fit around real life.',
  },
  {
    title: 'Delivered on time',
    desc: 'Reliable lessons and prompt DVLA support — exactly what our reviews praise us for.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header activePage="about" />

      {/* ── INTRO ── */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] min-h-[520px]">
        <div className="bg-qs-cream px-[clamp(28px,4.5vw,64px)] py-[clamp(48px,6vw,84px)] flex flex-col justify-center">
          <div className="font-mono text-[12px] tracking-[.24em] uppercase text-qs-terracotta">
            About us
          </div>
          <h1 className="font-heading font-extrabold text-[clamp(34px,4.6vw,52px)] leading-[1.06] mt-4 text-qs-brown max-w-[16ch]">
            A renowned name in Kumasi driving tuition.
          </h1>
          <p className="text-[17px] text-qs-body mt-5 max-w-[50ch]">
            Quick Start Driving School has spent years helping amateur drivers across Kumasi find
            their confidence on the road. Set at a vantage point convenient for university students
            and working professionals alike, we&apos;ve built our reputation on patient teaching and
            dependable results.
          </p>
        </div>
        <div className="relative overflow-hidden min-h-[360px] group">
          <div className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(.25,.1,.25,1)] group-hover:scale-[1.04]">
            <ImagePlaceholder label="Drop a photo of the school / instructor" />
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="bg-white py-[clamp(56px,8vh,96px)] px-[clamp(20px,5vw,64px)]">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-heading font-extrabold text-[clamp(24px,3vw,32px)] text-qs-brown">
            Learning that lasts beyond the test
          </h2>
          <p className="text-[17px] text-qs-body mt-[18px]">
            We offer a full range of packages — driving licenses, standard lessons, and intensive and
            exclusive driving courses — with flexible schedules designed around our customers&apos;
            lives. Whether you&apos;re a student fitting lessons between lectures or a professional
            learning on weekends, there&apos;s a path that works for you.
          </p>
          <p className="text-[17px] text-qs-body mt-[18px]">
            Beyond tuition, we assist learners through the full DVLA license registration process,
            so the journey from your first lesson to a license in your hand is as smooth as possible.
            Our learners consistently tell us the same thing: good teaching, delivered on time.
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-qs-cream py-[clamp(56px,8vh,96px)] px-[clamp(20px,5vw,64px)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[12px] tracking-[.24em] uppercase text-qs-terracotta">
            What we stand for
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[clamp(20px,2.4vw,34px)] mt-[clamp(28px,4vh,44px)]">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 border-qs-brown pt-[22px]">
                <h3 className="font-heading font-bold text-[19px] text-qs-dark">{v.title}</h3>
                <p className="text-[15px] text-qs-body mt-2.5">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="bg-white py-[clamp(56px,8vh,96px)] px-[clamp(20px,5vw,64px)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[clamp(32px,4vw,64px)] items-center">
          <div>
            <div className="font-mono text-[12px] tracking-[.24em] uppercase text-qs-terracotta">
              Find us
            </div>
            <h2 className="font-heading font-extrabold text-[clamp(26px,3.2vw,36px)] text-qs-brown mt-3.5">
              Conveniently located in Kumasi
            </h2>
            <p className="text-[16px] text-qs-body mt-4 max-w-[42ch]">
              A vantage point that&apos;s easy to reach for university students and anyone learning
              in and around the city.
            </p>
            <div className="mt-7 flex flex-col gap-4">
              {[
                { label: 'Place', value: 'Kumasi, Ghana · Plus code MCGP+6H' },
                { label: 'Hours', value: 'Open daily · Closes 5 pm' },
                { label: 'Call',  value: '023 308 0020' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="font-mono text-[10px] tracking-[.14em] uppercase text-qs-terracotta w-[70px] flex-shrink-0 pt-[3px]">
                    {item.label}
                  </span>
                  <span className="text-[15px] text-qs-dark">{item.value}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block mt-[30px] bg-qs-brown text-white text-[12.5px] font-semibold tracking-[.1em] uppercase px-[26px] py-[14px] transition-all hover:-translate-y-0.5"
            >
              Get directions
            </Link>
          </div>

          <div className="relative overflow-hidden h-[clamp(280px,40vh,400px)] group">
            <div className="absolute inset-0 transition-transform duration-[600ms] ease-[cubic-bezier(.25,.1,.25,1)] group-hover:scale-[1.04]">
              <ImagePlaceholder label="Drop a map screenshot or street photo" variant="map" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
