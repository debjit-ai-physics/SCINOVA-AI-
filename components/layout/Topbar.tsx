"use client";

import { Bell, Search, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl flex items-center justify-between px-8">

      <div className="relative w-[420px]">

        <Search className="absolute left-4 top-4 text-slate-400" />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full rounded-xl bg-slate-900 border border-white/10 pl-12 pr-4 py-3 outline-none focus:border-cyan-400"
        />

      </div>

      <div className="flex items-center gap-6">

        <button className="relative">

          <Bell className="w-6 h-6 text-cyan-400" />

          <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3">

          <UserCircle className="w-10 h-10 text-cyan-400" />

          <div>

            <h3 className="font-semibold">
              Debjit
            </h3>

            <p className="text-xs text-slate-400">
              Student
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}