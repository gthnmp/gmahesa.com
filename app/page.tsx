import Link from 'next/link'
import Image from 'next/image'
import { BsArrowUpRight } from 'react-icons/bs'

import {BlogAnchor, SocialAnchor} from '@/components/anchor'
import TwitterPhoto from '@/public/assets/twitter.jpg'
import LinkedinPhoto from '@/public/assets/linkedin.jpeg'
import RemanThumbnail from '@/public/assets/rafly-diaz.webp'
import JakartaThumbnail from '@/public/assets/jakarta.webp'
import OnixThumbnail from '@/public/assets/onix.webp'
import PortfolioV1Thumbnail from '@/public/assets/blog.webp'

export default function Home() {
  return (
    <main className='w-full h-full flex flex-col gap-10 px-4 md:px-0 text-lg leading-8 md:leading-0'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-xl md:text-3xl font-medium'> hey there, I&apos;m gathan👋</h1>
        <p className='font-light '> 
          I&apos;m a web developer (mostly doing frontends), devops enthusiast, and a networking guy. Currently, I&apos;m freelancing in these roles and always open to new opportunities. Let&apos;s build something awesome together!
        </p>
      </div>
      <div className='w-full h-96 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-5  bg-opacity-30'>
        <div className='w-full h-full bg-neutral-500 rounded-md overflow-hidden col-start-1 row-span-2'> 
          <Image priority quality={75} src={RemanThumbnail} alt="A picture of a camera" className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-full bg-neutral-500 rounded-md overflow-hidden col-start-1 row-start-3 md:col-start-2 md:row-start-1'> 
          <Image priority quality={75} src={PortfolioV1Thumbnail} alt="A picture of a camera" className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-full bg-neutral-500 rounded-md  overflow-hidden col-start-2 row-start-1 md:row-start-2'> 
          <Image priority quality={75} src={JakartaThumbnail} alt="A picture of a camera" className='w-full h-full object-cover' />
        </div>
        <div className='w-full h-full bg-neutral-500 rounded-md overflow-hidden col-start-2 row-span-2 md:col-start-3 md:row-span-2'> 
          <Image priority quality={75} src={OnixThumbnail} alt="A picture of a camera" className='w-full h-full object-cover' />
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='font-light '> 
          Lately, I&apos;ve written content on my blog. I try to keep things simple. You&apos;ll find writing about technologies I&apos;m interested in at the time, how I&apos;m learning, or sharing knowledge along the way.
        </p>
      </div>
      <div className='flex flex-col gap-5'>
        <BlogAnchor href='/blog/impostor-syndrome-and-dunning-kruger-effect' summary='The correlation between impostor syndrome and the Dunning-Kruger effect' title='Impostor Sydnrome and The Dunning-Kruger Effect' />
      </div>
      <div className='flex flex-col gap-5'>
        <p className='font-light '>
          Hey, don&apos;t forget to check out my Twitter and LinkedIn profiles. Feel free to give me a follow on there too! It&apos;s a great way to stay connected and keep up with what I&apos;m up to. Thanks for the support! 
        </p>
      </div>
      <div className='flex gap-5 flex-col md:flex-row'>
        <SocialAnchor src={TwitterPhoto} alt={"Gathan Mahesa's Twitter Profile Picture"} platform='twitter' href='https://twitter.com/veroxida' subtitle='16 Followers' title='@veroxida' />
        <SocialAnchor src={LinkedinPhoto} alt={"Gathan Mahesa's LinkedIn Profile Picture"} platform='linkedin' href='https://linkedin.com/in/gathan' subtitle='4 Connections' title='@gathan' />
      </div>
      <div className='flex flex-col gap-5'>
        <p className='font-light '> I do web development using React and Vanilla JS. I have solid background in computer networking from my previous education and have experience using Linux and Docker Container. I look forward to connecting and exploring collaborative opportunities in the field of web development and DevOps. </p>
      </div>
      <div className='flex  justify-between flex-col md:flex-row font-light'>
        <div className='flex flex-col md:flex-row gap-1'>
          <Link href="https://github.com/gthnmp" target='_blank' className='flex  gap-2 items-center'> My Github <BsArrowUpRight/></Link>
          <Link href="mailto:gathan.mahesa@gmail.com" className='flex  gap-2 items-center'> Mail Me <BsArrowUpRight/></Link>
        </div>
      </div>
    </main>
  )
}
