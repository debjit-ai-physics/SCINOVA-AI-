"use client";

import {
  MessageSquare,
  Brain,
  BookOpen,
  GraduationCap,
  FileText,
  Mic,
  BarChart3,
} from "lucide-react";

export default function DashboardMockup() {
  return (
    <section className="py-32 px-8">

      <h2 className="text-center text-5xl font-bold mb-20">
        Experience the Future of Learning
      </h2>

      <div className="max-w-7xl mx-auto rounded-[40px] border border-cyan-400/20 bg-slate-900/50 backdrop-blur-3xl shadow-[0_0_80px_rgba(34,211,238,.2)] overflow-hidden">

        <div className="grid lg:grid-cols-5">

          {/* Sidebar */}

          <div className="border-r border-white/10 p-8 space-y-5">

            <div className="flex items-center gap-3">
              <Brain className="text-cyan-400"/>
              AI Chat
            </div>

            <div className="flex items-center gap-3">
              <FileText className="text-cyan-400"/>
              Summary
            </div>

            <div className="flex items-center gap-3">
              <GraduationCap className="text-cyan-400"/>
              Quiz
            </div>

            <div className="flex items-center gap-3">
              <BookOpen className="text-cyan-400"/>
              Flashcards
            </div>

            <div className="flex items-center gap-3">
              <Mic className="text-cyan-400"/>
              Voice Tutor
            </div>

          </div>

          {/* Main */}

          <div className="lg:col-span-4 p-10">

            <div className="grid md:grid-cols-2 gap-8">

              <div className="rounded-3xl bg-cyan-500/10 p-8 border border-cyan-500/20">

                <MessageSquare className="w-12 h-12 text-cyan-400 mb-5"/>

                <h3 className="text-2xl font-bold">
                  AI Assistant
                </h3>

                <p className="mt-3 text-slate-400">
                  Ask questions from any uploaded PDF.
                </p>

              </div>

              <div className="rounded-3xl bg-purple-500/10 p-8 border border-purple-500/20">

                <BarChart3 className="w-12 h-12 text-purple-400 mb-5"/>

                <h3 className="text-2xl font-bold">
                  Learning Analytics
                </h3>

                <p className="mt-3 text-slate-400">
                  Track your study progress.
                </p>

              </div>

              <div className="rounded-3xl bg-blue-500/10 p-8 border border-blue-500/20">

                <GraduationCap className="w-12 h-12 text-blue-400 mb-5"/>

                <h3 className="text-2xl font-bold">
                  Quiz Generator
                </h3>

              </div>

              <div className="rounded-3xl bg-green-500/10 p-8 border border-green-500/20">

                <BookOpen className="w-12 h-12 text-green-400 mb-5"/>

                <h3 className="text-2xl font-bold">
                  Flashcards
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}