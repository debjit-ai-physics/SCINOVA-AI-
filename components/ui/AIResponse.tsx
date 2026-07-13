"use client";

export default function AIResponse({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="whitespace-pre-wrap leading-8">
        {content}
      </div>
    </div>
  );
}