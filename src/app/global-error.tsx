"use client";

import "./globals.css";

// Last-resort fallback when the root layout itself fails — must render its own <html>/<body>.
export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white px-5 text-center text-black">
        <title>Something went wrong | Emiraaz</title>
        <div>
          <p className="text-sm font-light uppercase tracking-[0.15em]">Something Went Wrong</p>
          <h1 className="mt-4 text-3xl font-bold tracking-[-0.02em] md:text-4xl">We couldn’t load the site</h1>
          <p className="mt-4 font-light">Please try again in a moment.</p>
          <button
            type="button"
            onClick={retry}
            className="mt-8 h-11 cursor-pointer rounded-full bg-black px-6 font-semibold text-white hover:bg-black/80"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
