"use client";

import { ArrowUpRight, Code2, Rocket, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Code2,
    title: "Production Software",
    description:
      "I build mobile and web applications with modern technologies, focusing on clean architecture, scalable data models and real-world usability.",
  },
  {
    icon: BrainCircuit,
    title: "AI Systems",
    description:
      "I build practical AI applications using machine learning, NLP, RAG, semantic search, vector embeddings and computer vision.",
  },
  {
    icon: Rocket,
    title: "From Idea to Launch",
    description:
      "I take products from architecture and development through testing, deployment and continuous improvement.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium text-zinc-500">
            01 — ABOUT
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            I don't just learn
            <span className="text-zinc-500"> technologies.</span>
            <br />
            I build with them.
          </h2>
        </motion.div>

        {/* About text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 max-w-3xl"
        >
          <p className="text-base leading-8 text-zinc-400 md:text-lg">
            I'm a B.Tech CSE-AIML graduate and software developer focused on
            building useful products at the intersection of software and AI.
            I enjoy turning ideas into working applications — from designing
            the architecture and implementing features to deploying them for
            real users.
          </p>

          <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">
            I founded <span className="text-white">StudXAI</span>, where I
            built a multi-role School ERP and learning platform using React
            Native, TypeScript and Firebase. The application includes
            role-based dashboards, academic management modules and production
            deployment.
          </p>

          <a
            href="#projects"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white"
          >
            Explore my projects

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

        {/* What I build */}
        <div className="mt-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-sm font-medium text-zinc-500"
          >
            WHAT I BUILD
          </motion.p>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group bg-[#080808] p-7 transition hover:bg-[#0c0c0c] md:p-8"
                >
                  <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    <Icon
                      size={19}
                      className="text-zinc-400 transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-lg font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4"
        >
          <div>
            <p className="text-3xl font-semibold">4</p>
            <p className="mt-1 text-sm text-zinc-500">
              Role-based dashboards
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">20+</p>
            <p className="mt-1 text-sm text-zinc-500">
              ERP modules
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">3</p>
            <p className="mt-1 text-sm text-zinc-500">
              Featured products
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold">1</p>
            <p className="mt-1 text-sm text-zinc-500">
              Production app
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}