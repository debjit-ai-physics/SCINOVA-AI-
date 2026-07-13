"use client";

import {
  Upload,
  Brain,
  Sparkles,
  Download,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload PDF",
    desc: "Upload books, notes or study materials."
  },
  {
    icon: Brain,
    title: "AI Analysis",
    desc: "SciNova understands your document."
  },
  {
    icon: Sparkles,
    title: "Generate",
    desc: "Chat, Summary, Quiz, Flashcards and more."
  },
  {
    icon: Download,
    title: "Export",
    desc: "Download or continue learning."
  },
];

export default function Timeline() {
  return (
    <section className="py-28">

      <h2 className="text-center text-5xl font-bold mb-20">
        How SciNova AI Works
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {steps.map((step, i) => {

          const Icon = step.icon;

          return (

            <div
              key={i}
              className="relative rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-2xl p-8 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6">

                <Icon className="w-9 h-9 text-cyan-400"/>

              </div>

              <h3 className="text-2xl font-bold">

                {step.title}

              </h3>

              <p className="mt-4 text-slate-400">

                {step.desc}

              </p>

              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-cyan-500 text-black flex items-center justify-center font-bold">

                {i+1}

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}