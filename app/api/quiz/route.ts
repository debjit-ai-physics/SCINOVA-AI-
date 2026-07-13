import { NextRequest, NextResponse } from "next/server";
import { AIService } from "@/services/ai.service";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    const quiz = await AIService.generateQuiz(text);

    return NextResponse.json({
      success: true,
      quiz,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Quiz generation failed",
      },
      { status: 500 }
    );
  }
}