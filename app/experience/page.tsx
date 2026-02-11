import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  year: string;
  month: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
}

const experiences: Experience[] = [
  {
    year: "2024",
    month: "March",
    title: "Senior Product Designer",
    company: "Meridian Studio",
    description:
      "Led end-to-end design for three flagship SaaS products. Established a design system used across 12 teams and mentored a team of four junior designers.",
    tags: ["Design Systems", "Leadership", "SaaS"],
  },
  {
    year: "2022",
    month: "August",
    title: "UX Engineer",
    company: "Volta Labs",
    description:
      "Bridged the gap between design and engineering by building reusable component libraries in React. Partnered with PMs to run usability studies and translate insights into product decisions.",
    tags: ["React", "Research", "Prototyping"],
  },
  {
    year: "2021",
    month: "January",
    title: "Frontend Developer",
    company: "Kestrel Digital",
    description:
      "Built performant, accessible web experiences for clients across fintech and healthcare. Introduced automated visual regression testing that reduced QA cycles by 40%.",
    tags: ["TypeScript", "Accessibility", "Testing"],
  },
  {
    year: "2019",
    month: "June",
    title: "UI Designer",
    company: "Folio Agency",
    description:
      "Crafted visual identities and digital interfaces for early-stage startups. Delivered high-fidelity Figma prototypes and collaborated closely with development teams during handoff.",
    tags: ["Figma", "Branding", "Startups"],
  },
];

interface DateBlockProps {
  year: string;
  month: string;
  alignRight: boolean;
}

function DateBlock({ year, month, alignRight }: DateBlockProps) {
  return (
    <div
      className={`flex flex-col w-full md:w-[calc(50%-2.5rem)] items-start text-left ${
        alignRight ? "md:items-end md:text-right" : "md:items-start md:text-left"
      }`}
    >
      <span className="text-5xl font-bold leading-none tracking-tight">{year}</span>
      <span className="text-xs uppercase tracking-widest mt-1">{month}</span>
    </div>
  );
}

interface CardBlockProps {
  title: string;
  company: string;
  description: string;
  tags?: string[];
}

function CardBlock({ title, company, description, tags }: CardBlockProps) {
  return (
    <div className="w-full md:w-[calc(50%-2.5rem)]">
      <Card>
        <CardHeader className="pb-2">
          <p className="text-xs uppercase tracking-widest">{company}</p>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed mb-4">{description}</p>
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function ConnectorDot() {
  return (
    <div className="flex items-center justify-center w-20 shrink-0">
      <div className="w-3 h-3 rounded-full border-2 bg-background ring-2 ring-border z-10" />
    </div>
  );
}

interface TimelineEntryProps {
  experience: Experience;
  index: number;
}

function TimelineEntry({ experience, index }: TimelineEntryProps) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center w-full py-8">
      {/* Mobile: stacked layout */}
      <div className="flex flex-col gap-3 w-full md:hidden pl-10">
        <DateBlock year={experience.year} month={experience.month} alignRight={false} />
        <CardBlock
          title={experience.title}
          company={experience.company}
          description={experience.description}
          tags={experience.tags}
        />
      </div>

      {/* Desktop: alternating layout */}
      <div className="hidden md:flex items-center w-full">
        {isLeft ? (
          <>
            <DateBlock year={experience.year} month={experience.month} alignRight={true} />
            <ConnectorDot />
            <CardBlock
              title={experience.title}
              company={experience.company}
              description={experience.description}
              tags={experience.tags}
            />
          </>
        ) : (
          <>
            <CardBlock
              title={experience.title}
              company={experience.company}
              description={experience.description}
              tags={experience.tags}
            />
            <ConnectorDot />
            <DateBlock year={experience.year} month={experience.month} alignRight={false} />
          </>
        )}
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-10">
        <p className="text-xs uppercase tracking-widest mb-3">Career History</p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">Experience</h1>
        <p className="mt-4 text-base text-muted-foreground">
          A record of the work that shaped my craft.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 pb-24 relative">
        {/* Vertical line — desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

        {/* Vertical line — mobile */}
        <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-border" />

        {experiences.map((exp, i) => (
          <TimelineEntry key={i} experience={exp} index={i} />
        ))}
      </div>
    </main>
  );
}
