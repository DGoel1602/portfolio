import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ProjectCard({
  image,
  title,
  desc,
}: {
  image: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="grid h-screen">
      {" "}
      {/* or h-full, h-[500px], etc */}
      <div className="h-20 bg-primary"></div>
    </div>
  );
}
