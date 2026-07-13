"use client";

import Link from "next/link";

const actions = [
  {
    title: "📄 Upload PDF",
    href: "/upload",
  },
  {
    title: "💬 AI Chat",
    href: "/chat",
  },
  {
    title: "📝 Notes",
    href: "/notes",
  },
  {
    title: "📚 Summary",
    href: "/summary",
  },
  {
    title: "🧠 Quiz",
    href: "/quiz",
  },
  {
    title: "👨‍🏫 Teacher AI",
    href: "/teacher",
  },
];

export default function QuickAction() {
  return (
    <div className="rounded-2xl border border-slate-700 p-6 bg-slate-900">
      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="rounded-xl bg-cyan-600 hover:bg-cyan-500 transition p-4 text-center font-semibold"
          >
            {action.title}
          </Link>
        ))}
      </div>
    </div>
  );
}