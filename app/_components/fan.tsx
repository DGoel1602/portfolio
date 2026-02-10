"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CARDS = [
  "/cards/1.webp",
  "/cards/2.webp",
  "/cards/3.webp",
  "/cards/4.webp",
  "/cards/5.webp",
];

const CARD_W = 152 * 2;
const CARD_H = 104 * 2;
const SPREAD_DEG = 20;
const X_OFFSET = 58;

export default function CardFan() {
  const [hovered, setHovered] = useState<number | null>(null);
  const center = (CARDS.length - 1) / 2;

  return (
    <div className="flex items-center justify-center min-h-[1000px] w-1/2 bg-background">
      <div
        className="relative flex items-start bottom-1/10 justify-center w-[420px] h-[320px]"
        onMouseLeave={() => setHovered(null)}
      >
        {CARDS.map((src, i) => {
          const offset = i - center;
          const isHovered = hovered === i;

          const baseRotate = offset * SPREAD_DEG;
          const baseX = offset * X_OFFSET;
          const baseY = Math.abs(offset) * 10;

          return (
            <motion.div
              key={i}
              className="absolute bottom-0 left-1/2"
              style={{
                transformOrigin: "bottom center",
                marginLeft: -(CARD_W / 2),
                willChange: "transform",
              }}
              animate={{
                x: baseX,
                y: isHovered ? -148 : baseY,
                rotate: isHovered ? 0 : baseRotate,
                scale: isHovered ? 1.18 : 1,
                zIndex: isHovered ? 50 : 10 - Math.abs(offset),
              }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 32,
                mass: 0.7,
              }}
              onMouseEnter={() => setHovered(i)}
            >
              <Card src={src} isHovered={isHovered} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function Card({ src, isHovered }: { src: string; isHovered: boolean }) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl cursor-pointer select-none
        border border-white/10
        transition-shadow duration-200
        ${isHovered
          ? "shadow-[0_28px_56px_rgba(0,0,0,0.8),0_0_0_1.5px_rgba(255,255,255,0.25)]"
          : "shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
        }
      `}
      style={{ width: CARD_W, height: CARD_H }}
    >
      <Image
        src={src}
        alt="card"
        fill
        className="object-cover pointer-events-none"
        draggable={false}
      />
      {/* Subtle gloss sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
    </div>
  );
}
