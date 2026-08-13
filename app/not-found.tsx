import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="text-center">

        <p className="text-sm uppercase tracking-[0.2em] text-zinc-700">
          404
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
          Page not found.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-zinc-500">
          The page you're looking for doesn't exist or may have
          been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
        >
          <ArrowLeft size={15} />
          Back to portfolio
        </Link>

      </div>
    </main>
  );
}