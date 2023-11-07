import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import { authConfig } from '@/utils/auth'
import { getServerSession } from 'next-auth'
import { Analytics } from '@vercel/analytics/react'

const inter = Ubuntu({
  weight:['300','400','500','700'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: 'Gathan Mahesa',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authConfig) 
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="app" className='bg-neutral-900 text-white w-screen min-h-screen grid place-items-center'>
          <div className='relative max-w-screen-md w-full h-full py-32 flex flex-col gap-20'>
            <Navbar session={session}/>
            {children}
            <Analytics/>
          </div>
        </div>
      </body>
    </html>
  )
}
