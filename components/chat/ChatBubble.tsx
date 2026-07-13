"use client";

import { Message } from "@/store/chat-store";

export default function ChatBubble({
  message,
}: {
  message: Message;
}) {
  const user = message.role === "user";

  return (
    <div
      className={`flex ${
        user ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl rounded-2xl px-5 py-4 ${
          user
            ? "bg-cyan-600"
            : "bg-slate-800"
        }`}
      >
        <div className="whitespace-pre-wrap">
          {message.content}
        </div>
      </div>
    </div>
  );
}