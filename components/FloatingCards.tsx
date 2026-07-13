"use client";

import { motion } from "framer-motion";
import {
  Brain,
  FileText,
  GraduationCap,
  BookOpen,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "AI Tutor",
    x: "8%",
    y: "18%",
    delay: 0,
  },
  {
    icon: FileText,
    title: "PDF Chat",
    x: "82%",
    y: "22%",
    delay: 0.4,
  },
  {
    icon: GraduationCap,
    title: "Quiz",
    x: "15%",
    y: "72%",
    delay: 0.8,
  },
  {
    icon: BookOpen,
    title: "Flashcards",
    x: "78%",
    y: "70%",
    delay: 1.2,
  },
  {
    icon: Sparkles,
    title: "AI Notes",
    x: "50%",
    y: "8%",
    delay: 1.6,
  },
];

export default function FloatingCards() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {cards.map((card, i) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [-12, 12, -12],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              delay: card.delay,
            }}
            className="absolute w-44 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-5 shadow-[0_0_40px_rgba(34,211,238,.25)]"
            style={{
              left: card.x,
              top: card.y,
            }}
          >
            <Icon className="w-10 h-10 text-cyan-400 mb-3" />

            <h3 className="font-bold">
              {card.title}
            </h3>
          </motion.div>
        );
      })}
    </div>
  );
}