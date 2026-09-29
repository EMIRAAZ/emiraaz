"use client";

/**
 * Renders the visitor's current year. The page is statically built, so a server-rendered
 * year would freeze at build time; this updates on its own every January.
 */
export default function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
