"use client";

import Link from "next/link";
import { BrainCircuit } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-slate-950/70 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div className="flex items-center gap-3">
          <BrainCircuit className="w-9 h-9 text-cyan-400" />
          <h1 className="text-3xl font-bold text-cyan-400">
            SciNova AI
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-10 text-lg">
          <Link href="/">Home</Link>
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">About</Link>

          <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,.4)]">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
}