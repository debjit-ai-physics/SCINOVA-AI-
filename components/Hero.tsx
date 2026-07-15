"use client";

import { motion } from "framer-motion";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        <FloatingCards />
    <div className="absolute w-96 h-96 rounded-full bg-cyan-500/20 blur-[140px] top-20 left-10 animate-pulse"></div>

<div className="absolute w-80 h-80 rounded-full bg-purple-600/20 blur-[140px] bottom-20 right-20 animate-pulse"></div>

<div className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-[140px] top-1/2 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight"
        >
          Learn Smarter with
          <br />
          <span className="text-cyan-400">
            SciNova AI
          </span>
        </motion.h1>
        <p className="mt-4 text-sm text-slate-300">
Developed by
<span className="font-semibold text-cyan-400">
 Debjit Deb
</span>
{" & "}
<span className="font-semibold text-purple-400">
 Tanmoy Saha
</span>
</p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto"
        >
          Your AI-powered learning platform for students and teachers.
          Upload PDFs, chat with AI, generate quizzes, flashcards,
          notes, question papers and much more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center gap-6"
        >
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,.5)] font-semibold text-lg">
Get Started
</button>

          <button className="px-8 py-4 rounded-xl border border-cyan-400 backdrop-blur-xl bg-white/5 hover:bg-cyan-500 hover:text-black transition-all duration-300 text-lg">
Live Demo
</button>
        </motion.div>

      </div>

    </section>
  );
}