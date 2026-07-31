"use client";
import { Item } from "@/lib/api";

export default function About({ items }: { items: Item[] }) {
  const about = items[0];

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto bg-white text-gray-900 select-none overflow-hidden">
      
      {/* Soft Background Radial Glow Effect */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-gradient-to-r from-blue-100/60 to-purple-100/60 blur-3xl -z-0 rounded-full" />

      {/* Header Section */}
      <div className="relative z-10 flex items-start justify-between mb-12">
        <div>
          <p className="text-[11px] tracking-widest text-blue-600 font-semibold mb-2 uppercase">
            03// ABOUT COMPANY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Maheen Creates{" "}
            <span className="italic font-serif font-normal text-gray-800">
              What You need
            </span>
          </h2>
          <p className="text-gray-500 mt-2 text-base font-normal">
            precision, passion, and a touch of creativity.
          </p>
        </div>

        <button className="hidden md:flex items-center gap-1.5 border border-gray-200 bg-gray-50/80 rounded-md px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors shadow-sm">
          Explore Now <span className="text-xs">↗</span>
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image Box with Floating Circular Button */}
        <div className="relative">
          {about?.imageUrl && (
            <img
              src={about.imageUrl}
              alt="About Maheen"
              className="rounded-2xl w-full h-80 sm:h-96 object-cover shadow-sm"
            />
          )}

          {/* Overlapping Gradient Circular Button */}
          <button className="absolute -bottom-8 -right-6 md:right-4 w-28 h-28 rounded-full bg-gradient-to-tr from-blue-400 via-indigo-300 to-purple-400 text-white font-medium text-xs flex items-center justify-center gap-1 shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-white/50 backdrop-blur-sm">
            <span>Explore Us</span>
            <span className="text-xs">↗</span>
          </button>
        </div>

        {/* Right Details Text */}
        <div className="pl-0 md:pl-4">
          <div className="flex items-center gap-3 mb-3">
            <p className="text-xs tracking-widest text-gray-900 font-bold uppercase">
              ABOUT MAHEEN
            </p>
            <div className="h-[1px] w-16 bg-gray-300" />
          </div>

          <p className="text-sm font-semibold text-gray-600 mb-5 tracking-tight">
            Crafting Excellence | Elevating Creations | Defining Style
          </p>

          <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
            {about?.description ||
              "At Maheen Accessories Ltd, we are committed to providing top-notch products that meet world-class standards. With state-of-the-art infrastructure and an expert management team, we cater to the growing and diversified demands of our customers. Discover our range of high-quality buttons, ribbons, and bows designed to elevate your creations."}
          </p>
        </div>

      </div>
    </section>
  );
}