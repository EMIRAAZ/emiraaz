import Image from "next/image";

export function PartnerLogo({ name = "EMIRAAZ" }: { name?: string }) {
  return (
    <Image
      src="/emiraaz-logo.png"
      alt={name}
      width={140}
      height={24}
      className="max-h-4 sm:max-h-5 w-auto max-w-[85px] sm:max-w-[125px] object-contain transition-transform duration-300"
    />
  );
}
