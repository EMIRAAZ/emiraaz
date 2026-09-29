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
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="text-sm text-black transition-opacity hover:opacity-60 aria-[current=page]:opacity-60"
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
          {/* Three bars that morph into an ✕ */}
          <span aria-hidden className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ease-out motion-reduce:transition-none ${
                open ? "translate-y-[6.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 motion-reduce:transition-none ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] w-5 rounded-full bg-current transition-transform duration-300 ease-out motion-reduce:transition-none ${
                open ? "-translate-y-[6.25px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {/* Hairline that fades out toward both edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-black/20 to-transparent"
      />

      {/* Mobile nav — slides/fades open by animating grid rows 0fr → 1fr */}
      <nav
        id="mobile-nav"
        aria-label="Main"
        inert={!open}
        className={`absolute inset-x-0 top-full grid bg-white shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <Container>
            <ul className="flex flex-col py-2">
              {mainNav.map((item, i) => (
                <li
                  key={item.href}
                  style={{ transitionDelay: open ? `${60 + i * 35}ms` : "0ms" }}
                  className={`transition-[opacity,translate] duration-300 ease-out motion-reduce:transition-none ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"
                  }`}
                >
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
        </div>
      </nav>
    </header>
  );
}
