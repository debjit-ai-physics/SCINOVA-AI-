"use client";

import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      title: "AI Chat",
      description: "Ask questions from your uploaded PDFs."
    },
    {
      title: "Smart Notes",
      description: "Generate concise notes instantly."
    },
    {
      title: "Quiz Generator",
      description: "Create MCQs automatically."
    },
    {
      title: "Flashcards",
      description: "Revise quickly with AI flashcards."
    }
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}