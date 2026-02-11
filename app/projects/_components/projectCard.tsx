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
  link,
}: {
  image: string;
  title: string;
  desc: string;
  link: string | null;
}) {
  const card = (
    <Card
      className={`flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group ${link ? "cursor-pointer" : ""}`}
    >
      <div className="relative object-cover w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          unoptimized
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>

      <CardHeader className="pb-1 pt-4 px-4">
        <CardTitle className="text-base font-semibold leading-tight text-card-foreground">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0 pb-4 px-4">
        <CardDescription className="text-sm leading-relaxed line-clamp-3">
          {desc}
        </CardDescription>
      </CardContent>
    </Card>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {card}
      </a>
    );
  }

  return card;
}

