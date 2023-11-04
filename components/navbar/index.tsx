import Link from "next/link";

export default function Navbar () {
  return(
    <nav className="w-full h-20 flex gap-5 items-center">
      <Link href="/"> Home </Link>
      <Link href="/blog"> Blog </Link>
      <Link href="/guestbook"> Guestbook </Link>
    </nav>
  )
}
