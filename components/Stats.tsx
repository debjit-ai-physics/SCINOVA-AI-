"use client";

const stats = [
  { value: "25K+", label: "Students" },
  { value: "120K+", label: "PDFs Processed" },
  { value: "1M+", label: "Questions Generated" },
  { value: "99.9%", label: "Accuracy" },
];

export default function Stats() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((item, i) => (

          <div
            key={i}
            className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 text-center hover:scale-105 hover:border-cyan-400 transition-all"
          >

            <h2 className="text-5xl font-extrabold text-cyan-400">
              {item.value}
            </h2>

            <p className="mt-4 text-slate-400">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}