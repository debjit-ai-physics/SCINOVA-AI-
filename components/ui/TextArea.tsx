"use client";

import { cn } from "@/utils/cn";

export default function Textarea(props: any) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none text-white focus:border-cyan-400",
        props.className
      )}
    />
  );
}