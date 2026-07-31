"use client";

import { Item } from "@/lib/api";

export default function Blog({ items }: { items: Item[] }) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-white text-gray-900 select-none">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div>
          <p className="text-[11px] tracking-widest text-indigo-600 font-bold mb-2 uppercase">
            07 // LATEST NEWS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900">
            Our Activity
          </h2>
          <h2 className="text-3xl md:text-4xl leading-tight tracking-tight italic font-serif text-gray-900 font-normal">
            Related Blog
          </h2>
        </div>

        {/* Subtitle Paragraph */}
        <div className="max-w-md text-left lg:text-right">
          <p className="text-xs text-gray-500 leading-relaxed font-normal">
            we’re deeply passionate <strong className="text-gray-800 font-semibold">catch your lovely memories in cameras</strong> and
            Convey your love for every moment of life as a whole.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
        {items.map((item, i) => (
          <div
            key={item._id || i}
            className="border border-gray-300 bg-white p-4 flex flex-col justify-between rounded-xs"
          >
            <div>
              {/* Image Container with Framing */}
              <div className="w-full aspect-4/3 bg-gray-100 overflow-hidden mb-4 border border-gray-100">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Date Badge */}
              <div className="mb-3">
                <span className="inline-block bg-indigo-500/85 text-white text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-sm uppercase">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "22 SEP 2023"}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-sm text-gray-900 leading-snug mb-3 line-clamp-2">
                {item.title}
              </h3>
            </div>

            {/* Read More Link */}
            <div className="pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-indigo-600 transition-colors"
              >
                Read More <span className="text-sm font-normal">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Framed "See More" Button */}
      <div className="flex justify-center">
        <button
          type="button"
          className="relative px-6 py-2 bg-gray-100/80 text-gray-800 text-xs font-semibold hover:bg-gray-200 transition-colors border border-dashed border-gray-400/60"
        >
          See More <span className="ml-1 text-xs">↗</span>
        </button>
      </div>

    </section>
  );
}