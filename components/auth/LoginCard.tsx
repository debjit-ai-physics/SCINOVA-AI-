"use client";

import { Mail, Lock } from "lucide-react";

export default function LoginCard() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-3xl p-10 shadow-[0_0_60px_rgba(34,211,238,.15)]">

        <h1 className="text-4xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-slate-400 mb-10">
          Login to SciNova AI
        </p>

        <div className="space-y-6">

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-cyan-400" />

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl bg-slate-900/60 border border-white/10 pl-12 pr-4 py-4 outline-none focus:border-cyan-400"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-cyan-400" />

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl bg-slate-900/60 border border-white/10 pl-12 pr-4 py-4 outline-none focus:border-cyan-400"
            />
          </div>

          <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 font-bold hover:scale-105 transition-all">
            Login
          </button>

        </div>

      </div>

    </section>
  );
}