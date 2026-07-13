import { askGemini } from "@/lib/ai";
import { PROMPTS } from "@/lib/prompts";

export class AIService {
  static async generateSummary(text: string) {
    return await askGemini(PROMPTS.summary(text));
  }

  static async generateNotes(text: string) {
    return await askGemini(PROMPTS.notes(text));
  }

  static async generateFlashcards(text: string) {
    return await askGemini(PROMPTS.flashcards(text));
  }

  static async generateQuiz(text: string) {
    return await askGemini(PROMPTS.quiz(text));
  }
}