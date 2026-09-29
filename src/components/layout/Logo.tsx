import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "h-4 md:h-5 lg:h-6", priority = false }: LogoProps) {
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
