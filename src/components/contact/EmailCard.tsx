"use client";

import { useState } from "react";

export default function EmailCard({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the mailto button still works.
    }
  };

  return (
    <div className="w-full max-w-[560px] rounded-2xl border border-black/10 bg-white p-5 shadow-[0_2px_14px_rgba(0,0,0,0.05)] md:p-6">
      <div className="flex items-center gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#F1F4FA] md:size-14">
          <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-black md:size-7">
            <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
            <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
          </svg>
        </div>
        <div className="min-w-0 text-left">
          <p className="text-xs font-light uppercase tracking-[0.2em] text-black/55">Email us</p>
          <a
            href={`mailto:${email}`}
            className="mt-1 block truncate text-lg font-semibold tracking-[-0.01em] text-black hover:underline md:text-[22px]"
          >
            {email}
          </a>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row md:mt-6">
        <a
          href={`mailto:${email}`}
          className="inline-flex h-11 w-full sm:flex-1 items-center justify-center gap-3 rounded-full bg-black px-5 text-[15px] font-semibold text-white transition-colors hover:bg-black/80"
        >
          Send Email
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12h16M14 6l6 6-6 6" />
          </svg>
        </a>
        <button
          type="button"
          onClick={copy}
          aria-live="polite"
          className="inline-flex h-11 w-full sm:flex-1 cursor-pointer items-center justify-center gap-2.5 rounded-full border-[1.5px] border-black px-5 text-[15px] font-semibold text-black transition-colors hover:bg-black hover:text-white"
        >
          {copied ? (
            <>
              <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15V6a2 2 0 0 1 2-2h8" />
              </svg>
              Copy Email
            </>
          )}
        </button>
      </div>
    </div>
  );
}
