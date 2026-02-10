"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

// Text‑only cards
const cards = [
  { title: "I used to play state level cricket when I was 12!" },
  { title: "I was a top 1k fortnite player when I was 14... (this ones a little more embarrassing)" },
  { title: "I've lived in 4 different coutnries (India, England, Canada, and finally here, Florida, United States!)" },
  { title: "I'm currently trying to get emerald in MCSR (Minecraft speedrunning) ranked (No luck yet tho 😔)" },
  { title: "I still haven't learnt how to swim... (Yes, I live in Florida)" },
];

export default function CardDeck() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const next = () => setIndex((i) => (i + 1) % cards.length);
  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);

  return (
    <div className="w-1/2 h-[1000px] justify-center flex flex-col items-center gap-6 py-16 select-none">
			<h1 className="text-white text-3xl mb-6"> Random Facts </h1>
      <div className="flex mb-8 gap-4">
        <Button variant="secondary" size="icon" onClick={prev}>
          <ChevronLeft />
        </Button>
        <Button variant="secondary" size="icon" onClick={next}>
          <ChevronRight />
        </Button>
      </div>

      <div
        className="relative h-[220px] w-[520px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {cards.map((card, i) => {
          const offset = i - index;
          const depth = Math.abs(offset);
          const isActive = offset === 0;

          const spreadX = hovered ? 36 : 24; // horizontal cascade
          const spreadY = hovered ? 20 : 14;  // small vertical offset

          return (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{
                x: offset * spreadX,
                y: offset * spreadY,
                scale: isActive ? 1 : 0.97 - depth * 0.03,
                zIndex: cards.length - depth,
                filter: isActive ? "brightness(1)" : "brightness(0.8)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <Card className="h-[220px] w-[520px] rounded-2xl shadow-xl border bg-secondary" >
                <CardContent className="h-full flex flex-col justify-around">
									<p className="text-xl text-white font-bold">{card.title}</p>
                  <div className="text-sm text-muted-foreground">
                    Card {i + 1} of {cards.length}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="flex mt-8 gap-4">
				{cards.map((_card, i) => {
						return <Circle key={i} onClick={() => setIndex(i)} fill={`${i == index ? "white" : "gray"}`} className="w-3 h-3" />
					})
				}
      </div>
    </div>
  );
}
