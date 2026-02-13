"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

const cards = [
  { title: "I used to play state level U18 cricket when I was 12!" },
  {
    title:
      "I was a top 1k fortnite player when I was 14... (this ones a little more embarrassing)",
  },
  {
    title:
      "I've lived in 4 different coutnries (India, England, Canada, and finally here, Florida, United States!)",
  },
  {
    title:
      "I'm currently trying to get emerald in MCSR (Minecraft speedrunning) ranked (No luck yet tho 😔)",
  },
  { title: "I still haven't learnt how to swim... (Yes, I live in Florida)" },
];

export default function CardDeck() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const componentWidth = containerRef.current.offsetWidth;
        const newScale = componentWidth / 520;
        setScale(newScale < 1 ? newScale : 1);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => setIndex((i) => (i + 1) % cards.length);
  const prev = () => setIndex((i) => (i - 1 + cards.length) % cards.length);

  const h = 220 * scale;
  const w = 520 * scale;

  return (
    <div className="w-full overflow-hidden lg:w-1/2 justify-center flex flex-col items-center gap-6 py-16 select-none px-4">
      <h1 className="text-white text-2xl md:text-3xl mb-6 text-center">
        {" "}
        Random Facts{" "}
      </h1>
      <div className="flex mb-8 gap-4">
        <Button variant="secondary" size="icon" onClick={prev}>
          <ChevronLeft />
        </Button>
        <Button variant="secondary" size="icon" onClick={next}>
          <ChevronRight />
        </Button>
      </div>

      <div
        ref={containerRef}
        className="relative h-[220px] w-full max-w-[520px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ height: h }}
      >
        {cards.map((card, i) => {
          const offset = i - index;
          const depth = Math.abs(offset);
          const isActive = offset === 0;

          const spreadX = (hovered ? 36 : 24) * scale;
          const spreadY = (hovered ? 20 : 14) * scale;

          return (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{ width: w, height: h }}
              animate={{
                x: offset * spreadX,
                y: offset * spreadY,
                scale: isActive ? 1 : 0.97 - depth * 0.03,
                zIndex: cards.length - depth,
                filter: isActive ? "brightness(1)" : "brightness(0.8)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <Card className="h-full w-full rounded-2xl shadow-xl border bg-secondary">
                <CardContent className="h-full flex flex-col justify-around p-4 md:p-6">
                  <p className="text-base md:text-xl text-white font-bold">
                    {card.title}
                  </p>
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
          return (
            <Circle
              key={i}
              onClick={() => setIndex(i)}
              fill={`${i == index ? "white" : "gray"}`}
              className="w-3 h-3 cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
}
