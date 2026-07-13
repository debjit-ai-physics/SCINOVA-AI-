import { NextRequest, NextResponse } from "next/server";
import { ChatService } from "@/services/chat.service";

export async function POST(req: NextRequest) {
  try {
    const { pdf, question } = await req.json();

    const answer = await ChatService.ask(
      pdf,
      question
    );

    return NextResponse.json({
      success: true,
      answer,
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}