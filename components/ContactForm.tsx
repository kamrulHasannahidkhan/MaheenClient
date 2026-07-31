"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", text: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", text: "" });
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section className="relative pt-20 pb-0 bg-white text-gray-900 text-center overflow-hidden select-none">
      
      {/* Outer Wrapper for Card & Flowing Background Wave */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center min-h-[520px] px-4">
        
        {/* Abstract Wave Graphic (Behinds the card) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src="/texture-2.png"
            alt=""
            aria-hidden="true"
            className="w-full max-w-5xl object-contain opacity-90"
          />
        </div>

        {/* Centered White Form Box */}
        <div className="relative z-10 w-full max-w-[460px] bg-white border border-gray-200 p-8 md:p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] rounded-xs">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
            Get In Touch
          </h2>
          <p className="text-[11px] text-gray-400 mb-8 leading-normal font-normal">
            Contact us for a great photography session & beautiful captured moments
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            {/* Double Field Row */}
            <div className="grid grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-b border-gray-200 pb-1.5 text-[11px] text-gray-800 placeholder-gray-400 outline-none focus:border-black transition-colors bg-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail*"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-b border-gray-200 pb-1.5 text-[11px] text-gray-800 placeholder-gray-400 outline-none focus:border-black transition-colors bg-transparent"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border-b border-gray-200 pb-1.5 text-[11px] text-gray-800 placeholder-gray-400 outline-none focus:border-black transition-colors bg-transparent"
              />
            </div>

            {/* Text Input */}
            <div className="pt-2">
              <textarea
                placeholder="Text"
                required
                rows={3}
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full border-b border-gray-200 pb-1 text-[11px] text-gray-800 placeholder-gray-400 outline-none focus:border-black transition-colors resize-none bg-transparent"
              />
            </div>

            {/* Framed Button */}
            <div className="pt-6 flex justify-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="relative px-5 py-2 bg-gray-100/90 hover:bg-gray-200 text-gray-900 text-[11px] font-medium tracking-wide transition-colors border border-dashed border-gray-400/80"
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send Mail ↗"}
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* 3-Column Info Row */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 mb-16 px-6 text-left">
        
        {/* Mail */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-50/80 flex items-center justify-center shrink-0">
            <Image src="/logos1.png" alt="Mail" width={14} height={14} />
          </div>
          <div>
            <h4 className="text-[12px] font-bold text-gray-900 leading-tight">Our Mail</h4>
            <p className="text-[10px] text-gray-400 mt-0.5">info@maheenaccessories.com</p>
            <a
              href="mailto:info@maheenaccessories.com"
              className="text-[9px] font-bold text-gray-900 uppercase tracking-wider mt-1.5 inline-block border-b border-gray-900"
            >
              MAIL NOW
            </a>
          </div>
        </div>

        {/* Call */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-50/80 flex items-center justify-center shrink-0">
            <Image src="/logos2.png" alt="Call" width={14} height={14} />
          </div>
          <div>
            <h4 className="text-[12px] font-bold text-gray-900 leading-tight">Call Us</h4>
            <p className="text-[10px] text-gray-400 mt-0.5">+8801713895882</p>
            <a
              href="tel:+8801713895882"
              className="text-[9px] font-bold text-gray-900 uppercase tracking-wider mt-1.5 inline-block border-b border-gray-900"
            >
              CALL NOW
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-50/80 flex items-center justify-center shrink-0">
            <Image src="/logos3.png" alt="Address" width={14} height={14} />
          </div>
          <div>
            <h4 className="text-[12px] font-bold text-gray-900 leading-tight">Our Address</h4>
            <p className="text-[10px] text-gray-400 mt-0.5 leading-snug">
              House #429, Road #29, Sector 12, Uttara 1230, Bangladesh.
            </p>
            <a
              href="#"
              className="text-[9px] font-bold text-gray-900 uppercase tracking-wider mt-1.5 inline-block border-b border-gray-900"
            >
              VIEW MAP
            </a>
          </div>
        </div>

      </div>

      {/* Edge-to-Edge Instagram Gallery Banner */}
      <div className="relative w-full mt-10 overflow-hidden border-t border-gray-100">
        <img
          src="/Group 7.png"
          alt="Instagram Gallery Banner"
          className="w-full h-32 md:h-44 object-cover block"
        />

        {/* Center Badge */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        </div>
      </div>

    </section>
  );
}