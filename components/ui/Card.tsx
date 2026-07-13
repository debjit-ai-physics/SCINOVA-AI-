"use client";

import { cn } from "@/utils/cn";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}