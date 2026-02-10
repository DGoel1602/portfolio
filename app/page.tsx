"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        alt="Background image"
        src="/cool-bg.gif"
        width="2000"
        height="2000"
        className="min-w-screen min-h-screen"
      />
      <div className="absolute inset-0 bg-[#1D122A] opacity-40 mix-blend-multiply" />
    </>
  );
}
