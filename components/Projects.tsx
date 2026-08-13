"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="relative border-t border-white/10"
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
            02 — PROJECTS
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Things I've
                <span className="text-zinc-500"> built.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 md:text-base">
                A selection of applications and AI systems I've
                designed, developed and deployed.
              </p>
            </div>

            <a
              href="https://github.com/Sujalk348?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
            >
              View GitHub

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* Featured project */}
        {featuredProject && (
          <motion.a
            href={featuredProject.href}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative mt-14 block overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111111] to-[#070707] p-7 transition hover:border-white/20 md:p-10"
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl transition group-hover:bg-white/[0.07]" />

            <div className="relative">
              <div className="flex flex-col justify-between gap-8 md:flex-row">

                <div className="max-w-2xl">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Featured Project
                  </span>

                  <h3 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500 md:text-base">
                    {featuredProject.category}
                  </p>

                  <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
                    {featuredProject.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {featuredProject.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Project visual */}
                <div className="flex min-h-52 w-full items-center justify-center rounded-2xl border border-white/10 bg-black/40 md:min-h-64 md:w-[360px]">
                  <div className="text-center">
                    <div className="text-6xl font-semibold tracking-tighter text-white/10">
                     <Image 
                     src = "/projects/studxai/studxai.png"
                     alt="StudXAI"
                     width={250}
                     height={250}
                    />
                    
                    </div>

                
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-sm text-zinc-500">
                  React Native · TypeScript · Firebase
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={17} />
                </div>
              </div>
            </div>
          </motion.a>
        )}

        {/* Other projects */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}