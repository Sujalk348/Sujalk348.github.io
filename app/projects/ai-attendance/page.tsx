"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Database,
  Eye,
  ScanFace,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6"; 

const technologies = [
  "Python",
  "OpenCV",
  "face_recognition",
  "Firebase",
  "NumPy",
];

const features = [
  "Face detection",
  "Face encoding",
  "Identity verification",
  "Real-time processing",
  "Attendance recording",
  "Firebase data storage",
];

export default function AIAttendancePage() {
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
              AI Project · 03
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl md:text-8xl">
              Smart AI Attendance
            </h1>

            <p className="mt-4 text-xl text-zinc-500 md:text-2xl">
              Facial Recognition Attendance System
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              A real-time attendance system using computer vision and facial
              recognition to detect, encode and verify identities before
              storing attendance records.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://github.com/Sujalk348/Ai-Attendance"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white/5"
              >
                <FaGithub size={15} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Computer vision visual */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#080808]">
            <div className="border-b border-white/10 px-6 py-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                Recognition Pipeline
              </p>
            </div>

            <div className="grid md:grid-cols-4">
              {[
                {
                  icon: Eye,
                  title: "Detection",
                  text: "Locate faces",
                },
                {
                  icon: ScanFace,
                  title: "Encoding",
                  text: "Create face representation",
                },
                {
                  icon: ShieldCheck,
                  title: "Verification",
                  text: "Match identity",
                },
                {
                  icon: Database,
                  title: "Attendance",
                  text: "Store attendance record",
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className={`p-8 ${
                      index !== 3
                        ? "border-b border-white/10 md:border-b-0 md:border-r"
                        : ""
                    }`}
                  >
                    <Icon size={20} className="text-zinc-500" />

                    <h3 className="mt-7 text-sm font-medium">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs text-zinc-600">
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
                Automating attendance with computer vision.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-zinc-400">
              <p>
                This project explores how facial recognition can be used to
                automate attendance workflows.
              </p>

              <p>
                The system processes faces through detection, encoding and
                identity verification before recording the resulting
                attendance information.
              </p>

              <p>
                Firebase is used for storing and retrieving attendance data
                associated with enrolled student profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
            02 — Pipeline
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            From camera input to attendance record.
          </h2>

          <div className="mt-12 space-y-3">
            {[
              [
                "01",
                "Face Detection",
                "Identify faces from the incoming visual data.",
              ],
              [
                "02",
                "Face Encoding",
                "Generate a representation that can be used for identity matching.",
              ],
              [
                "03",
                "Identity Verification",
                "Compare the detected face against enrolled student profiles.",
              ],
              [
                "04",
                "Attendance Record",
                "Store the verified attendance information in Firebase.",
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
                Computer vision meets application data.
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
            The stack behind the system.
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

      {/* Engineering */}
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
                  Computer vision pipeline
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Built a pipeline covering face detection, encoding and
                  identity verification using Python and computer vision
                  tooling.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">
                  Identity-based processing
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Connected facial recognition with enrolled student profiles
                  so that verified identities could be associated with
                  attendance records.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">
                  Cloud data integration
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Integrated Firebase for attendance storage and retrieval,
                  connecting the computer vision pipeline with application
                  data.
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
            Back to the main portfolio
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
            Explore more of my work.
          </h2>

          <Link
            href="/#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            View all projects
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}