import { NextRequest, NextResponse } from "next/server";

import { savePDF } from "@/lib/storage";
import { extractText } from "@/lib/pdf";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          error: "No PDF uploaded",
        },
        { status: 400 }
      );
    }

    // Upload PDF to Vercel Blob
    const saved = await savePDF(file);

    // Extract text from the uploaded PDF
    const pdf = await extractText(file);

    // Save metadata in PostgreSQL
    const document = await db.pDF.create({
      data: {
        title: file.name.replace(".pdf", ""),
        filename: saved.filename,
        filepath: saved.filepath, // Blob URL
        pages: pdf.pages,
        extractedText: pdf.text,
      },
    });

    return NextResponse.json({
      success: true,
      pdfId: document.id,
      filename: document.filename,
      fileUrl: document.filepath,
      pages: pdf.pages,
      preview: pdf.text.slice(0, 500),
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to upload PDF",
      },
      { status: 500 }
    );
  }
}