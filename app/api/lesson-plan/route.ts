import { NextRequest, NextResponse } from "next/server";

import { TeacherService } from "@/services/teacher.service";

export async function POST(req: NextRequest){

try{

const body=await req.json();

const lessonPlan=
await TeacherService.lessonPlan(body);

return NextResponse.json({

success:true,

lessonPlan,

});

}catch{

return NextResponse.json({

success:false,

lessonPlan:"",

},{status:500});

}

}