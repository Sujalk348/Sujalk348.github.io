"use client";

import { ArrowUpRight, CalendarDays, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium text-zinc-500">
            03 — EXPERIENCE
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Building products,
            <span className="text-zinc-500"> not just projects.</span>
          </h2>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 rounded-3xl border border-white/10 bg-[#080808]"
        >
          {/* Header */}
          <div className="border-b border-white/10 p-7 md:p-9">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <Code2
                      size={18}
                      className="text-zinc-400"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Founder & Software Developer
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">
                      StudXAI
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <CalendarDays size={15} />
                Sep 2025 — Present
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "React Native",
                "TypeScript",
                "Firebase",
                "Firestore",
                "Next.js",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                Product & Engineering
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Architected and developed a multi-role School ERP mobile application.",
                  "Implemented student, teacher, admin and super-admin workflows.",
                  "Designed Firestore data models and role-based access control.",
                  "Developed 6+ academic and administrative modules.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-zinc-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-7 md:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                Deployment & Ownership
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Took the application from architecture and development through testing and deployment.",
                  "Deployed the mobile application to the Google Play Store.",
                  "Maintained production features and application workflows.",
                  "Worked across product decisions, technical implementation and continuous improvement.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-zinc-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Link */}
          <div className="border-t border-white/10 p-6 md:p-7">
            <a
              href="/projects/studxai"
              className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              View StudXAI case study

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}