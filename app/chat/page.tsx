"use client";

import AppLayout from "@/components/layout/AppLayout";

import ChatWindow from "@/components/chat/ChatWindow";

export default function ChatPage() {
  return (
    <AppLayout>

      <h1 className="text-5xl font-bold mb-8">
        AI Chat
      </h1>

      <ChatWindow />

    </AppLayout>
  );
}