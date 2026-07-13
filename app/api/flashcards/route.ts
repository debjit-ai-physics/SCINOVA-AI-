import { NextRequest, NextResponse } from "next/server";
import { AIService } from "@/services/ai.service";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    const flashcards =
      await AIService.generateFlashcards(text);

    return NextResponse.json({
      success: true,
      flashcards,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Flashcard generation failed",
      },
      { status: 500 }
    );
  }
}