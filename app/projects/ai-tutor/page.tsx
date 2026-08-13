"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Database,
  FileSearch,
  Layers3,
  Search,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";

const technologies = [
  "Python",
  "NLP",
  "RAG",
  "Transformers",
  "Vector Embeddings",
  "Semantic Search",
];

const features = [
  "Knowledge-base retrieval",
  "Semantic search",
  "Vector embeddings",
  "Relevant document retrieval",
  "Document-grounded generation",
  "Curriculum-focused Q&A",
];

export default function AITutorPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to portfolio
        </Link>

       
      </nav>

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
              AI Project · 02
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl md:text-8xl">
              AI Tutor
            </h1>

            <p className="mt-4 text-xl text-zinc-500 md:text-2xl">
              Retrieval-Augmented Generation System
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              An AI tutoring system that retrieves relevant knowledge through
              semantic search and vector embeddings before generating
              document-grounded responses.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://github.com/Sujalk348/AI-TUTOR-USING-RAG-TECHNIQUE"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white/5"
              >
                <FaGithub size={15} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RAG visual */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#080808]">
            <div className="border-b border-white/10 px-6 py-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                RAG Pipeline
              </p>
            </div>

            <div className="grid md:grid-cols-5">
              {[
                {
                  icon: Search,
                  title: "Query",
                  text: "Student question",
                },
                {
                  icon: FileSearch,
                  title: "Search",
                  text: "Semantic retrieval",
                },
                {
                  icon: Database,
                  title: "Context",
                  text: "Relevant knowledge",
                },
                {
                  icon: Layers3,
                  title: "Generation",
                  text: "Context-aware response",
                },
                {
                  icon: Sparkles,
                  title: "Answer",
                  text: "Grounded output",
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className={`p-7 ${
                      index !== 4
                        ? "border-b border-white/10 md:border-b-0 md:border-r"
                        : ""
                    }`}
                  >
                    <Icon
                      size={19}
                      className="text-zinc-500"
                    />

                    <p className="mt-6 text-sm font-medium">
                      {step.title}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-zinc-600">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                01 — Overview
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Grounding AI responses in relevant knowledge.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-zinc-400">
              <p>
                The goal of this project was to build an AI tutor capable of
                answering questions using information retrieved from a
                knowledge base.
              </p>

              <p>
                Instead of relying only on generated responses, the system
                first performs semantic retrieval to identify relevant
                information.
              </p>

              <p>
                The retrieved context is then used during response generation,
                creating answers grounded in the available documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
            02 — Architecture
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Retrieval before generation.
          </h2>

          <div className="mt-12 space-y-3">
            {[
              [
                "01",
                "Student Query",
                "A student submits a question to the tutoring system.",
              ],
              [
                "02",
                "Semantic Search",
                "The query is used to find semantically relevant information.",
              ],
              [
                "03",
                "Vector Embeddings",
                "Knowledge is represented through vector embeddings to support semantic retrieval.",
              ],
              [
                "04",
                "Context Retrieval",
                "Relevant knowledge is selected and passed into the response generation stage.",
              ],
              [
                "05",
                "Grounded Response",
                "The system generates a response using the retrieved context.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="grid gap-4 rounded-2xl border border-white/10 bg-[#050505] p-6 md:grid-cols-[60px_220px_1fr] md:items-center"
              >
                <span className="text-xs text-zinc-700">
                  {number}
                </span>

                <h3 className="text-sm font-medium">
                  {title}
                </h3>

                <p className="text-sm leading-6 text-zinc-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                03 — Capabilities
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Built for knowledge-grounded Q&A.
              </h2>
            </div>

            <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 border-b border-white/10 py-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Check size={11} />
                  </span>

                  <span className="text-sm text-zinc-400">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
            04 — Technology
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            The stack behind the tutor.
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering notes */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
                05 — Engineering
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                What this project demonstrates.
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium">
                  Retrieval-augmented architecture
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  The project separates knowledge retrieval from response
                  generation, allowing relevant information to be supplied as
                  context before generating an answer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">
                  Semantic search
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Semantic retrieval is used to identify relevant knowledge
                  rather than depending only on exact keyword matching.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">
                  Grounded generation
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Retrieved information is incorporated into the generation
                  process to produce responses grounded in the available
                  knowledge base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <p className="text-sm text-zinc-600">
            Next project
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
            Computer vision for automated attendance.
          </h2>

          <Link
            href="/projects/ai-attendance"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View all Projects
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}