import { NextRequest, NextResponse } from "next/server";
import { TeacherService } from "@/services/teacher.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const paper =
      await TeacherService.questionPaper(body);

    return NextResponse.json({
      success: true,
      paper,
    });

  } catch {

    return NextResponse.json(
      {
        success: false,
        paper: "",
      },
      { status: 500 }
    );

  }
}