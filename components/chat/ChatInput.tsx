"use client";

import { useState } from "react";

export default function ChatInput({
  onSend,
  loading,
}: {
  onSend: (text: string) => void;
  loading: boolean;
}) {
  const [text, setText] = useState("");

  return (
    <div className="flex gap-4">

      <input
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
        placeholder="Ask anything..."
        className="flex-1 rounded-xl bg-slate-900 p-4"
      />

      <button
        disabled={loading}
        className="rounded-xl bg-cyan-600 px-8"
        onClick={() => {
          if (!text.trim()) return;

          onSend(text);

          setText("");
        }}
      >
        {loading ? "..." : "Send"}
      </button>

    </div>
  );
}