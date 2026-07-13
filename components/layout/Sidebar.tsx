"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Upload,
  MessageSquare,
  FileText,
  BookOpen,
  Brain,
  Layers,
  Mic,
  GraduationCap,
  Settings,
  Library,
} from "lucide-react";
const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Upload",
    href: "/upload",
    icon: Upload,
  },
  {
    title: "AI Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Summary",
    href: "/summary",
    icon: FileText,
  },
  {
    title: "Notes",
    href: "/notes",
    icon: BookOpen,
  },
  {
    title: "Quiz",
    href: "/quiz",
    icon: Brain,
  },
  {
    title: "Flashcards",
    href: "/flashcards",
    icon: Layers,
  },
  {
    title: "Voice Tutor",
    href: "/voice",
    icon: Mic,
  },
  {
    title: "Teacher Workspace",
    href: "/teacher",
    icon: GraduationCap,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
  title: "Library",
  href: "/library",
  icon: Library,
}
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-slate-950 border-r border-slate-800 flex flex-col">
      <div className="px-6 py-8 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-cyan-400">
          SciNova AI
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          AI Learning Platform
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                active
                  ? "bg-cyan-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={22} />
              <span className="font-medium">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-5">
        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-sm text-slate-400">
            SciNova AI
          </p>

          <p className="text-xs text-slate-500 mt-1">
            Version 1.0
          </p>
        </div>
      </div>
    </aside>
  );
}