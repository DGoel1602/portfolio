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
      <div className="absolute inset-0 bg-[#1D122A] opacity-50 mix-blend-multiply" />
			<h1 className="text-5xl min-w-screen text-center absolute top-[40%]"> &quot;Some random ass quote&quot; </h1>
			<p className="text-3xl min-w-screen text-center absolute top-[47%]"> - Some guy probably </p>
    </>
  );
}
