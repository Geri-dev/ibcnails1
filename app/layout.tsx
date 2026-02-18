import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

// next/font returns .variable when the variable option is set (TypeScript types may not include it)
const fontVariables = [
  (playfair as { variable?: string }).variable,
  (poppins as { variable?: string }).variable,
].filter(Boolean).join(' ')

export const metadata: Metadata = {
  title: 'IBC Nails | Tirana',
  description: 'Premium nail studio in Tirana. Manicure, pedicure, VIP rooms, custom nail designs.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={fontVariables || undefined}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
