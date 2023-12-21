import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from '@/utils/blog';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

function BlogCard ({title, summary, href} : {title: string, summary: string, href: string}) {
  return(
    <Link href={href} className="w-full h-max">
      <div className="w-full h-full flex flex-col">
        <div className="overflow-x-hidden">
          <span className="blog-card-title text-xl font-medium"> {title} </span>
        </div>
        <span className="font-light"> {summary} </span>
      </div>
    </Link>
  )
}

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <main className='w-full h-full flex flex-col gap-10 px-4 md:px-0'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-xl md:text-3xl font-medium'> I also have poorly written blogs </h1>
        <p className='font-light'> Opinions expressed are solely my own and do not express the views or opinions of my employer. </p> 
      </div>
      <ul className='flex flex-col gap-5'>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <BlogCard key={post.slug} title={post.metadata.title} summary={post.metadata.summary} href={`/blog/${post.slug}`}/>
          ))}
      </ul>
    </main>
  );
}
