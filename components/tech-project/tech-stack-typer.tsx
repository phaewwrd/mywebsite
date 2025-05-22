"use client";

import { useEffect, useState } from "react";

interface TechItem {
  id: number;
  name: string;
  image_Url: string;
}

interface TechStackTyperProps {
  tech: TechItem[];
}

export function TechStackTyper({ tech }: TechStackTyperProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCount((prev) => (prev + 1) % (tech.length + 1));
    }, 1000); // 3s ต่อภาพ

    return () => clearTimeout(timer);
  }, [visibleCount, tech.length]);

  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(blink);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {tech.slice(0, visibleCount).map((el) => (
        <img
          key={el.id}
          src={el.image_Url || ""}
          alt={el.name || ""}
          className="w-10 h-10 object-contain transition-opacity duration-500"
        />
      ))}
      {visibleCount < tech.length && (
        <span className="text-3xl text-cyan-400 font-bold">
          {showCursor ? "|" : " "}
        </span>
      )}
    </div>
  );
}
