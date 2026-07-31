"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LEFT_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Management", href: "/team" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Policies", href: "/policies" },
];

const RIGHT_LINKS = [
  { label: "Sustainability", href: "/sustainability" },
  { label: "Product Facilities", href: "/facilities" },
  { label: "Our Partners", href: "/partners" },
  { label: "Latest News", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // hook up to a newsletter endpoint later if needed
    setEmail("");
  };

  return (
    <footer className="bg-[#0b0b0f] text-gray-300 pt-16 pb-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <Image src="/logo.png" alt="Maheen Accessories Ltd" width={140} height={40} />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-3 mt-12 w-full max-w-3xl text-xs tracking-widest">
          <ul className="space-y-3 text-left md:text-right">
            {LEFT_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label.toUpperCase()}</Link>
              </li>
            ))}
          </ul>

          <div className="order-first md:order-none col-span-2 md:col-span-1">
            <p className="font-semibold mb-3">EXPRESS YOUR THOUGHT VIA EMAIL</p>
            <form onSubmit={handleSubmit} className="flex border-b border-gray-600 justify-center">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent outline-none px-2 py-2 text-sm flex-1 max-w-[220px]"
              />
              <button type="submit" className="text-sm px-2 py-2 hover:text-white">
                SEND ↗
              </button>
            </form>
          </div>

          <ul className="space-y-3 text-left">
            {RIGHT_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label.toUpperCase()}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-14 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>Goinnovior Limited, All Rights Reserved</p>

        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800">f</a>
          <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800">ig</a>
          <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800">in</a>
          <a
            href="#top"
            aria-label="Back to top"
            className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center hover:bg-purple-700"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
