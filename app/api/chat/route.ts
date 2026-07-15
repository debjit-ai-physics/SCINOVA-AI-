import { NextRequest, NextResponse } from "next/server";
import { ChatService } from "@/services/chat.service";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { pdfId, question } = await req.json();
    console.log("PDF ID:", pdfId);

    // Find uploaded PDF
    if (!pdfId) {
  return NextResponse.json(
    {
      success: false,
      answer: "Please upload a PDF first.",
    },
    {
      status: 400,
    }
  );
}

const document = await db.pDF.findUnique({
  where: {
    id: pdfId,
  },
});
    console.log("DOCUMENT:", document);
    console.log("TEXT LENGTH:", document?.extractedText?.length);

    if (!document) {
      return NextResponse.json(
        {
          success: false,
          answer: "PDF not found.",
        },
        { status: 404 }
      );
    }

    // Ask Gemini using extracted text
    const answer = await ChatService.ask(
      document.extractedText ?? "",
      question
    );

    return NextResponse.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error("CHAT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        answer: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}