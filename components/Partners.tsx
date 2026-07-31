"use client";

import { Item } from "@/lib/api";

export default function Partners({ items }: { items: Item[] }) {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto bg-white text-gray-900 text-center select-none">
      
      {/* Header Section */}
      <div className="mb-12 flex flex-col items-center">
        <p className="text-[11px] tracking-widest text-indigo-600 font-bold mb-3 uppercase">
          06 // OUR PARTNERS
        </p>
        
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
          Meet Our <span className="italic font-serif font-normal">Working</span>
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
          Partners
        </h2>
      </div>

      {/* Partners Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-center max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div
            key={item._id || i}
            className="border border-gray-200 bg-white h-48 md:h-56 p-8 flex items-center justify-center transition-all duration-300 hover:border-gray-300 hover:shadow-sm"
          >
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.title || "Partner Logo"}
                className="max-h-20 max-w-[80%] object-contain"
              />
            ) : (
              <span className="font-bold text-gray-800 text-lg">
                {item.title}
              </span>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}