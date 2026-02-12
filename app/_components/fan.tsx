"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CARDS = [
  "/cards/1.webp",
  "/cards/2.webp",
  "/cards/3.webp",
  "/cards/4.webp",
  "/cards/5.webp",
];

const BASE_CARD_W = 152 * 2;
const BASE_CARD_H = 104 * 2;
const SPREAD_DEG = 20;
const BASE_X_OFFSET = 58;

export default function CardFan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        const componentWidth = containerRef.current.offsetWidth;
        const newScale = componentWidth / 520; // 520 is the original base width
        setScale(newScale < 1 ? newScale : 1);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CARD_W = BASE_CARD_W * scale;
  const CARD_H = BASE_CARD_H * scale;
  const X_OFFSET = BASE_X_OFFSET * scale;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    const center = (CARDS.length - 1) / 2;
    const mid = rect.width / 2;

    let closest = 0;
    let closestDist = Infinity;

    CARDS.forEach((_, i) => {
      const offset = i - center;
      const cardX = mid + offset * X_OFFSET;
      const dist = Math.abs(mouseX - cardX);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });

    setHovered(closest);
  }

  return (
    <div className="flex items-center justify-center w-full lg:w-1/2 px-4">
      <div
        ref={containerRef}
        className="relative w-full max-w-[520px] h-[420px] overflow-x-hidden lg:overflow-x-visible"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHovered(null)}
      >
        {CARDS.map((src, i) => {
          const center = (CARDS.length - 1) / 2;
          const offset = i - center;
          const isHovered = hovered === i;

          const baseRotate = offset * SPREAD_DEG;
          const baseX = offset * X_OFFSET;
          const baseY = Math.abs(offset) * 10 * scale;
          const yHover = -150 * scale;

          return (
            <motion.div
              key={i}
              className="absolute bottom-[100px] left-1/2 pointer-events-none"
              style={{
                transformOrigin: "bottom center",
                marginLeft: -(CARD_W / 2),
                width: CARD_W,
                height: CARD_H,
              }}
              animate={{
                x: baseX,
                y: isHovered ? yHover : baseY,
                rotate: isHovered ? 0 : baseRotate,
                scale: isHovered ? 1.18 : 1,
                zIndex: isHovered ? 100 : 10 - Math.abs(offset),
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 30,
                mass: 0.7,
              }}
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
        relative w-full h-full overflow-hidden rounded-2xl select-none
        border border-white/10
        transition-shadow duration-200
        ${
          isHovered
            ? "shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_0_1.5px_rgba(255,255,255,0.25)]"
            : "shadow-[0_8px_24px_rgba(0,0,0,0.65)]"
        }
      `}
    >
      <Image
        src={src}
        alt="card"
        fill
        className="object-cover pointer-events-none"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
    </div>
  );
}
