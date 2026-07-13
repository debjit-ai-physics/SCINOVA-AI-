"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="ml-72 h-24 border-b border-white/10 flex items-center justify-between px-10">

      <div className="relative">

        <Search
          className="absolute left-4 top-4"
          size={20}
        />

        <input
          placeholder="Search anything..."
          className="w-[420px] rounded-2xl bg-white/5 border border-white/10 py-3 pl-12 pr-4 outline-none"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell />

        <UserCircle2 size={42} />

      </div>

    </header>
  );
}