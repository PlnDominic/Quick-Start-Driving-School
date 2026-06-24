'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import ImagePlaceholder from './ImagePlaceholder'

const programs = [
  {
    id: '01',
    title: 'Driving Lessons',
    desc: 'Foundational on-road tuition for first-time drivers: controls, handling and theory prep.',
    imgLabel: 'Lesson photo',
  },
  {
    id: '02',
    title: 'Intensive Course',
    desc: 'Fast-track, daily sessions that take you from learner to test-ready in weeks.',
    imgLabel: 'Intensive photo',
  },
  {
    id: '03',
    title: 'Exclusive Lessons',
    desc: 'One-to-one tuition at your own pace, with your own hours and door pickup.',
    imgLabel: 'Private lesson photo',
  },
  {
    id: '04',
    title: 'License Registration',
    desc: 'Full DVLA license registration: paperwork, booking and follow-up handled for you.',
    imgLabel: 'License / DVLA photo',
  },
]

export default function CourseCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const cardWidth = useCallback(() => {
    const track = trackRef.current
    if (!track) return 320
    const card = track.querySelector<HTMLElement>('.prog-card')
    if (!card) return 320
    const gap = parseFloat(getComputedStyle(track).gap) || 28
    return card.getBoundingClientRect().width + gap
  }, [])

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * cardWidth(), behavior: 'smooth' })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () =>
      setActiveIdx(Math.round(track.scrollLeft / cardWidth()))
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [cardWidth])

  return (
    <div className="relative max-w-[1200px] mx-auto mt-[clamp(30px,4vh,46px)]">
      {/* Arrows */}
      {(['prev', 'next'] as const).map((dir) => (
        <button
          key={dir}
          aria-label={dir === 'prev' ? 'Previous' : 'Next'}
          onClick={() => scroll(dir === 'prev' ? -1 : 1)}
          className={`absolute ${dir === 'prev' ? 'left-[-6px]' : 'right-[-6px]'} top-[45%] -translate-y-1/2 z-10 w-[46px] h-[46px] rounded-full bg-white border border-qs-border-input text-qs-brown text-[22px] grid place-items-center cursor-pointer shadow-[0_8px_20px_-12px_rgba(0,0,0,.35)] hover:bg-qs-terracotta hover:text-white hover:border-qs-terracotta transition-all`}
        >
          {dir === 'prev' ? '‹' : '›'}
        </button>
      ))}

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-[clamp(20px,2.4vw,30px)] overflow-x-auto pt-[34px] pb-3 px-10 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {programs.map((prog) => (
          <div
            key={prog.id}
            className="prog-card flex-none w-[clamp(240px,28vw,300px)] [scroll-snap-align:center] flex flex-col items-center text-center group"
          >
            <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden border border-qs-border-warm">
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-[600ms] ease-[cubic-bezier(.25,.1,.25,1)]">
                <ImagePlaceholder label={prog.imgLabel} />
              </div>
              <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 w-[50px] h-[50px] rounded-full bg-qs-terracotta border-[3px] border-white grid place-items-center text-white font-heading font-extrabold text-[15px] z-20 shadow-[0_8px_18px_-8px_rgba(0,0,0,.4)]">
                {prog.id}
              </div>
            </div>

            <h3 className="font-heading font-bold text-[20px] text-qs-dark mt-9">
              {prog.title}
            </h3>
            <p className="text-[14.5px] text-qs-body mt-2.5 max-w-[30ch]">{prog.desc}</p>
            <Link
              href="/contact"
              className="mt-[18px] border border-qs-border-input text-qs-brown text-[11.5px] font-semibold tracking-[.14em] uppercase px-[22px] py-[11px] transition-all hover:bg-qs-brown hover:text-white hover:border-qs-brown hover:-translate-y-0.5"
            >
              More info
            </Link>
          </div>
        ))}
      </div>

      {/* Pager dots */}
      <div className="flex justify-center gap-[9px] mt-[26px]">
        {programs.map((_, i) => (
          <span
            key={i}
            className={`w-[30px] h-1 rounded-sm transition-colors ${
              i === activeIdx ? 'bg-qs-terracotta' : 'bg-qs-sand'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
