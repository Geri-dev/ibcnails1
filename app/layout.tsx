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
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
