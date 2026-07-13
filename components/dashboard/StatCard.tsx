"use client";

type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-900 p-6 shadow-lg">
      <h2 className="text-cyan-400 text-sm mb-2">{title}</h2>

      <p className="text-4xl font-bold">{value}</p>
    </div>
  );
}