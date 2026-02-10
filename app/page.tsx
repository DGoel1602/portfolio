"use client";

import { Mouse } from "lucide-react";
import ParallaxBackground from "./_components/parallax";
import Fan from "./_components/fan";
import FunFacts from "./_components/funfacts";

export default function Home() {
  return (
    <>
      <ParallaxBackground />
      <div className="absolute inset-0 bg-[#1D122A] opacity-50 mix-blend-multiply" />
      <div className="absolute top-[40%]">
        <h1 className="px-6 text-3xl lg:text-5xl min-w-screen text-center">
          {" "}
          &quot;Truth is not what you want it to be, it is what it is&quot;{" "}
        </h1>
        <p className="text-3xl min-w-screen text-center py-7">
          {" "}
          - Miyamoto Musashi
        </p>
      </div>
      <Mouse className="absolute left-[48%] top-[84%] w-12 h-12 text-white animate-bounce" />
			
			<div className="min-h-screen"/>

			<h1 className="text-6xl text-white my-12 w-full text-center"> About Me! </h1>
			<div className="flex flex-col lg:flex-row justify-between"> 
				<FunFacts />
				<Fan />
			</div>
    </>
  );
}
