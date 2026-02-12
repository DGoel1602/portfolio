"use client";

import { Separator } from "@/components/ui/separator";
import DateBlock from "./_components/dataBlock";
import CardBlock from "./_components/cardBlock";
import ConnectorDot from "./_components/connecter";

const experiences = [
	{
  year: "2025",
  month: "September",
  endYear: "Present",
  endMonth: "",
  isCurrent: true,
  title: "Competitive Programmer",
  company: "UCF Competitive Programming Team",
  description:
    "Compete in weekly mock contests and collaborative training sessions focused on advanced algorithms and problem solving. Achieved the top Division II score at the ICPC Southeast Regionals out of 100+ teams. Regularly solve problems involving graph theory, dynamic programming, greedy optimization, number theory, and data structures under strict time constraints, emphasizing correctness, efficiency, and teamwork.",
},
  {
    year: "2025",
    month: "August",
    endYear: "Present",
    endMonth: "",
    isCurrent: true,
    title: "Software Engineering Intern",
    company: "Knight Hacks @ UCF",
    description:
      "Architected and hardened core backend infrastructure, implementing middleware-based DoS protections and migrating all authentication to self-hosted BetterAuth, securing 1000+ users during peak hackathon traffic. Designed and built a judging and room-assignment system coordinating 30+ judges and 900+ hackers for project evaluation. Engineered a fully dynamic custom forms platform from first principles, including a custom form format parser and JSON schema generator enabling arbitrary form creation and submissions without manual schema changes. Extended platform capabilities by reworking tRPC internals to enable automatic procedure execution on form submissions, unlocking powerful form-driven workflows across the system.",
  },
  {
    year: "2025",
    month: "May",
    endYear: "Present",
    endMonth: "",
    isCurrent: true,
    title: "Machine Learning Research Assistant",
    company: "University of Central Florida",
    description:
      "Developed a deep learning model to predict enhancer-promoter interaction through active neighbours in long-range genomic sequences. Leveraged Mamba’s selective state space design to efficiently model long and short-range genomic sequences across chromosomes. Achieved state-of-the-art performance in short and long-range genomic sequences, beating models like HyenaDNA and DNABERT. Improved AUROC/MCC metrics by 4-5% over existing models in datasets like Human OCR Ensembl and cell lines such as K562.",
  },
  {
    year: "2025",
    month: "May",
    endYear: "2025",
    endMonth: "July",
    isCurrent: false,
    title: "Software Engineer",
    company: "LiveInStyle",
    description:
      "Built and deployed a full-stack web service and platform for a retail business, serving 3,000+ monthly active users with NextJS. Engineered a responsive frontend with admin dashboards for inventory management, order tracking, and analytics with real-time updates. Integrated authentication with Better Auth, payment processing with Stripe, and Convex for efficient product data storage, plus Upstash for caching to improve retrieval speeds by 60%. Optimized performance, reducing load times by 35% through caching, CDN image delivery, and runtime lazy-loading techniques.",
  },
  {
    year: "2023",
    month: "June",
    endYear: "August",
    endMonth: "",
    isCurrent: false,
    title: "Data Analysis Intern",
    company: "Vancouver Fashion Week",
    description:
      "Assisted in designing multimedia advertisements, video, and graphic content for social media campaigns, enhancing brand visibility and engagement. Automated data collection processes by developing a Python web scraper, reducing research time by 30% and enabling data-driven content decisions. Redesigned the company website for improved UX/UI, optimizing navigation and load speed, which increased click-through rates by 20%.",
  },
];

function TimelineEntry({
  experience,
  index,
}: {
  experience: (typeof experiences)[number];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center w-full py-8">
      <div className="flex flex-col gap-3 w-full md:hidden pl-10">
        <DateBlock
          year={experience.year}
          month={experience.month}
          endYear={experience.endYear}
          endMonth={experience.endMonth}
          isCurrent={experience.isCurrent}
          alignRight={false}
        />
        <CardBlock
          title={experience.title}
          company={experience.company}
          description={experience.description}
        />
      </div>

      <div className="hidden md:flex items-center w-full">
        {isLeft ? (
          <>
            <DateBlock
              year={experience.year}
              month={experience.month}
              endYear={experience.endYear}
              endMonth={experience.endMonth}
              isCurrent={experience.isCurrent}
              alignRight={true}
            />
            <ConnectorDot />
            <CardBlock
              title={experience.title}
              company={experience.company}
              description={experience.description}
            />
          </>
        ) : (
          <>
            <CardBlock
              title={experience.title}
              company={experience.company}
              description={experience.description}
            />
            <ConnectorDot />
            <DateBlock
              year={experience.year}
              month={experience.month}
              endYear={experience.endYear}
              endMonth={experience.endMonth}
              isCurrent={experience.isCurrent}
              alignRight={false}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-10">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Experience
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 relative">
        <Separator
          orientation="vertical"
          className="hidden md:block absolute left-1/2 top-0 bottom-0 h-full -translate-x-1/2"
        />

        <Separator
          orientation="vertical"
          className="md:hidden absolute left-5 top-0 bottom-0 h-full"
        />

        {experiences.map((exp, i) => (
          <TimelineEntry key={i} experience={exp} index={i} />
        ))}
      </div>
    </main>
  );
}
