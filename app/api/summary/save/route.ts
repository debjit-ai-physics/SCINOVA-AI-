import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const summary = await db.summary.create({
      data: {
        title: body.title || "Summary",
        content: body.content,
        type: body.type || "General",

        pdf: {
          connect: {
            id: body.pdfId,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      summary,
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