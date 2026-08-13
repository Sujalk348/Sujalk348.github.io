"use client";

import {
  ArrowUpRight,
  Mail,
  FileText,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-600">
            06 — CONTACT
          </p>

          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl md:text-8xl">
            Let's build
            <span className="text-zinc-600">
              {" "}something.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-500 md:text-lg">
            I'm open to software engineering, AI engineering and
            product-building opportunities. If you're working on an
            interesting problem, I'd be happy to connect.
          </p>

          <a
            href="mailto:sujalkumar3489@gmail.com"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white/5"
          >
            <Mail size={17} />

            Send me an email

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-20 grid gap-3 sm:grid-cols-3"
        >
          <a
            href="https://linkedin.com/in/shivkumar3489"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-[#080808] p-6 transition hover:border-white/20 hover:bg-[#0c0c0c]"
          >
            <FaLinkedin
              size={19}
              className="text-zinc-500 transition group-hover:text-white"
            />

            <p className="mt-7 text-sm font-medium">
              LinkedIn
            </p>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs text-zinc-600">
                Connect with me
              </p>

              <ArrowUpRight
                size={14}
                className="text-zinc-700 transition group-hover:text-white"
              />
            </div>
          </a>

          <a
            href="https://github.com/Sujalk348"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-[#080808] p-6 transition hover:border-white/20 hover:bg-[#0c0c0c]"
          >
            <FaGithub
              size={19}
              className="text-zinc-500 transition group-hover:text-white"
            />

            <p className="mt-7 text-sm font-medium">
              GitHub
            </p>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs text-zinc-600">
                View my code
              </p>

              <ArrowUpRight
                size={14}
                className="text-zinc-700 transition group-hover:text-white"
              />
            </div>
          </a>

          <a
            href="/resume.pdf"
            download
            className="group rounded-2xl border border-white/10 bg-[#080808] p-6 transition hover:border-white/20 hover:bg-[#0c0c0c]"
          >
            <FileText
              size={19}
              className="text-zinc-500 transition group-hover:text-white"
            />

            <p className="mt-7 text-sm font-medium">
              Resume
            </p>

            <div className="mt-2 flex items-center justify-between">
              <p className="text-xs text-zinc-600">
                Download PDF
              </p>

              <ArrowUpRight
                size={14}
                className="text-zinc-700 transition group-hover:text-white"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}