import ai from "./gemini";
import { GEMINI_MODEL } from "./constants";

export async function askGemini(prompt: string) {
  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: prompt,
  });

  return response.text;
}