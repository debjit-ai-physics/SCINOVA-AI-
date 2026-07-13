"use client";

export default function EmptyState({
  title,
}: {
  title: string;
}) {
  return (
    <div className="text-center py-20 opacity-60">
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
}