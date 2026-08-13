"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Languages",
    description: "Core programming languages I use to build applications.",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    number: "02",
    title: "Web & Mobile",
    description: "Frontend technologies for modern web and mobile products.",
    skills: ["React Native", "React", "Next.js", "Expo"],
  },
  {
    number: "03",
    title: "Backend & APIs",
    description: "Backend systems, APIs and application services.",
    skills: ["Node.js", "REST APIs", "Firebase Cloud Functions"],
  },
  {
    number: "04",
    title: "Database & Cloud",
    description: "Cloud platforms and databases used in my applications.",
    skills: ["Firebase", "Firestore", "MySQL", "MongoDB"],
  },
  {
    number: "05",
    title: "AI & Machine Learning",
    description: "Technologies used to build practical AI systems.",
    skills: [
      "Machine Learning",
      "NLP",
      "RAG",
      "Semantic Search",
      "Vector Embeddings",
      "Transformers",
      "Computer Vision",
    ],
  },
  {
    number: "06",
    title: "Tools",
    description: "Tools I use throughout development.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            04 — SKILLS
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            The tools I use to
            <span className="text-zinc-500"> build.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
            A practical stack spanning software development, cloud
            applications and AI engineering.
          </p>
        </motion.div>

        {/* Skill grid */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="bg-[#080808] p-7 transition hover:bg-[#0c0c0c] md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-zinc-700">
                  {group.number}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
              </div>

              <h3 className="mt-8 text-lg font-medium">
                {group.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-zinc-600">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-xs text-zinc-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}