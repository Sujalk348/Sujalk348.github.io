"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_280px]">

          {/* LEFT — Main content */}
          <div className="max-w-4xl">

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-sm text-zinc-400">
                Founder & Software Developer at StudXAI
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
            >
              I build
              <br />

              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                AI-powered products.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg"
            >
              Software Developer and Product Builder specializing in
              React Native, Next.js, Node.js and AI/ML. I build
              products from idea to production.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View my work

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                <Download size={16} />
                Download resume
              </a>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="mt-16 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-zinc-500"
            >
              <span>React Native</span>
              <span>•</span>
              <span>Next.js</span>
              <span>•</span>
              <span>Node.js</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Firebase</span>
              <span>•</span>
              <span>AI / ML</span>
            </motion.div>
          </div>

          {/* RIGHT — Profile */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-white/[0.08] blur-3xl" />

              {/* Image */}
              <div className="relative h-52 w-52 overflow-hidden rounded-full border border-white/10 bg-zinc-900 sm:h-90 sm:w-90">
                <Image
                  src="/profile/profile.png"
                  alt="Shiv Kumar"
                  fill
                  priority
                  className="object-cover"
                  sizes="240px"
                />
              </div>

              {/* Small badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#080808] px-4 py-2 text-xs text-zinc-400 shadow-xl">
                Building with AI
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-6 hidden items-center gap-2 text-xs text-zinc-600 md:flex"
        >
          <ArrowDown size={14} />
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
}