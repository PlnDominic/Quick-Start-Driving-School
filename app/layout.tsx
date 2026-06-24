import type { Metadata } from 'next'
import { Assistant, Merriweather_Sans, Anonymous_Pro } from 'next/font/google'
import './globals.css'

const assistant = Assistant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-assistant',
  display: 'swap',
})

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-merriweather-sans',
  display: 'swap',
})

const anonymousPro = Anonymous_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-anonymous-pro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s – Quick Start Driving School',
    default: 'Quick Start Driving School – Kumasi',
  },
  description:
    'A renowned learning centre for new drivers in Kumasi: patient instruction, intensive courses and full DVLA license registration.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${assistant.variable} ${merriweatherSans.variable} ${anonymousPro.variable} scroll-smooth`}
    >
      <body className="font-sans text-qs-dark bg-white leading-[1.65]">{children}</body>
    </html>
  )
}
