import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/scroll";

interface props {
  title: string;
  company: string;
  description: string;
}

export default function CardBlock({ title, company, description }: props) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`
		w-full md:w-[calc(50%-2.5rem)] hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.9)]
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
				`}
    >
      <Card>
        <CardHeader className="pb-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {company}
          </p>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed mb-4">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
