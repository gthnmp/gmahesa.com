import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

import Anchor from '@/components/anchor'
import TwitterPhoto from '@/public/assets/twitter.jpg'
import LinkedinPhoto from '@/public/assets/linkedin.jpeg'

export default function Home() {
  return (
    <main className='w-full h-full flex flex-col gap-10'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-medium'> hey there, I'm gathan👋</h1>
        <p className='font-light text-lg'> I do web development using React and Vanilla JS. I have solid background in computer networking from my previous education and have experience using Linux and Docker Container. I look forward to connecting and exploring collaborative opportunities in the field of web development and DevOps. </p>
      </div>
      <div className='w-full h-96 grid grid-cols-3 grid-rows-2 gap-5  bg-opacity-30'>
        <div className='w-full h-full bg-neutral-500 rounded-md col-start-1 row-span-2'> 
        </div>
        <div className='w-full h-full bg-neutral-500 rounded-md col-start-2'> 
        </div>
        <div className='w-full h-full bg-neutral-500 rounded-md col-start-2 row-start-2'> 
        </div>
        <div className='w-full h-full bg-neutral-500 rounded-md col-start-3 row-span-2'> 
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <p className='font-light text-lg'> I do web development using React and Vanilla JS. I have solid background in computer networking from my previous education and have experience using Linux and Docker Container. I look forward to connecting and exploring collaborative opportunities in the field of web development and DevOps. </p>
      </div>
      <div className='flex gap-5'>
        <Anchor src={TwitterPhoto} alt={"Gathan Mahesa's Twitter Profile Picture"} platform='twitter' href='https://twitter.com/veroxida' subtitle='16 Followers' title='@veroxida' />
        <Anchor src={LinkedinPhoto} alt={"Gathan Mahesa's LinkedIn Profile Picture"} platform='linkedin' href='https://linkedin.com/in/gathan' subtitle='4 Connections' title='@gathan' />
      </div>
      <div className='flex flex-col gap-5'>
        <p className='font-light text-lg'> I do web development using React and Vanilla JS. I have solid background in computer networking from my previous education and have experience using Linux and Docker Container. I look forward to connecting and exploring collaborative opportunities in the field of web development and DevOps. </p>
      </div>
      <div className='flex flex-col gap-5'>
        <Anchor href='https://twitter.com/veroxida' subtitle='42059 views' title='Git Gud With Git' />
        <Anchor href='https://linkedin.com/in/gathan' subtitle='696969 views' title='Grab with Grep' />
      </div>
      <div className='flex flex-col gap-5'>
        <p className='font-light text-lg'> I do web development using React and Vanilla JS. I have solid background in computer networking from my previous education and have experience using Linux and Docker Container. I look forward to connecting and exploring collaborative opportunities in the field of web development and DevOps. </p>
      </div>
      <div className='flex gap-5'>
        <Link href="https://github.com/gthnmp" target='_blank' className='flex  gap-2 items-center'> My Github <BsArrowUpRight/></Link>
        <Link href="mailto:gathan.mahesa@gmail.com" className='flex  gap-2 items-center'> Mail Me <BsArrowUpRight/></Link>
      </div>
    </main>
  )
}
