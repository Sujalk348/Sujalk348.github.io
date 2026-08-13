"use client";

import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl md:rounded-full">

          {/* Main Navbar */}
          <div className="flex items-center justify-between px-5 py-3">

            {/* Logo */}
            <a
              href="#home"
              onClick={closeMenu}
              className="text-sm font-semibold tracking-wide"
            >
              SHIV KUMAR
              <span className="text-zinc-500">.</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Social */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://github.com/Sujalk348"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-zinc-400 transition hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/shivkumar3489/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-400 transition hover:text-white"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:bg-white/5 hover:text-white md:hidden"
            >
              {isOpen ? (
                <FaXmark size={17} />
              ) : (
                <FaBars size={17} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="border-t border-white/10 px-5 py-4 md:hidden">

              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className={`py-4 text-sm text-zinc-400 transition hover:text-white ${
                      index !== navItems.length - 1
                        ? "border-b border-white/5"
                        : ""
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Mobile Social Links */}
              <div className="mt-3 flex items-center gap-5 border-t border-white/5 pt-4">
                <a
                  href="https://github.com/Sujalk348"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-400 transition hover:text-white"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/shivkumar3489/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-zinc-400 transition hover:text-white"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}