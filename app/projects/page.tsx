"use client";

import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";


const projects = [
  {
    title: "VeiledVoice",
    desc: "A platform for students to ask questions during class anonymously. Includes TTS, optional anonymity, teacher responses, message flagging, and authentication.",
    image: "/projects/veiledvoice.webp",
    hackWinner: null,
  },
  {
    title: "RICO-32",
    desc: "A fantasy console for creating retro games in Rust. Includes a game engine, console engine, built-in IDE, sprite engine, and terminal for exporting games.",
    image: "/projects/rico.gif",
    hackWinner: null,
  },
  {
    title: "Forge",
    desc: "The backbone of Knight Hacks handling forms, permissions, hackathon data, judging, and member information.",
    image: "/projects/blade.webp",
    hackWinner: null,
  },
  {
    title: "Altimate",
    desc: "An accessibility Chrome extension that detects and automatically fixes accessibility issues on websites.",
    image: "/projects/altimate.webp",
    hackWinner: null,
  },
  {
    title: "Crimson Brawl",
    desc: "A two-player EEG powered game where players control actions like jumping, movement, kicking, punching, and dashing using jaw and head movements.",
    image: "/projects/crimson.webp",
    hackWinner: "Knight Hacks VIII",
  },
  {
    title: "ATC-trainer",
    desc: "A free training tool for aviation radio communication and airport operations practice, lowering the financial barrier to entry for aviation careers.",
    image: "/projects/atc.webp",
    hackWinner: "SwampHacks XI",
  },
  {
    title: "Image to Desmos Converter",
    desc: "Mathematical algorithm that converts digital images into plottable equations for the Desmos graphing calculator.",
    image: "/projects/lines.webp",
    hackWinner: null,
  },
  {
    title: "Slime Simulation",
    desc: "A Unity mathematical simulation modeling ant and slime colony movement and spread behaviors.",
    image: "/projects/slime.webp",
    hackWinner: null,
  },
  {
    title: "Dino NEAT",
    desc: "Neuroevolution of Automated Topologies implementation creating a self-learning agent that plays the Chrome Dino game using simulated evolution.",
    image: "/projects/dino.webp",
    hackWinner: null,
  },
  {
    title: "You, Again?",
    desc: "A GTMK 2025 puzzle platformer where players cooperate with their past lives and use previous deaths to solve levels.",
    image: "/projects/youagain.png",
    hackWinner: null,
  },
];

export interface Project {
  title: string;
  desc: string;
  image: string;
  hackWinner: string | null;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-1/2 group relative overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <div
        style={{
          height: "320px",
          minHeight: "320px",
          maxHeight: "320px",
          overflow: "hidden",
        }}
      >
        <img
          src={project.image}
          style={{
            height: "320px",
            minHeight: "320px",
            maxHeight: "320px",
            width: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="relative flex flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <h3 className="px-2 text-lg font-semibold leading-tight tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>
          {project.hackWinner && (
            <Badge className="bg-primary-foreground shrink-0 gap-1.5 border-primary/20 text-primary hover:bg-primary/15">
              <Trophy className="h-3 w-3" color="yellow" />
              <span className="sm:inline">{project.hackWinner}</span>
              <span className="sm:hidden">Winner</span>
            </Badge>
          )}
        </div>

        {/* Description */}
        <p className="px-2 text-sm leading-relaxed text-muted-foreground">
          {project.desc}
        </p>
      </CardContent>
    </Card>
  );
}

export default function ProjectsGrid() {
  // Group projects into rows of 2
  const rows: (typeof projects)[] = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ paddingTop: '90px'}}>
      <div className="h-80 bg-primary-foreground flex items-center justify-center" style={{ paddingBottom: '24px' }}>
        <h1 className="text-6xl text-center py-12"> Projects </h1>
      </div>
      {rows.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          <div className="flex flex-row md:flex-col gap-4 md:gap-6">
            {row.map((project) => (
              <div
                key={project.title}
                className="flex justify-around w-1/2 flex-1"
								style= {{ marginTop: "30px" }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </main>
  );
}
