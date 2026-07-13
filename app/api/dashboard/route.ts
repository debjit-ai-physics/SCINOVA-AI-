import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const [
      pdfs,
      chats,
      notes,
      summaries,
      quizzes,
    ] = await Promise.all([
      db.pDF.count(),
      db.chat.count(),
      db.note.count(),
      db.summary.count(),
      db.quiz.count(),
    ]);

    return NextResponse.json({
      success: true,
      stats: {
        pdfs,
        chats,
        notes,
        summaries,
        quizzes,
      },
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