"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function NavItem(props: { route: string; name: string; onClick?: () => void }) {
  const current = usePathname();
  return (
    <Link href={props.route} className="content-center" onClick={props.onClick}>
      <h4
        className={`text-2xl ${current == props.route ? "" : "hover:"}text-white font-bold relative group cursor-pointer`}
      >
        {props.name}
        <span
          className={`absolute bottom-0 left-1/2 h-[2px] w-0 bg-current transition-all duration-300 ${current == props.route ? "" : "hover:"}w-1/2`}
        />
        <span
          className={`absolute bottom-0 right-1/2 h-[2px] w-0 bg-current transition-all duration-300 ${current == props.route ? "" : "hover:"}w-1/2`}
        />
      </h4>
    </Link>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-50 backdrop-blur-sm flex justify-between items-center px-4 md:px-3 bg-transparent h-[60pt] fixed top-0 w-full">
      <div className="text-white h-full content-center">
        <Link href="/">
          <h4 className="text-4xl font-bold"> Dhruv </h4>
        </Link>
      </div>
      <div className="hidden md:flex justify-around h-full content-center w-1/3">
        <NavItem route="/" name="About" />
        <NavItem route="/projects" name="Projects" />
        <NavItem route="/experience" name="Experience" />
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-[60pt] left-0 w-full bg-black/80 backdrop-blur-sm flex flex-col items-center gap-6 py-6">
          <NavItem route="/" name="About" onClick={() => setIsOpen(false)} />
          <NavItem
            route="/projects"
            name="Projects"
            onClick={() => setIsOpen(false)}
          />
          <NavItem
            route="/experience"
            name="Experience"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
