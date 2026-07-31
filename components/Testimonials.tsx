"use client";

import { useState } from "react";
import Image from "next/image";
import { Item } from "@/lib/api";

// Put your image in /public folder as public/testimonial-bg.jpg
const BG_IMAGE_URL = "/R2.png";

export default function Testimonials({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);

  if (!items || items.length === 0) return null;
  const current = items[index];

  const handleNext = () => setIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section className="relative w-full min-h-[500px] py-20 px-6 md:px-16 lg:px-24 flex items-center overflow-hidden bg-black text-white select-none">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BG_IMAGE_URL}
          alt="Testimonial Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Floating Glassmorphism Card */}
      <div className="relative z-10 max-w-xl w-full bg-white/10 backdrop-blur-md border border-white/10 rounded-sm p-8 md:p-10 text-left shadow-2xl">
        
        {/* Top Bar: Stars & Decorative Quote Mark */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1 text-sky-300 text-xs">
            ★ ★ ★ ★ ★
          </div>
          <span className="text-4xl leading-none text-white/20 font-serif font-black select-none">
            ”
          </span>
        </div>

        {/* Testimonial Text */}
        <p className="text-sm md:text-base text-gray-200 font-normal leading-relaxed mb-8 min-h-[60px]">
          "{current.description || "Superior buttons and exceptional service. Thank you, Maheen Accessories!"}"
        </p>

        {/* Bottom Bar: Profile Info & Navigation Arrows */}
        <div className="flex items-end justify-between gap-4">
          
          {/* User Info */}
          <div className="flex items-center gap-3">
            {current.imageUrl ? (
              <img
                src={current.imageUrl}
                alt={current.title || "Client"}
                className="w-10 h-10 rounded-full object-cover border border-white/20"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-600 border border-white/20" />
            )}
            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">
                {current.title || "Mr. Mahabub Hasan"}
              </h4>
              <p className="text-[11px] text-gray-400 font-normal">
                {current.subtitle || "Manager Merchandising, Jamuna Denims"}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xs text-white/80 hover:bg-white/20 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xs text-white/80 hover:bg-white/20 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}