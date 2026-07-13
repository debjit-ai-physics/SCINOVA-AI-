import { create } from "zustand";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatState {
  messages: Message[];

  addMessage: (message: Message) => void;

  clear: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  clear: () => set({ messages: [] }),
}));