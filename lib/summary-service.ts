import { askGemini } from "@/lib/ai";
import { SummaryPrompts } from "./summary-prompts";

export class SummaryService {
  static async generate(
    text: string,
    type: string
  ) {
    const prompt =
      SummaryPrompts.generate(
        text,
        type
      );

    return await askGemini(prompt);
  }
}