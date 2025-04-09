// src/app/layout.tsx

import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'MYKS Global Dashboard',
  description: 'Token-based profit sharing for MYKS investors',
  metadataBase: new URL('https://myks-dapp.vercel.app'),
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
