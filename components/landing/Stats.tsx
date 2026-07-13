"use client";

const stats=[

["10+","AI Features"],

["100%","Gemini Powered"],

["Unlimited","PDF Upload"],

["24/7","Study Assistant"]

];

export default function Stats(){

return(

<section className="py-20">

<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

{

stats.map(([value,label])=>(

<div key={label} className="text-center">

<h2 className="text-5xl font-black text-cyan-400">

{value}

</h2>

<p className="mt-3 opacity-70">

{label}

</p>

</div>

))

}

</div>

</section>

);

}