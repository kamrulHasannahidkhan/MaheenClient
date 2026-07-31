"use client";
import { useState } from "react";
import { Item } from "@/lib/api";

export default function Portfolio({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  if (items.length === 0) return null;

  const hasMultiple = items.length > 1;
  const prev = hasMultiple ? items[(index - 1 + items.length) % items.length] : null;
  const current = items[index];
  const next = hasMultiple ? items[(index + 1) % items.length] : null;

  return (
    <section className="relative py-20 bg-white text-gray-900 text-center overflow-hidden select-none">
      
      {/* 1. Background Watermark - Solid Dark Gray, No Opacity Reduction */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 w-screen z-0 overflow-hidden whitespace-nowrap text-center">
        <h1 
          className="text-[140px] sm:text-[210px] md:text-[280px] lg:text-[340px] font-light tracking-[0.15em] text-[#5A5A5A] uppercase leading-none"
          style={{ fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', 'Cinzel', Georgia, serif" }}
        >
          PORTFOLIO
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <p className="text-[11px] tracking-widest text-blue-600 font-semibold mb-3 uppercase">
          02// PHOTO ALBUMS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-1 tracking-tight">
          Collection of photos <span className="italic font-serif font-normal">All of Our</span>
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold mb-14 tracking-tight">Best Works</h2>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center max-w-6xl mx-auto">
          
          {/* Left Preview Card */}
          {prev && (
            <div className="hidden md:block w-72 h-80 rounded-2xl overflow-hidden shrink-0 z-10 shadow-sm opacity-90">
              <img
                src={prev.imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Left Navigation Arrow */}
          {hasMultiple && (
            <button
              onClick={() => setIndex((index - 1 + items.length) % items.length)}
              aria-label="Previous item"
              className="mx-6 text-2xl text-gray-900 hover:scale-125 transition-transform z-30 shrink-0 font-light"
            >
              ←
            </button>
          )}

          {/* Main Center Card */}
          <div className="relative z-20 w-full max-w-xl shrink-0">
            <div className="relative w-full h-80 rounded-2xl shadow-2xl overflow-hidden bg-gray-100">
              
              {current.imageUrl && (
                <img
                  src={current.imageUrl}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Top-Right Circle Arrow Button */}
              {hasMultiple && (
                <button
                  onClick={() => setIndex((index + 1) % items.length)}
                  aria-label="Next image"
                  className="absolute top-5 right-5 bg-white/90 hover:bg-white text-gray-600 rounded-full w-8 h-8 flex items-center justify-center shadow-md text-xs transition-transform hover:scale-105"
                >
                  ›
                </button>
              )}

              {/* Bottom-Left Text Overlay */}
              <div className="absolute bottom-6 left-6 text-left drop-shadow-md">
                <p className="text-base font-bold text-gray-900 leading-tight">
                  {current.title}
                </p>
                <p className="text-[10px] text-gray-700 font-semibold tracking-wider uppercase mt-0.5">
                  BY MAHLEEN ACCESSORIES LIMITED
                </p>
              </div>

            </div>
          </div>

          {/* Right Navigation Arrow */}
          {hasMultiple && (
            <button
              onClick={() => setIndex((index + 1) % items.length)}
              aria-label="Next item"
              className="mx-6 text-2xl text-gray-900 hover:scale-125 transition-transform z-30 shrink-0 font-light"
            >
              →
            </button>
          )}

          {/* Right Preview Card */}
          {next && (
            <div className="hidden md:block w-72 h-80 rounded-2xl overflow-hidden shrink-0 z-10 shadow-sm opacity-90">
              <img
                src={next.imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}