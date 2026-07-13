"use client";

import { useState } from "react";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";

import { useChatStore } from "@/store/chat-store";

export default function ChatWindow() {
  const {
    messages,
    addMessage,
  } = useChatStore();

  const [loading, setLoading] =
    useState(false);

  async function send(question: string) {
    addMessage({
      role: "user",
      content: question,
    });

    setLoading(true);

    const response = await fetch(
      "/api/chat",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          pdf: "",
          question,
        }),
      }
    );

    const data = await response.json();

    addMessage({
      role: "assistant",
      content:
        data.answer ??
        "No response",
    });

    setLoading(false);
  }

  return (
    <div className="space-y-8">

      <div className="space-y-4 min-h-[600px]">

        {messages.map((m, i) => (
          <ChatBubble
            key={i}
            message={m}
          />
        ))}

      </div>

      <ChatInput
        onSend={send}
        loading={loading}
      />

    </div>
  );
}