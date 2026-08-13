"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

type PhoneMockupProps = {
  src: string;
  alt: string;
};

export default function PhoneMockup({
  src,
  alt,
}: PhoneMockupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative mx-auto block h-[430px] w-[215px] cursor-zoom-in"
        aria-label={`Open ${alt}`}
      >
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25 }}
          className="relative h-full w-full"
        >
          {/* Phone frame */}
          <div className="absolute inset-0 rounded-[2.4rem] border-[6px] border-zinc-800 bg-black shadow-2xl shadow-black/50">
            
            {/* Dynamic island */}
            <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

            {/* Screen */}
            <div className="absolute inset-[5px] overflow-hidden rounded-[2rem] bg-black">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="215px"
              />
            </div>

            {/* Side button */}
            <div className="absolute -right-[8px] top-28 h-16 w-[3px] rounded-r-full bg-zinc-700" />

            {/* Volume buttons */}
            <div className="absolute -left-[8px] top-24 h-10 w-[3px] rounded-l-full bg-zinc-700" />

            <div className="absolute -left-[8px] top-36 h-14 w-[3px] rounded-l-full bg-zinc-700" />
          </div>

          {/* Hover label */}
          <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/10 bg-black/80 px-3 py-1.5 text-[10px] text-zinc-400 opacity-0 backdrop-blur transition group-hover:opacity-100">
            Click to enlarge
          </div>
        </motion.div>
      </button>

      {isOpen && (
        <ImageLightbox
          src={src}
          alt={alt}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}