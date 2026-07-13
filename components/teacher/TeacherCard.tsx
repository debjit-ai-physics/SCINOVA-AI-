"use client";

export default function TeacherCard({

title,

description,

children,

}:{

title:string;

description:string;

children:React.ReactNode;

}){

return(

<div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

<h2 className="text-3xl font-bold">

{title}

</h2>

<p className="opacity-70 mt-2 mb-8">

{description}

</p>

{children}

</div>

);

}
