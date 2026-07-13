import { NextRequest, NextResponse } from "next/server";

import { TeacherService } from "@/services/teacher.service";

export async function POST(req: NextRequest){

try{

const body=await req.json();

const homework=
await TeacherService.homework(body);

return NextResponse.json({

success:true,

homework,

});

}catch{

return NextResponse.json({

success:false,

homework:"",

},{status:500});

}

}