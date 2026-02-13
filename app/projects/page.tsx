import ProjectCard from "./_components/projectCard";

const projects = [
  {
    title: "VeiledVoice",
    desc: "A platform for students to ask questions during class anonymously. Includes TTS, optional anonymity, teacher responses, message flagging, and authentication.",
    image: "/projects/veiledvoice.webp",
    hackWinner: null,
    link: "https://github.com/DGoel1602/VeiledVoice",
  },
  {
    title: "RICO-32",
    desc: "A fantasy console for creating retro games in Rust. Includes a game engine, console engine, built-in IDE, sprite engine, and terminal for exporting games.",
    image: "/projects/rico.gif",
    hackWinner: null,
    link: "https://github.com/RICO-32/RICO-32",
  },
  {
    title: "Forge",
    desc: "The backbone of Knight Hacks handling forms, permissions, hackathon data, judging, and member information.",
    image: "/projects/blade.webp",
    hackWinner: null,
    link: "https://github.com/KnightHacks/forge",
  },
  {
    title: "Altimate",
    desc: "An accessibility Chrome extension that detects and automatically fixes accessibility issues on websites.",
    image: "/projects/altimate.webp",
    hackWinner: null,
    link: "https://devpost.com/software/altimate",
  },
  {
    title: "Crimson Brawl",
    desc: "A two-player EEG powered game where players control actions like jumping, movement, kicking, punching, and dashing using jaw and head movements.",
    image: "/projects/crimson.webp",
    hackWinner: "Knight Hacks VIII",
    link: "https://devpost.com/software/project-foxtrot-black-trigger-watchtower-omega",
  },
  {
    title: "ATC-trainer",
    desc: "A free training tool for aviation radio communication and airport operations practice, lowering the financial barrier to entry for aviation careers.",
    image: "/projects/atc.gif",
    hackWinner: "SwampHacks XI",
    link: "https://devpost.com/software/atc-trainer",
  },
  {
    title: "Image to Desmos Converter",
    desc: "Mathematical algorithm that converts digital images into plottable equations for the Desmos graphing calculator.",
    image: "/projects/lines.webp",
    hackWinner: null,
    link: null,
  },
  {
    title: "Slime Simulation",
    desc: "A Unity mathematical simulation modeling ant and slime colony movement and spread behaviors.",
    image: "/projects/slime.gif",
    hackWinner: null,
    link: null,
  },
  {
    title: "Dino NEAT",
    desc: "Neuroevolution of Automated Topologies implementation creating a self-learning agent that plays the Chrome Dino game using simulated evolution.",
    image: "/projects/dino.gif",
    hackWinner: null,
    link: null,
  },
  {
    title: "You, Again?",
    desc: "A GTMK 2025 puzzle platformer where players cooperate with their past lives and use previous deaths to solve levels.",
    image: "/projects/youagain.png",
    hackWinner: null,
    link: "https://plasman3050.itch.io/you-again",
  },
];

function chunk<T>(arr: T[], size: number): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

export default function ProjectGrid() {
  const rows = chunk(projects, 2);

  return (
    <section
      style={{ maxWidth: "64rem", marginInline: "auto" }}
      className="w-full px-6 py-24"
    >
      <div>
        <h1 className="font-bold w-full text-6xl pb-12 text-center">
          {" "}
          Projects{" "}
        </h1>
      </div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "2rem" }}
          >
            {row.map((project, projectIndex) => (
              <ProjectCard
                key={projectIndex}
                image={project.image}
                title={project.title}
                desc={project.desc}
                hack={project.hackWinner}
                link={project.link}
              />
            ))}
          </div>

          {rowIndex !== rows.length - 1 && (
            <hr
              style={{
                border: "none",
                height: "1px",
                backgroundColor: "hsl(var(--muted-foreground) / 0.25)",
                marginBlock: "3rem",
              }}
            />
          )}
        </div>
      ))}
    </section>
  );
}
