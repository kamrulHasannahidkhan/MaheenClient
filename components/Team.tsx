"use client";

import { Item } from "@/lib/api";

export default function Team({ items }: { items: Item[] }) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-slate-50/50 text-gray-900 select-none">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div>
          <p className="text-[11px] tracking-widest text-indigo-600 font-bold mb-2 uppercase">
            05 // OUR MANAGEMENT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900">
            Our Core Members
          </h2>
          <h2 className="text-3xl md:text-4xl leading-tight tracking-tight italic font-serif text-gray-900 font-normal">
            Of The Board
          </h2>
        </div>

        {/* Header Right Paragraph & Navigation Arrows */}
        <div className="flex flex-col items-start lg:items-end gap-5 max-w-md">
          <p className="text-xs text-gray-500 leading-relaxed text-left lg:text-right font-normal">
            Introducing our team of talented and skilled professionals who are
            ready to increase your productivity and bring your business to the
            new level of efficiency and sustainability.
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-600 hover:bg-gray-100 transition-colors"
            >
              ←
            </button>
            <button
              type="button"
              className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-600 hover:bg-gray-100 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
        {items.map((item, i) => (
          <div key={item._id || i} className="flex flex-col text-left group">
            
            {/* Image Box */}
            <div className="w-full aspect-square bg-white overflow-hidden mb-4 rounded-sm border border-gray-100 shadow-sm">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                />
              )}
            </div>

            {/* Member Details */}
            <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-0.5">
              {item.title}
            </h3>
            <p className="text-xs font-normal text-gray-500 mb-3">
              {item.description || "Director"}
            </p>

            {/* Social Icons (Outlined Style) */}
            <div className="flex items-center gap-2">
              {/* Facebook */}
              <a
                href="#"
                className="w-6 h-6 rounded-full border border-gray-400 text-gray-800 bg-transparent flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-6 h-6 rounded-full border border-gray-400 text-gray-800 bg-transparent flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-6 h-6 rounded-full border border-gray-400 text-gray-800 bg-transparent flex items-center justify-center hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}