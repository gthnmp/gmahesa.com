import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

interface SocialMediaCardProps {
  src?: string | StaticImageData;
  alt?: string;
  title: string;
  subtitle: string;
  href: string;
  platform?: string;
}

interface Props {
  props: SocialMediaCardProps
}

export default function Anchor ({src, alt, title, subtitle, href, platform} : SocialMediaCardProps) {
  return(
    <Link href={href} target="_blank" className="relative w-full h-20 flex gap-5 items-center bg-neutral-800 border-neutral-700 border-[1px] rounded-md px-2 py-2">
      {
        src && alt &&
        <div className="h-full w-auto rounded-full  overflow-hidden aspect-square border-[1px] border-neutral-700">
          <Image src={src} alt={alt} width={1000} height={1000} className="w-full h-full object-cover"/>
        </div>
      }
      <div className="flex flex-col">
        <span className="font-semibold">{title}</span>
        <span className="text-neutral-400">{subtitle}</span>
      </div>
      <BsArrowUpRight className="absolute right-5 scale-125"/>
    </Link>
  )
}

