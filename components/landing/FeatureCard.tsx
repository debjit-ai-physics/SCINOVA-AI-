"use client";

import Card from "@/components/ui/Card";

export default function FeatureCard({
  title,
  description,
}:{
  title:string;
  description:string;
}){

return(

<Card>

<h2 className="text-2xl font-bold mb-3">
{title}
</h2>

<p className="opacity-70 leading-8">
{description}
</p>

</Card>

);

}