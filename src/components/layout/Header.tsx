"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/lib/site";
import Container from "./Container";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="relative z-50 bg-white">
      <Container className="flex h-[52px] items-center justify-between md:h-16 lg:h-[72px]">
        <Logo priority />

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="text-base text-black transition-opacity hover:opacity-60 aria-[current=page]:opacity-60"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-black lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Hairline that fades out toward both edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-black/20 to-transparent"
      />

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        aria-label="Main"
        className={`absolute inset-x-0 top-full border-t border-black/10 bg-white lg:hidden ${open ? "block" : "hidden"}`}
      >
        <Container>
          <ul className="flex flex-col py-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="block py-3 text-base text-black aria-[current=page]:opacity-60"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
