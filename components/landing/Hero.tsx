"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#06b6d420,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-5xl px-6"
      >

        {/* Badge */}
        <span className="px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">
          🚀 AI Powered Learning Platform
        </span>

        {/* Title */}
        <h1 className="mt-8 text-7xl font-black leading-tight">
          Study Smarter with
          <br />
          <span className="text-cyan-400">
            SciNova AI
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-xl opacity-80 leading-9">
          Upload PDFs, generate AI summaries, chat with your study material.
        </p>

        {/* Developer Credits */}
        <div className="mt-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3">
          <span className="text-cyan-300 font-semibold">
            Developed by
          </span>

          <span className="ml-2 font-bold text-white">
            Debjit Deb
          </span>

          <span className="mx-2 text-cyan-300">
            &
          </span>

          <span className="font-bold text-white">
            Tanmoy Saha
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-6">

          <Link href="/signup">
            <Button>
              Get Started
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button className="bg-white/10 hover:bg-white/20">
              Live Demo
            </Button>
          </Link>

        </div>

      </motion.div>

    </section>
  );
}