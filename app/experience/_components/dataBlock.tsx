import { useScrollReveal } from "@/hooks/scroll";

interface props {
  year: string;
  month: string;
  endYear: string;
  endMonth: string;
  isCurrent: boolean;
  alignRight: boolean;
}

export default function DateBlock({
  year,
  month,
  endYear,
  endMonth,
  isCurrent,
  alignRight,
}: props) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
				flex flex-col w-full md:w-[calc(50%-2.5rem)] items-start text-left ${
          alignRight
            ? "md:items-end md:text-right"
            : "md:items-start md:text-left"
        }`}
    >
      <span className="text-5xl font-bold leading-none tracking-tight">
        {year}
      </span>
      <span className="text-xs uppercase tracking-widest mt-1 text-muted-foreground">
        {month} - {isCurrent ? "Present" : `${endMonth} ${endYear}`}
      </span>
    </div>
  );
}
