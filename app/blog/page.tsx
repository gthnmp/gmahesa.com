import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, philosophy, and more.',
};


function BlogCard ({title, subtitle, href} : {title: string, subtitle: string, href: string}) {
  return(
    <Link href={href} className="w-full h-max">
      <div className="w-full h-full flex flex-col">
        <div className="overflow-x-hidden">
          <span className="blog-card-title text-xl font-medium"> {title} </span>
        </div>
        <span className="font-light"> {subtitle} </span>
      </div>
    </Link>
  )
}
export default function Home() {
  return (
    <main className='w-full h-full flex flex-col gap-10 px-4 md:px-0'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-medium'> I also have poorly written blogs </h1>
      </div>
      <div className="flex flex-col gap-5">
        <BlogCard title={"Impostor Syndrome and The Dunning Kruger Effect"} subtitle="The correlation between impostor syndrome and the Dunning-Kruger effect" href='/blog/impostor-syndrome-and-dunning-kruger-effect'/>
      </div>
    </main>
  )
}
