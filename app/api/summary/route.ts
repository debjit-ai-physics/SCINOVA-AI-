import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { SummaryService } from "@/lib/summary-service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.pdfId) {
      return NextResponse.json(
        {
          success: false,
          error: "PDF ID is required",
        },
        { status: 400 }
      );
    }

    const pdf = await db.pDF.findUnique({
      where: {
        id: body.pdfId,
      },
    });

    if (!pdf) {
      return NextResponse.json(
        {
          success: false,
          error: "PDF not found",
        },
        { status: 404 }
      );
    }

    console.log("PDF:", pdf.title);
    console.log(
      "Extracted text length:",
      pdf.extractedText?.length
    );

    if (!pdf.extractedText || pdf.extractedText.trim() === "") {
      return NextResponse.json(
        {
          success: false,
          error: "No extracted text found.",
        },
        { status: 400 }
      );
    }

    const summary =
      (await SummaryService.generate(
        pdf.extractedText,
        body.type ?? "medium"
      )) ?? "";

    const saved = await db.summary.create({
      data: {
        title: pdf.title,
        content: summary,
        type: body.type ?? "medium",
        pdfId: pdf.id,
      },
    });

    return NextResponse.json({
      success: true,
      summary: saved.content,
      id: saved.id,
    });
  } catch (error) {
    console.error("SUMMARY ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to generate summary",
      },
      { status: 500 }
    );
  }
}