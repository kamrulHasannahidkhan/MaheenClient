"use client";
import { Item } from "@/lib/api";

export default function Policies({ items }: { items: Item[] }) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white text-gray-900 select-none">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
        <div>
          <p className="text-[11px] tracking-widest text-indigo-600 font-bold mb-2 uppercase">
            05 // POLICIES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-none tracking-tight text-gray-900">
            Our Smart
          </h2>
          <h2 className="text-3xl md:text-4xl leading-tight tracking-tight italic font-serif text-gray-900 font-normal mt-1">
            Policies
          </h2>
        </div>

        <p className="text-[13px] text-gray-600 max-w-md md:pt-1 leading-relaxed text-left md:text-right font-normal">
          we&apos;re deeply passionate <span className="font-bold text-gray-900">catch your lovely memories in cameras and</span>
          <br className="hidden md:block" />
          Convey your love for every moment of life as a whole.
        </p>
      </div>

      {/* Policies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
        {items.map((item, i) => {
          // Centering items 05 & 06 under columns 2 and 3 on desktop
          const isFifthItem = i === 4;

          return (
            <div
              key={item._id || i}
              className={`relative bg-[#e3e3e3] p-7 flex flex-col justify-between h-[270px] ${
                isFifthItem ? "md:col-start-2" : ""
              }`}
            >
              {/* Corner Frame Bracket Lines */}
              <span className="absolute -top-[5px] -left-[5px] w-3.5 h-3.5 border-t border-l border-gray-800 pointer-events-none" />
              <span className="absolute -top-[5px] -right-[5px] w-3.5 h-3.5 border-t border-r border-gray-800 pointer-events-none" />
              <span className="absolute -bottom-[5px] -left-[5px] w-3.5 h-3.5 border-b border-l border-gray-800 pointer-events-none" />
              <span className="absolute -bottom-[5px] -right-[5px] w-3.5 h-3.5 border-b border-r border-gray-800 pointer-events-none" />

              {/* Icon Top Left */}
              <div className="pt-1">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-14 h-14 object-contain"
                  />
                ) : (
                  <div className="w-14 h-14 bg-gray-300" />
                )}
              </div>

              {/* Text Bottom Left */}
              <div className="text-left">
                <p className="text-xs font-medium text-gray-600 mb-2 tracking-wide">
                  0{i + 1}
                </p>
                <h3 className="text-[15px] font-bold text-gray-900 leading-snug tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}