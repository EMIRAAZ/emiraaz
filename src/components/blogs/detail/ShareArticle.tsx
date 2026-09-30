"use client";

import { useState } from "react";

const circle =
  "inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-[#F1F4FA] transition-colors hover:bg-[#E4E9F4] md:size-12";

export default function ShareArticle({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — nothing to do.
    }
  };

  const networks = [
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
      icon: (
        <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black">
          <path d="M18.2 2.5h3.4l-7.4 8.5 8.7 10.5h-6.8l-5.3-6.5-6.1 6.5H1.3l7.9-9L.9 2.5h7l4.8 5.9 5.5-5.9zm-1.2 17h1.9L7.1 4.4H5.1z" />
        </svg>
      ),
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      icon: (
        <svg aria-hidden width="22" height="22" viewBox="0 0 24 24" className="text-black">
          <circle cx="12" cy="12" r="10" fill="currentColor" />
          <path fill="#fff" d="M13.4 21.9v-7h2.3l.4-2.7h-2.7v-1.7c0-.8.2-1.3 1.3-1.3h1.4V6.8c-.2 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v2h-2.3v2.7h2.3v7a10 10 0 0 0 2.7 0z" />
        </svg>
      ),
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      icon: (
        <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-black">
          <circle cx="5" cy="5" r="2.2" />
          <rect x="3" y="8.5" width="4" height="12.5" rx="0.5" />
          <path d="M10 8.5h3.8v1.8c.6-1.1 2-2.1 4-2.1 3.2 0 4.2 2 4.2 5.2V21h-4v-6.7c0-1.6-.3-2.8-1.9-2.8s-2.1 1.2-2.1 2.8V21h-4z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
      <p className="text-base font-semibold text-black md:text-[17px]">Share This Article On</p>
      <div className="flex items-center gap-2.5">
        <button type="button" onClick={copy} aria-label="Copy article link" className={`relative ${circle}`}>
          <svg aria-hidden width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
            <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2" />
            <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2" />
          </svg>
          {copied && (
            <span className="absolute top-full mt-1.5 whitespace-nowrap rounded bg-black px-2 py-1 text-[11px] text-white">
              Copied
            </span>
          )}
        </button>
        {networks.map((n) => (
          <a key={n.label} href={n.href} target="_blank" rel="noopener noreferrer" aria-label={n.label} className={circle}>
            {n.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
