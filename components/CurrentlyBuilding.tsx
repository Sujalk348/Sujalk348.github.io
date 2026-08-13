"use client";

import {
  ArrowUpRight,
  Construction,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function CurrentlyBuilding() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080808] p-7 md:p-10"
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative">
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Construction
                  size={17}
                  className="text-zinc-400"
                />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                  Currently Building
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-xs text-zinc-600">
                    In development
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mt-10 grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={18}
                    className="text-zinc-500"
                  />

                  <span className="text-sm text-zinc-500">
                    AI Education
                  </span>
                </div>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                  StudXAI
                  <span className="text-zinc-600">
                    {" "}AI Community
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
                  Building an AI learning environment designed to help
                  students explore AI, create with modern tools and develop
                  practical skills through projects.
                </p>
              </div>

              <div className="md:text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-700">
                  Focus
                </p>

                <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                  {[
                    "AI Literacy",
                    "Project-Based Learning",
                    "AI Tools",
                    "Student Community",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href="https://learn.studxai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white"
                >
                  Visit StudXAI

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}