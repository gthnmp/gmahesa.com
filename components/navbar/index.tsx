"use client"
import Link from "next/link";

export default function Navbar () {
  return(
    <nav className="absolute top-0 w-full h-20 flex justify-between items-center font-light text-sm md:text-base px-4 md:px-0">
      <div className="flex gap-5 items-center">
        <Link href="/"> Home </Link>
        <Link href="/blog"> Blog </Link>
      </div>
    </nav>
  )
}
