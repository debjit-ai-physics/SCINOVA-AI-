import { NextRequest, NextResponse } from "next/server";
import { TeacherService } from "@/services/teacher.service";

export async function POST(req: NextRequest) {

  try {

    const body = await req.json();

    const answerKey =
      await TeacherService.answerKey(body);

    return NextResponse.json({
      success: true,
      answerKey,
    });

  } catch {

    return NextResponse.json(
      {
        success: false,
        answerKey: "",
      },
      { status: 500 }
    );

  }

}