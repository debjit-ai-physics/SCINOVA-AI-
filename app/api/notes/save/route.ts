import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const note = await db.note.create({
      data: {
        content: body.content,
        pdfId: body.pdfId,
      },
    });

    return NextResponse.json({
      success: true,
      note,
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