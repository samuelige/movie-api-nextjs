import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import Layoutwrapper from '@/container/Layoutwrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Movie App',
  description: 'Your best search engine for movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layoutwrapper>
          {children}
        </Layoutwrapper>
      </body>
    </html>
  )
}
