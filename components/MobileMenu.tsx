"use client";
import Link from "next/link";
import Image from "next/image";
import {
  X, Home, User, Leaf, Package, ShieldCheck, MapPin, Phone,
  Mail, ChevronRight,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: User },
  { label: "Sustainability", href: "/sustainability", icon: Leaf },
  { label: "Products", href: "/products", icon: Package },
  { label: "Policies", href: "/policies", icon: ShieldCheck },
  { label: "Production Facilities", href: "/facilities", icon: MapPin },
  { label: "Contact", href: "/contact", icon: Phone },
];

const SOCIALS = [
  {
    label: "Facebook",
    path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z",
  },
  {
    label: "Instagram",
    path: "M12 2c2.7 0 3.1 0 4.1.1 1 0 1.7.2 2.3.5.6.2 1.1.6 1.6 1.1.5.5.8.9 1.1 1.6.2.6.4 1.3.5 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1-.2 1.7-.5 2.3-.3.7-.6 1.1-1.1 1.6-.5.5-1 .8-1.6 1.1-.6.2-1.3.4-2.3.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1 0-1.7-.2-2.3-.5-.6-.3-1.1-.6-1.6-1.1-.5-.5-.8-1-1.1-1.6-.2-.6-.4-1.3-.5-2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1 .2-1.7.5-2.3.2-.6.6-1.1 1.1-1.6.5-.5.9-.8 1.6-1.1.6-.2 1.3-.4 2.3-.5C8.9 2 9.3 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.3a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.2-8.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z",
  },
  {
    label: "LinkedIn",
    path: "M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6zM8.3 18.1H5.7V9.9h2.6v8.2zM7 8.8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.1 9.3h-2.6v-4c0-1-.4-1.6-1.2-1.6-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.7v3.9h-2.6s.1-6.6 0-8.2h2.6v1.2c.3-.5 1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5v4.8z",
  },
  {
    label: "Behance",
    path: "M4 6h6.2c2.9 0 4.5 1.2 4.5 3.3 0 1.4-.7 2.3-2 2.8 1.7.5 2.7 1.6 2.7 3.2 0 2.4-1.9 3.7-5 3.7H4V6zm2.8 5.1h2.9c1.3 0 2-.5 2-1.5s-.7-1.5-2-1.5H6.8v3zm0 5.4h3.1c1.5 0 2.3-.6 2.3-1.7s-.8-1.7-2.3-1.7H6.8v3.4zM14.8 7.5h5v1.3h-5V7.5zM20.6 15.4c-.1 1.6-1.5 2.8-3.5 2.8-2.4 0-3.9-1.6-3.9-4.1 0-2.4 1.5-4.1 3.8-4.1 2.4 0 3.7 1.6 3.7 4.3v.5h-5.2c.1 1.2.7 1.9 1.7 1.9.8 0 1.3-.3 1.5-1h2v-.3zm-5.3-2h3.1c-.1-1-.7-1.6-1.5-1.6-.9 0-1.4.6-1.6 1.6z",
  },
  {
    label: "YouTube",
    path: "M23 12s0-3.2-.4-4.7a3 3 0 0 0-2.1-2.1C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.5.4a3 3 0 0 0-2.1 2.1C1 8.8 1 12 1 12s0 3.2.4 4.7a3 3 0 0 0 2.1 2.1c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a3 3 0 0 0 2.1-2.1c.4-1.5.4-4.7.4-4.7zM9.8 15.3V8.7L15.8 12l-6 3.3z",
  },
];

function SocialIcon({ label, path }: { label: string; path: string }) {
  return (
    <Link
      href="#"
      aria-label={label}
      className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white/10"
    >
      <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
        <path d={path} />
      </svg>
    </Link>
  );
}

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[290px] bg-[#0b0b0f] text-white z-50 transform transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <Image src="/logo-white.png" alt="Maheen Accessories" width={110} height={32} />
          <button onClick={onClose} aria-label="Close menu" className="text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        <p className="px-5 text-[10px] tracking-widest text-gray-500 mt-4 mb-2">MENU</p>
        <nav className="px-2">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-3 text-sm hover:bg-white/5 rounded-lg"
              >
                <span className="flex items-center gap-3">
                  <Icon size={16} className="text-blue-400" />
                  {link.label.toUpperCase()}
                </span>
                <ChevronRight size={16} className="text-gray-500" />
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-gray-800 mt-4 pt-4 px-5">
          <p className="text-[10px] tracking-widest text-gray-500 mb-3">CONTACT US</p>
          <div className="space-y-3 text-sm text-gray-300">
            <Link href="mailto:info@maheenaccessories.com" className="flex items-center gap-3">
              <Mail size={16} className="text-blue-400" />
              info@maheenaccessories.com
            </Link>
            <p className="flex items-center gap-3">
              <MapPin size={16} className="text-blue-400" />
              28 Street, New York, USA
            </p>
            <Link href="tel:+96765432122811" className="flex items-center gap-3">
              <Phone size={16} className="text-blue-400" />
              (+967) 654 321 228 11
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-5 pt-4 px-5 pb-8">
          <p className="text-[10px] tracking-widest text-gray-500 mb-3">FIND OUR PAGE</p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <SocialIcon key={s.label} label={s.label} path={s.path} />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
