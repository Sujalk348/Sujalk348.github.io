"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      href={project.href}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group block rounded-2xl border border-white/10 bg-[#080808] p-6 transition-colors hover:border-white/20 hover:bg-[#0c0c0c] md:p-7"
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs text-zinc-600">
            {project.number}
          </span>

          <p className="mt-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
            {project.category}
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition group-hover:border-white/20 group-hover:text-white">
          <ArrowUpRight size={17} />
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-500">
        {project.description}
      </p>

      {/* Features */}
      <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {project.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2 text-xs text-zinc-500"
          >
            <span className="h-1 w-1 rounded-full bg-zinc-600" />
            {feature}
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="mt-7 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11px] text-zinc-500"
          >
            {technology}
          </span>
        ))}
      </div>
    </motion.a>
  );
}