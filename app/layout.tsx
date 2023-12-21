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
  metadataBase: new URL('https://gmahesa.com'),
  title: {
    default: 'Gathan Mahesa - Software Developer',
    template: '%s | Gathan Mahesa',
  },
  creator:"Gathan Mahesa",
  keywords: [
    "Gathan Mahesa",
    "Gathan",
    "Gmahesa",
    "Gathan Web",
    "Personal Website",
    "Software Developer",
    "Linux Sysadmin",
    "Web Development",
    "Web Developer",
    "System Administration",
    "Programming",
    "Code Debugger",
    "Debugger",
    "DevOps",
    "Linux Server Management",
    "Technical Support",
    "Technical Hosting Support",
    "DNS Administration",
    "Web Hosting",
    "IT Support",
    "cPanel",
    "Web Host Manager",
    "WHM",
    "Node JS"
  ],
  description: 'Web specialist. Resolves cPanel, WHM, Linux issues. Debugger, and develop scalable Node.js solutions.',
  openGraph: {
    title: 'Gathan Mahesa - Software Developer',
    description: 'Web specialist. Resolves cPanel, WHM, Linux issues. Debugger, and develop scalable Node.js solutions.',
    url: 'https://gmahesa.com',
    siteName: 'Gathan Mahesa',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Gathan Mahesa',
    card: 'summary_large_image',
  },
  verification: {
    google: 'qY0gvpQBLoDygRAZW9wRbVLfxb3tqiNrDJu5hhSvDYk',
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authConfig) 
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="app" className='bg-neutral-900 text-white max-w-screen min-h-screen grid place-items-center'>
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
