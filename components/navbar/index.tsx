"use client"
import { signOut } from "next-auth/react";
import Link from "next/link";
import {BiLogOut} from 'react-icons/bi'

export default function Navbar ({session} : {session : any}) {
  return(
    <nav className="absolute top-0 w-full h-20 flex justify-between items-center text-sm md:text-base px-4 md:px-0">
      <div className="flex gap-5 items-center">
        <Link href="/"> Home </Link>
        <Link href="/blog"> Blog </Link>
        <Link href="/work"> Work </Link>
        <Link href="/guestbook"> Guestbook </Link>
      </div>
      {session &&
        <button onClick={() => signOut()} className="bg-red-700 p-2 rounded-md flex items-center gap-2">
          <BiLogOut/>
          Sign Out
        </button>
      }
    </nav>
  )
}
