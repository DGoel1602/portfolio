"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();
  const current =
    pathName == "/"
      ? "About"
      : pathName == "/projects"
        ? "Projects"
        : "Experience";

  return (
    <div className="z-1 flex justify-around px-3 min-w-screen bg-none h-[60pt] absolute top-0">
      <div className="text-white h-full content-center w-1/4">
        <Link href="/">
          <h4 className="text-4xl font-bold"> Dhruv </h4>
        </Link>
      </div>
      <div className="flex justify-around h-full content-center w-1/3">
        <Link href="/" className="content-center">
          <h4
            className={`text-2xl ${current == "About" ? "" : "hover:"}text-white font-bold relative group cursor-pointer`}
          >
            About
            <span
              className={`absolute bottom-0 left-1/2 h-[2px] w-0 bg-current transition-all duration-300 ${current == "About" ? "" : "group-hover:"}w-1/2`}
            />
            <span
              className={`absolute bottom-0 right-1/2 h-[2px] w-0 bg-current transition-all duration-300 ${current == "About" ? "" : "group-hover:"}w-1/2`}
            />
          </h4>
        </Link>
        <Link href="/projects" className="content-center">
          <h4
            className={`text-2xl ${current == "Projects" ? "" : "hover:"}text-white font-bold relative group cursor-pointer`}
          >
            Projects
            <span
              className={`absolute bottom-0 left-1/2 h-[2px] w-0 bg-current transition-all duration-300 ${current == "Projects" ? "" : "group-hover:"}w-1/2`}
            />
            <span
              className={`absolute bottom-0 right-1/2 h-[2px] w-0 bg-current transition-all duration-300 ${current == "Projects" ? "" : "group-hover:"}w-1/2`}
            />
          </h4>
        </Link>
        <Link href="/experience" className="content-center">
          <h4
            className={`text-2xl ${current == "Experience" ? "" : "hover:"}text-white font-bold relative group cursor-pointer`}
          >
            Experience
            <span
              className={`absolute bottom-0 left-1/2 h-[2px] w-0 bg-current transition-all duration-300 ${current == "Experience" ? "" : "group-hover:"}w-1/2`}
            />
            <span
              className={`absolute bottom-0 right-1/2 h-[2px] w-0 bg-current transition-all duration-300 ${current == "Experience" ? "" : "group-hover:"}w-1/2`}
            />
          </h4>
        </Link>
      </div>
    </div>
  );
}
