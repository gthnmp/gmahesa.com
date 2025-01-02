import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

interface Props {
  src?: string | StaticImageData;
  alt?: string;
  title: string;
  subtitle?: string;
  summary?: string;
  href: string;
  platform?: string;
}

export function BlogAnchor ({title, summary, href} : Props) {
  return(
    <Link href={href} className="relative overflow-hidden max-w-full w-full h-20 flex gap-5 items-center bg-slate-50 border-neutral-700 border-[1px] rounded-md px-2 py-2">
      <div className="flex flex-col max-w-[80%]">
        <span className="font-medium line-clamp-1">{title}</span>
        <span className="font-light text-black line-clamp-1">{summary}</span>
      </div>
      <BsArrowUpRight className="absolute right-5 scale-125"/>
    </Link>
  )
}

export function SocialAnchor ({src, alt, title, subtitle, href, platform} : Props) {
  return(
    <Link href={href} target="_blank" className="relative w-full h-20 flex gap-5 items-center bg-slate-50 border-neutral-700 border-[1px] rounded-md px-2 py-2">
      {
        src && alt &&
        <div className="h-full w-auto rounded-full  overflow-hidden aspect-square border-[1px] border-neutral-700">
          <Image src={src} alt={alt} width={200} height={200} className="w-full h-full object-cover"/>
        </div>
      }
      <div className="flex flex-col">
        <span className="font-medium">{title}</span>
        <span className="font-light text-neutral-400">{subtitle}</span>
      </div>
      <BsArrowUpRight className="absolute right-5 scale-125"/>
    </Link>
  )
}

