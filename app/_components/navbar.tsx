"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem(props: { route: string, name: string }) {
	const current = usePathname();
	return (
        <Link href={props.route} className="content-center">
          <h4
            className={`text-2xl ${current == props.route ? "" : "hover:"}text-white font-bold relative group cursor-pointer`}
          >
					{ props.name }
            <span
              className={`absolute bottom-0 left-1/2 h-[2px] w-0 bg-current transition-all duration-300 ${current == props.route ? "" : "hover:"}w-1/2`}
            />
            <span
              className={`absolute bottom-0 right-1/2 h-[2px] w-0 bg-current transition-all duration-300 ${current == props.route ? "" : "hover:"}w-1/2`}
            />
          </h4>
        </Link>
	)
}

export default function NavBar() {
  return (
    <div className="z-1 flex justify-around px-3 min-w-screen bg-none h-[60pt] absolute top-0">
      <div className="text-white h-full content-center w-1/4">
        <Link href="/">
          <h4 className="text-4xl font-bold"> Dhruv </h4>
        </Link>
      </div>
      <div className="flex justify-around h-full content-center w-1/3">
				<NavItem route="/" name="About" />
				<NavItem route="/projects" name="Projects" />
				<NavItem route="/experience" name="Experience" />
      </div>
    </div>
  );
}
