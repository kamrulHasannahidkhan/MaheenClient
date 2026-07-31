"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Products", href: "/products" },
  { label: "Policies", href: "/policies" },
  { label: "Production Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-gray-100 relative z-30 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-3">
        
        {/* Left Section: Logo & Email */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Maheen Accessories Ltd"
              width={150}
              height={42}
              priority
              className="object-contain"
            />
          </Link>

          <div className="hidden md:block h-6 w-px bg-gray-200" />

          {/* Email with Icon */}
          <a
            href="mailto:info@maheenaccessories.com"
            className="hidden md:flex items-center gap-1.5 text-[10px] text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg
              className="w-3 h-3 text-gray-400 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>info@maheenaccessories.com</span>
          </a>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-[11px] font-semibold tracking-wider text-gray-500">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-1 transition-colors relative ${
                  isActive
                    ? "text-gray-900 font-bold"
                    : "hover:text-gray-900"
                }`}
              >
                {link.label.toUpperCase()}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-indigo-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Action Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Hamburger Menu Icon */}
          <button
            type="button"
            aria-label="Toggle Navigation"
            onClick={() => setOpen(!open)}
            className="p-1.5 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </button>

          <div className="h-4 w-px bg-gray-200" />

          {/* Search Icon */}
          <button
            type="button"
            aria-label="Search"
            className="p-1.5 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <nav className="xl:hidden bg-white border-t border-gray-100 flex flex-col px-6 py-4 gap-3 text-xs font-semibold text-gray-700">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-indigo-600"
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}