import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const pdfs = await db.pDF.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      pdfs,
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