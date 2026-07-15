import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          pdfs: [],
        },
        { status: 401 }
      );
    }

    const pdfs = await db.pDF.findMany({
      where: {
        userId,
      },
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
        pdfs: [],
      },
      { status: 500 }
    );
  }
}