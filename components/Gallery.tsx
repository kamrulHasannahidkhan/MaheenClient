"use client";

import { useState } from "react";
import { Item } from "@/lib/api";

const PAGE_SIZE = 8;

export default function Gallery({ items }: { items: Item[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto bg-white text-gray-900 text-center select-none">
      
      {/* Header Section */}
      <p className="text-[11px] tracking-widest text-indigo-600 font-bold mb-2 uppercase">
        05 // OUR PORTFOLIO
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-14 leading-snug">
        Maheen Creates <span className="italic font-serif font-normal">All of Your</span>
        <br />
        beautiful Products
      </h2>

      {/* Masonry-Style Grid Layout */}
      <div className="columns-1 sm:columns-2 gap-8 text-left space-y-8 max-w-4xl mx-auto">
        {items.slice(0, visible).map((item, i) => (
          <div key={item._id || i} className="break-inside-avoid flex flex-col">
            {/* Direct Image Frame */}
            <div className="w-full overflow-hidden bg-gray-50 border border-gray-100 shadow-xs mb-2">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title || "Product Image"}
                  className="w-full h-auto object-cover block"
                />
              )}
            </div>

            {/* Title & Author */}
            <p className="text-xs font-bold text-gray-900 tracking-tight leading-tight mt-1">
              {item.title || "XYZ"}
            </p>
            <p className="text-[10px] text-gray-400 font-normal">
              By Maheen Accessories
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA Button */}
      {visible < items.length && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="relative px-6 py-2 bg-gray-100/80 text-gray-800 text-xs font-semibold hover:bg-gray-200 transition-colors border border-dashed border-gray-400/60"
          >
            See More <span className="ml-1 text-xs">↗</span>
          </button>
        </div>
      )}

    </section>
  );
}