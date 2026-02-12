import { useState, useEffect, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

export default function ParallaxBackground() {
  const [smoothPos, setSmoothPos] = useState<Position>({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef<Position>({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      targetRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

    const animate = (): void => {
      setSmoothPos((prev) => ({
        x: lerp(prev.x, targetRef.current.x, 0.06),
        y: lerp(prev.y, targetRef.current.y, 0.06),
      }));
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const parallaxRange = 40; // px of travel
  const offsetX = (smoothPos.x - 0.5) * -parallaxRange;
  const offsetY = (smoothPos.y - 0.5) * -parallaxRange;

  return (
		<>
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background: "#000",
      }}
    >
      <img
        src="/cool-bg.gif"
        alt="Background"
        style={{
          position: "absolute",
          top: `calc(-5% + ${offsetY}px)`,
          left: `calc(-5% + ${offsetX}px)`,
          width: "110%",
          height: "110%",
          objectFit: "cover",
          transform: "scale(1.1)",
          transformOrigin: "center center",
          willChange: "top, left",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </div>
		</>
  );
}
