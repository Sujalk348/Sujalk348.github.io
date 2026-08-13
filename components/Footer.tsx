"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">
            SHIV KUMAR<span className="text-zinc-600">.</span>
          </p>

          <p className="mt-1 text-xs text-zinc-700">
            Software Developer & Product Builder
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Shiv Kumar
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition hover:bg-white hover:text-black"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}