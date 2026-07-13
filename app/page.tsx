"use client";

import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Stats from "@/components/landing/Stats";
import Footer from "@/components/landing/Footer";

export default function Home(){

return(

<main className="bg-slate-950 text-white">

<Hero/>

<Stats/>

<Features/>

<Footer/>

</main>

);

}