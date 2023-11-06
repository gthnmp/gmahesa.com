import Anchor from "@/components/anchor"
import Link from "next/link"

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
        <BlogCard title={"Managin Space With LVM"} subtitle="Understanding the concept of Logical Volume Manager" href='/'/>
        <BlogCard title={"Principles to Read More Books"} subtitle="6 principles to improve and read more books" href='/'/>
        <BlogCard title={"How To Install Docker Enginer On Ubuntu Machine"} subtitle="Installing a Docker engine on an Ubuntu machine" href='/'/>
        <BlogCard title={"Grab with Grep"} subtitle="General overview and tricks using grep" href='/'/>
        <BlogCard title={"Building E-Commerce Site For Onix"} subtitle="Process and documentation" href='/'/>
      </div>
    </main>
  )
}
