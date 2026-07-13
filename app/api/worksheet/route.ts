import { NextRequest, NextResponse } from "next/server";
import { TeacherService } from "@/services/teacher.service";

export async function POST(req: NextRequest) {

  try {

    const body = await req.json();

    const worksheet =
      await TeacherService.worksheet(body);

    return NextResponse.json({
      success: true,
      worksheet,
    });

  } catch {

    return NextResponse.json(
      {
        success: false,
        worksheet: "",
      },
      { status: 500 }
    );

  }

}