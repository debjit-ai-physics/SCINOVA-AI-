"use client";

import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({
  className,
  loading,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-semibold shadow-lg shadow-cyan-500/20 disabled:opacity-50",
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}