"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  
} from "lucide-react";
import { FaGithub} from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PhoneMockup from "@/components/PhoneMockup";
const technologies = [
  "React Native",
  "TypeScript",
  "Expo",
  "Firebase",
  "Firestore",
  "Next.js",
];

const features = [
  "Student dashboard",
  "Teacher dashboard",
  "School admin dashboard",
  "Super admin dashboard",
  "Attendance management",
  "Marks management",
  "Student onboarding",
  "Academic management",
  "Push notifications",
  "Role-based access control",
];

export default function StudXAIPage() {
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
              Featured Project · 01
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl md:text-8xl">
              StudXAI
            </h1>

            <p className="mt-4 text-xl text-zinc-500 md:text-2xl">
              School ERP & Learning Platform
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              A multi-role educational platform designed for students,
              teachers, school administrators and super administrators.
              Built as a production mobile application using React Native,
              TypeScript and Firebase.
            </p>

            {/* Links */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.sujalk348.FirebaseAuth&hl=en_IN"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Google Play
                <ExternalLink size={15} />
              </a>

              <a
                href="https://studxai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium transition hover:bg-white/5"
              >
                Live Website
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://github.com/Sujalk348"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:bg-white/5"
              >
                <FaGithub size={15} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

     {/* Project screenshots */}
<section className="border-b border-white/10">
  <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
        Product Screens
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
        Inside StudXAI
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
        A look at the mobile experience and core academic workflows
        built for the StudXAI platform.
      </p>
    </motion.div>

    {/* Dashboard */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#090909]"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <div>
          <p className="text-sm font-medium text-white">
            Dashboard
          </p>

          <p className="mt-1 text-xs text-zinc-600">
            Main application experience
          </p>
        </div>

        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-600">
          01
        </span>
      </div>

      <div className="flex min-h-[260px] items-center justify-center bg-black p-5 sm:min-h-[380px] md:min-h-[500px] md:p-8">
        <div className="relative h-[240px] w-full sm:h-[340px] md:h-[440px]">
          <Image
            src="/projects/studxai/dashboard.png"
            alt="StudXAI dashboard"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      </div>
    </motion.div>

  {/* Mobile Screens */}
<div className="mt-6 grid gap-5 md:grid-cols-3">

  {/* Login */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="overflow-hidden rounded-3xl border border-white/10 bg-[#090909]"
  >
    <div className="border-b border-white/10 px-5 py-4">
      <p className="text-sm font-medium">
        Login
      </p>

      <p className="mt-1 text-xs text-zinc-600">
        Authentication
      </p>
    </div>

    <div className="flex min-h-[500px] items-center justify-center bg-black px-4 py-8">
      <PhoneMockup
        src="/projects/studxai/login.jpeg"
        alt="StudXAI login screen"
      />
    </div>
  </motion.div>

  {/* Attendance */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: 0.1,
    }}
    className="overflow-hidden rounded-3xl border border-white/10 bg-[#090909]"
  >
    <div className="border-b border-white/10 px-5 py-4">
      <p className="text-sm font-medium">
        Attendance
      </p>

      <p className="mt-1 text-xs text-zinc-600">
        Attendance management
      </p>
    </div>

    <div className="flex min-h-[500px] items-center justify-center bg-black px-4 py-8">
      <PhoneMockup
        src="/projects/studxai/attendance.jpeg"
        alt="StudXAI attendance screen"
      />
    </div>
  </motion.div>

  {/* Academic */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: 0.2,
    }}
    className="overflow-hidden rounded-3xl border border-white/10 bg-[#090909]"
  >
    <div className="border-b border-white/10 px-5 py-4">
      <p className="text-sm font-medium">
        Academic Summary
      </p>

      <p className="mt-1 text-xs text-zinc-600">
        Marks & performance
      </p>
    </div>

    <div className="flex min-h-[500px] items-center justify-center bg-black px-4 py-8">
      <PhoneMockup
        src="/projects/studxai/marks.jpeg"
        alt="StudXAI academic summary screen"
      />
    </div>
  </motion.div>

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
                From idea to production.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-zinc-400">
              <p>
                StudXAI was built as a school-focused platform bringing
                academic management and learning workflows into one
                application.
              </p>

              <p>
                The platform was designed around multiple user roles,
                allowing students, teachers and administrators to access
                different workflows through dedicated dashboards.
              </p>

              <p>
                The application combines mobile development, authentication,
                database architecture and role-based access into a single
                production-ready system.
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
            How the application is structured.
          </h2>

          <div className="mt-12 grid gap-3 md:grid-cols-5">
            {[
              ["01", "React Native", "Mobile application"],
              ["02", "Authentication", "Firebase Auth"],
              ["03", "Firestore", "Application data"],
              ["04", "RBAC", "Role-based access"],
              ["05", "Production", "Deployment & maintenance"],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-[#050505] p-6"
              >
                <span className="text-xs text-zinc-700">
                  {number}
                </span>

                <h3 className="mt-6 text-base font-medium">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-zinc-600">
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
                03 — Features
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Built around real workflows.
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
            The stack behind StudXAI.
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
                What I worked on.
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium">
                  Role-based application design
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Designed separate application experiences around the
                  responsibilities of students, teachers and administrators,
                  with access controlled through authentication and roles.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">
                  Firestore data architecture
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Structured application data around the platform's academic
                  and management workflows while using Firebase for cloud
                  storage and real-time application data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">
                  Production deployment
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  Took the application beyond local development through
                  testing, production builds, deployment and ongoing
                  maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <p className="text-sm text-zinc-600">
            Want to see more?
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl">
            Let's build something useful.
          </h2>

          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-black transition hover:bg-white/5"
            >
              Get in touch
            </Link>

            <Link
              href="/#projects"
              className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              More projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}