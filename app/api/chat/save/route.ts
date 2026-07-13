import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const chat = await db.chat.create({
      data: {
        question: body.question,
        answer: body.answer,
        pdfId: body.pdfId,
      },
    });

    return NextResponse.json({
      success: true,
      chat,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}