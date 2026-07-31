"use client";
import { Item } from "@/lib/api";

export default function Services({ items }: { items: Item[] }) {
  return (
    <section className="relative py-20 bg-white text-gray-900 overflow-hidden select-none">
      
      {/* Background Graphic Asset - Full Screen Width (w-screen) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen z-0 flex justify-center">
        <img
          src="/bg-wave.png" // Replace with your exact filename inside /public
          alt=""
          className="w-full h-auto object-cover min-w-[1200px] opacity-90"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <div>
            <p className="text-[11px] tracking-widest text-blue-600 font-semibold mb-3 uppercase">
              01// SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Our Core
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight italic font-serif font-normal">
              Services
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-sm md:pt-6 leading-relaxed">
            We specialize in developing products that meet{" "}
            <span className="font-semibold text-gray-800">world-class standards</span>,
            ensuring every detail is perfect to bring your vision to life.
          </p>
        </div>

        {/* Vertical Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <div
              key={item._id || i}
              className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-100/50 group bg-gray-50"
            >
              {/* Card Image */}
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Text Content Overlay at Bottom-Left */}
              <div className="absolute bottom-6 left-6 text-left drop-shadow-md z-10">
                <p className="text-2xl font-extrabold text-gray-900 leading-none mb-1">
                  0{i + 1}
                </p>
                <h3 className="text-base font-bold text-gray-900 tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}