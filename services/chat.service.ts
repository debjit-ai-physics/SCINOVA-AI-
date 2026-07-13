import { askGemini } from "@/lib/ai";

export class ChatService {
  static async ask(pdf: string, question: string) {
    return askGemini(`
You are SciNova AI.

Answer ONLY from the uploaded study material.

If the answer is unavailable,
say "This information is not present in the uploaded PDF."

Study Material:

${pdf}

Question:

${question}
`);
  }
}