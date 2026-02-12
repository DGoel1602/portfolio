"use client";

import { Github, Mouse } from "lucide-react";
import ParallaxBackground from "./_components/parallax";
import Fan from "./_components/fan";
import FunFacts from "./_components/funfacts";

export function AboutMe() {
  return (
    <section className="text-xl px-6 space-y-8 w-full flex flex-col items-center text-center">
      <p className="max-w-[60ch]">
        Hey — I’m <strong>Dhruv</strong>, a software engineer in Orlando
        studying Computer Science at the{" "}
        <strong>Burnett Honors College @ UCF</strong>. I build systems affecting
        people, exploring intelligence, and improving infrastructure including
        AI research, full-stack platforms, and simulations.
      </p>

      <div className="max-w-[65ch] space-y-2">
        <h2 className="font-semibold">Current work</h2>
        <p>
          I work as a Web SWE and Hackathon Organizer at Knight Hacks building
          infrastructure for Florida’s best, research machine learning models in
          biomedicine analyzing enhancer-promoter interactions, and compete in{" "}
          <strong> ICPC </strong> programming contests under UCF.
        </p>
      </div>

      <div className="max-w-[65ch] space-y-2">
        <h2 className="font-semibold">What I’m building</h2>
        <p>
          I develop deep learning models for genomic regulation, platforms that
          run hackathons and manage large events, and experimental simulations
          and AI agents that explore cooperation and behavior.
        </p>
      </div>

      <div className="max-w-[65ch] space-y-2">
        <h2 className="font-semibold">Interests</h2>
        <p>
          Applied machine learning, computational biology, systems design,
          backend infrastructure, real-time applications, and interdisciplinary
          computing.
        </p>
      </div>
    </section>
  );
}

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

      <div className="min-h-screen" />

      <h1 className="text-6xl text-white my-12 w-full text-center">
        {" "}
        About Me!{" "}
      </h1>
      <AboutMe />
      <div className="mt-12 flex flex-col lg:flex-row justify-between">
        <FunFacts />
        <Fan />
      </div>
    </>
  );
}
