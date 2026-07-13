"use client";

import {
  Brain,
  FileText,
  BookOpen,
  GraduationCap,
  Mic,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Chat",
    desc: "Ask questions from your uploaded PDFs.",
  },
  {
    icon: FileText,
    title: "Smart Summary",
    desc: "Generate concise AI-powered summaries.",
  },
  {
    icon: BookOpen,
    title: "Flashcards",
    desc: "Revise faster with AI flashcards.",
  },
  {
    icon: GraduationCap,
    title: "Quiz Generator",
    desc: "Create MCQs instantly.",
  },
  {
    icon: Mic,
    title: "Voice Tutor",
    desc: "Learn through AI voice explanations.",
  },
  {
    icon: Sparkles,
    title: "Teacher Tools",
    desc: "Question papers, worksheets and lesson plans.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <h2 className="text-5xl font-bold text-center mb-16">
        Powerful AI Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,.35)] transition-all duration-500"
            >
              <Icon className="w-14 h-14 text-cyan-400 mb-6 animate-pulse" />

              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-300">
                {feature.desc}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}