import { socialLinks } from "@/lib/site";
import Eyebrow from "./Eyebrow";
import SocialIcon from "./SocialIcon";

/** "FOLLOW US" label between two fading hairlines, with round social buttons below. */
export default function FollowUs() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full max-w-[720px] items-center gap-4 md:gap-6">
        <div aria-hidden className="h-px flex-1 bg-linear-to-r from-transparent to-black/20" />
        <Eyebrow>Follow Us</Eyebrow>
        <div aria-hidden className="h-px flex-1 bg-linear-to-l from-transparent to-black/20" />
      </div>

      <ul className="mt-6 flex items-center gap-3 md:mt-7 md:gap-4">
        {socialLinks.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`EMIRAAZ on ${social.label}`}
              className="inline-flex size-14 items-center justify-center rounded-full bg-[#F1F4FA] text-black transition-colors hover:bg-[#E4E9F4] md:size-[68px]"
            >
              <SocialIcon icon={social.icon} className="size-6 md:size-7" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
