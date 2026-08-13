"use client";

import { X } from "lucide-react";
import Image from "next/image";

type ImageLightboxProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

export default function ImageLightbox({
  src,
  alt,
  onClose,
}: ImageLightboxProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close image"
        className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
      >
        <X size={18} />
      </button>

      <div
        className="relative h-[90vh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>
    </div>
  );
}