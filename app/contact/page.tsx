import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EnrollForm from '@/components/EnrollForm'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <>
      <Header activePage="contact" />

      {/* ── CONTACT / ENROLL ── */}
      <section className="bg-qs-brown text-white py-[clamp(56px,8vh,100px)] px-[clamp(20px,5vw,64px)]">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[clamp(36px,5vw,72px)] items-start">
          <div>
            <div className="font-mono text-[12px] tracking-[.24em] uppercase text-qs-orange">
              Contact &amp; enrol
            </div>
            <h1 className="font-heading font-extrabold text-[clamp(34px,4.4vw,50px)] leading-[1.06] mt-3.5 max-w-[13ch]">
              Let&apos;s get you on the road.
            </h1>
            <p className="text-[16px] text-white/80 mt-[18px] max-w-[42ch]">
              Send us a quick enquiry or call directly. We&apos;ll confirm a lesson time that works
              for you.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {[
                { label: 'Call',  value: '023 308 0020', bold: true },
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
                      <div className="font-mono text-[12.5px] text-white/60 mt-0.5">
                        {item.sub}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-[clamp(26px,3vw,38px)]">
            <EnrollForm submitLabel="Send enquiry" successMessage="Your enquiry is in. We'll call you on the number you gave to confirm your first lesson." />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
