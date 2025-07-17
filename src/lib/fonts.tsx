// lib/fonts.ts
import { Poppins, Inter, Roboto, Akaya_Telivigala } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins', // opcional si usas CSS vars
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
})

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})


export const akaya_telivigala = Akaya_Telivigala({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-akaya-telivigala',
})
