'use client'

import { useState } from 'react'

interface EnrollFormProps {
  submitLabel?: string
  successMessage?: string
}

const INPUT =
  'w-full px-3.5 py-3 border border-qs-border-input bg-qs-cream text-[15px] text-qs-dark outline-none'
const LABEL =
  'block font-mono text-[10.5px] tracking-[.14em] uppercase text-qs-label mb-[7px]'

export default function EnrollForm({
  submitLabel = 'Request my lesson',
  successMessage = "Your enrolment request is in. We'll call you on the number you gave to confirm your first lesson.",
}: EnrollFormProps) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-10 px-2.5">
        <div className="w-[54px] h-[54px] rounded-full bg-qs-terracotta text-white grid place-items-center text-[26px]">
          ✓
        </div>
        <h3 className="font-heading font-extrabold text-2xl text-qs-brown mt-5">Thank you!</h3>
        <p className="text-[15px] text-qs-body mt-2.5 max-w-[34ch]">{successMessage}</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 bg-qs-brown text-white text-[12.5px] font-semibold tracking-[.1em] uppercase px-6 py-3 border-none cursor-pointer transition-all hover:-translate-y-0.5"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-4"
    >
      <div>
        <label className={LABEL}>Full name</label>
        <input name="name" placeholder="e.g. Ama Mensah" className={INPUT} />
      </div>

      <div className="flex gap-3.5 flex-wrap">
        <div className="flex-1 min-w-[150px]">
          <label className={LABEL}>Phone</label>
          <input name="phone" placeholder="024 000 0000" className={INPUT} />
        </div>
        <div className="flex-1 min-w-[150px]">
          <label className={LABEL}>Course</label>
          <select name="course" className={INPUT}>
            <option>Driving Lessons</option>
            <option>Intensive Course</option>
            <option>Exclusive Lessons</option>
            <option>License Registration</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label className={LABEL}>Preferred schedule</label>
        <select name="schedule" className={INPUT}>
          <option>Weekday mornings</option>
          <option>Weekday evenings</option>
          <option>Weekends</option>
          <option>Flexible / anytime</option>
        </select>
      </div>

      <div>
        <label className={LABEL}>
          Message <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Anything we should know?"
          className={`${INPUT} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="mt-1 bg-qs-terracotta text-white text-[13px] font-semibold tracking-[.12em] uppercase py-4 w-full border-none cursor-pointer transition-all hover:-translate-y-0.5"
      >
        {submitLabel}
      </button>
      <p className="text-xs text-qs-label text-center">
        We&apos;ll only use your details to arrange your lessons.
      </p>
    </form>
  )
}
