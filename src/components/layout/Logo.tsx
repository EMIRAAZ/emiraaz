import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "h-[18px] md:h-6 lg:h-[30px]", priority = false }: LogoProps) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-flex shrink-0">
      <Image
        src={siteConfig.logo.src}
        alt={siteConfig.name}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        priority={priority}
        className={`w-auto ${className}`}
      />
    </Link>
  );
}
