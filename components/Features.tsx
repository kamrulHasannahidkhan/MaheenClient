"use client";
import { useState } from "react";
import { Item } from "@/lib/api";

export default function Features({ items }: { items: Item[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const feature = items[activeIndex] || items[0];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white text-gray-900 select-none">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Features List */}
        <div>
          <p className="text-[11px] tracking-widest text-blue-600 font-semibold mb-3 uppercase">
            04// OUR FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
            Why choose Us
          </h2>

          <div className="border-t border-gray-200 divide-y divide-gray-200">
            {items.map((item, i) => {
              const isActive = activeIndex === i;
              return (
                <div
                  key={item._id || i}
                  onClick={() => setActiveIndex(i)}
                  className="flex items-center gap-4 py-4 cursor-pointer group transition-colors"
                >
                  <span
                    className={`text-lg font-light transition-colors ${
                      isActive ? "text-sky-400" : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {isActive ? "→" : "↗"}
                  </span>
                  <span
                    className={`text-base tracking-tight transition-colors ${
                      isActive
                        ? "font-semibold text-sky-400"
                        : "font-medium text-gray-800 group-hover:text-gray-900"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image Container with Overlaid Cards */}
        <div className="relative pt-6 pb-12">
          {/* Main Showcase Image */}
          <div className="relative w-full h-[380px] md:h-[440px] rounded-sm overflow-hidden bg-gray-100 shadow-md">
            {feature?.imageUrl && (
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Overlapping Dark Info Box with Public Logo Image */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12 lg:-left-16 bg-[#121214] text-white p-7 w-72 md:w-80 shadow-2xl z-20">
            {/* Logo Image from /public */}
            <div className="mb-6">
              <img
                src="/whitelogo.png" // Replace with your exact filename inside /public
                alt="Maheen Accessories Ltd."
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-gray-300 leading-relaxed mb-6 font-light">
              {feature?.description ||
                "Maheen Accessories Ltd has been serving for 20 years, since its establishment in 2005. They have built a reputation for providing high-quality accessories and exceptional service over the past two decades."}
            </p>

            <a
              href="#"
              className="text-xs font-medium text-white hover:text-sky-300 transition-colors inline-flex items-center gap-1.5"
            >
              Read More <span>→</span>
            </a>
          </div>

          {/* Bottom Right Badges Container */}
          <div className="absolute bottom-0 right-0 flex items-stretch z-20 shadow-lg overflow-hidden">
            {/* White Badge - 500+ Designs */}
            <div className="bg-white text-gray-900 px-6 py-4 text-center min-w-[120px]">
              <p className="text-2xl md:text-3xl font-extrabold leading-none mb-1">
                500+
              </p>
              <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                Designs
              </p>
            </div>

            {/* Blue Badge - 3000k Order Covered */}
            <div className="bg-[#8ccded] text-gray-900 px-6 py-4 text-center min-w-[130px]">
              <p className="text-2xl md:text-3xl font-extrabold leading-none mb-1">
                3000k
              </p>
              <p className="text-[10px] font-semibold text-gray-800 uppercase tracking-wider">
                Order Covered
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}