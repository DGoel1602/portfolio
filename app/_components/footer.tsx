import { GithubIcon, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-background text-muted-foreground">
      <div className="flex justify-around pb-6 px-6">
        <h1 className="text-3xl text-white h-full text-center">Dhruv Goel</h1>
        <div className="flex flex-col gap-4">
          <p className="text-2xl text-gray font-bold">Find me</p>
          <div className="flex gap-6">
            <Link href="https://github.com/DGoel1602">
              {" "}
              <GithubIcon className="transition-all duration-300 hover:text-white" />{" "}
            </Link>
            <Link href="https://www.linkedin.com/in/dhruv-goel-031868322/">
              {" "}
              <Linkedin className="transition-all duration-300 hover:text-white" />{" "}
            </Link>
            <Link href="mailto:dhruvgoel160207@gmail.com">
              {" "}
              <Mail className="transition-all duration-300 hover:text-white" />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t pt-6">© 2026 Dhruv Goel</div>
    </footer>
  );
}
