"use client";

import { useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "emiraaz:saved-posts";
const listeners = new Set<() => void>();

function readSaved(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

/** Share (native share sheet, or copy link) and save-for-later (kept in this browser). */
export default function ShareSave({ slug, title }: { slug: string; title: string }) {
  const saved = useSyncExternalStore(
    subscribe,
    () => readSaved().includes(slug),
    () => false,
  );
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // User cancelled the share sheet, or clipboard is unavailable — nothing to do.
    }
  };

  const toggleSave = () => {
    try {
      const current = readSaved();
      const next = current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      listeners.forEach((l) => l());
    } catch {
      // Storage blocked (e.g. private mode) — saving simply isn't available.
    }
  };

  const btn =
    "relative inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-black/60 transition-colors hover:bg-black/5 hover:text-black";

  return (
    <div className="flex items-center gap-2">
      <button type="button" onClick={share} aria-label="Share this article" className={btn}>
        <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="2.5" />
          <circle cx="6" cy="12" r="2.5" />
          <circle cx="18" cy="19" r="2.5" />
          <path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4" />
        </svg>
        {copied && (
          <span className="absolute top-full mt-1 whitespace-nowrap rounded bg-black px-2 py-1 text-[11px] text-white">
            Link copied
          </span>
        )}
      </button>
      <button
        type="button"
        onClick={toggleSave}
        aria-pressed={saved}
        aria-label={saved ? "Remove from saved" : "Save for later"}
        className={btn}
      >
        <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
          <path d="M6 3.5h12v17l-6-4.2-6 4.2z" />
        </svg>
      </button>
    </div>
  );
}
