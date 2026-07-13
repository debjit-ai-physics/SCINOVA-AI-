"use client";

import { useState } from "react";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LessonPlanForm(){

const[className,setClassName]=useState("");

const[subject,setSubject]=useState("");

const[chapter,setChapter]=useState("");

const[result,setResult]=useState("");

const[loading,setLoading]=useState(false);

async function generate(){

setLoading(true);

const res=await fetch("/api/lesson-plan",{

method:"POST",

headers:{

"Content-Type":"application/json",

},

body:JSON.stringify({

className,

subject,

chapter,

})

});

const data=await res.json();

setResult(data.lessonPlan);

setLoading(false);

}

return(

<div className="space-y-5">

<Input
placeholder="Class"
value={className}
onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  setClassName(e.target.value)
}
/>

<Input
placeholder="Subject"
value={subject}
onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  setSubject(e.target.value)
}
/>

<Input
placeholder="Chapter"
value={chapter}
onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
  setChapter(e.target.value)
}
/>

<Button
loading={loading}
onClick={generate}
>

Generate Lesson Plan

</Button>

{result && (

<div className="rounded-xl bg-slate-900 p-6 whitespace-pre-wrap">

{result}

</div>

)}

</div>

);

}