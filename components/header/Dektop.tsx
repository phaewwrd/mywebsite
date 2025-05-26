"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Dektop() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState(""); // เพิ่มตรงนี้
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAnchorClick = (id: string) => {
    setActiveAnchor(id);
  };

  return (
    <nav className="rounded-xl w-3/4 bg-yellow-50 fixed z-10 top-10 shadow-md shadow-cyan-400/50 backdrop-blur-sm">
      <ul className="p-6 flex gap-10 rounded-md text-amber-400 font-bold">
        <li>
          <a
            href="/"
            className={`group relative px-2 py-1 font-bold ${
              pathname === "/"
                ? "text-cyan-600"
                : "text-cyan-600"
            }`}
          >
            HOME
            <span className="absolute left-0 -bottom-1.5 h-[2px] bg-yellow-400 transition-all duration-300 w-0 group-hover:w-full" />
          </a>
        </li>
        /
        <li>
          <a
            href="#aboutme"
            onClick={() => handleAnchorClick("aboutme")}
            className={`group relative px-2 py-1 font-bold ${
              activeAnchor === "aboutme"
                ? "text-cyan-900"
                : "text-cyan-600"
            }`}
          >
            ABOUT ME
            <span className="absolute left-0 -bottom-1.5 h-[2px] bg-yellow-400 transition-all duration-300 w-0 group-hover:w-full" />
          </a>
        </li>
        /
        <li>
          <a
            href="#projects"
            onClick={() => handleAnchorClick("projects")}
            className={`group relative px-2 py-1 font-bold ${
              activeAnchor === "projects"
                ? "text-cyan-900 "
                : "text-cyan-600"
            }`}
          >
            PROJECTS
            <span className="absolute left-0 -bottom-1.5 h-[2px] bg-yellow-400 transition-all duration-300 w-0 group-hover:w-full" />
          </a>
        </li>
        /
        <li>
          <a
            href="#blog"
            onClick={() => handleAnchorClick("blog")}
            className={`group relative px-2 py-1 font-bold ${
              activeAnchor === "blog"
                ? "text-cyan-900"
                : "text-cyan-600"
            }`}
          >
            CONTACT ME
            <span className="absolute left-0 -bottom-1.5 h-[2px] bg-yellow-400 transition-all duration-300 w-0 group-hover:w-full" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
