"use client";

import {
  MessageSquare,
  FileText,
  Brain,
  BookOpen,
  GraduationCap,
  Mic,
} from "lucide-react";

const cards = [
  { title: "AI Chat", icon: MessageSquare },
  { title: "Summary", icon: FileText },
  { title: "Quiz", icon: GraduationCap },
  { title: "Flashcards", icon: BookOpen },
  { title: "Voice Tutor", icon: Mic },
  { title: "AI Notes", icon: Brain },
];

export default function DashboardPreview() {
  return (
    <section className="py-32 px-8">

      <h2 className="text-5xl font-bold text-center mb-16">
        Your AI Learning Dashboard
      </h2>

      <div className="max-w-7xl mx-auto rounded-[40px] border border-cyan-500/20 bg-white/5 backdrop-blur-3xl p-10 shadow-[0_0_80px_rgba(34,211,238,.15)]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-slate-900/60 border border-white/10 p-8 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-cyan-400 mb-5" />

                <h3 className="text-2xl font-bold">
                  {card.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  AI powered learning module.
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}