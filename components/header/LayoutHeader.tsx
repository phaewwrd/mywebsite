"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { div } from "framer-motion/client";
import { usePathname } from "next/navigation";

export default function LayoutHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className=" rounded-xl w-3/4  bg-yellow-50">
      <ul className="p-6 flex gap-10 rounded-md   text-cyan-600 font-bold">
        <li>
          <Link
            href="/"
            className={`group relative px-2 py-1 font-bold text-cyan-600 ${
              pathname === "/"
                ? "after:w-full text-cyan-900 px-3 py-2 rounded-lg"
                : ""
            }`}
          >
            HOME
            <span className="absolute left-0 -bottom-1.5 h-[2px] bg-yellow-400 transition-all duration-300 w-0 group-hover:w-full" />
          </Link>
        </li>
        /
        <li>
          <Link
            href="#aboutme"
            className={`group relative px-2 py-1 font-bold text-cyan-600 ${
              pathname === "/aboutme"
                ? "after:w-full text-cyan-900 px-3 py-2 rounded-lg"
                : ""
            }`}
          >
            ABOUT ME
            <span className="absolute left-0 -bottom-1.5 h-[2px] bg-yellow-400 transition-all duration-300 w-0 group-hover:w-full" />
          </Link>
        </li>
        /
        <li>
          <Link
            href="#projects"
            className={`group relative px-2 py-1 font-bold text-cyan-600 ${
              pathname === "/project"
                ? "after:w-full text-cyan-900 px-3 py-2 rounded-lg"
                : ""
            }`}
          >
            PROJECTS
            <span className={`absolute left-0 -bottom-1.5 h-[2px]  bg-yellow-400 transition-all duration-300 w-0 group-hover:w-full`} />
          </Link>
        </li>
        /
        <li>
          <Link
            href="#blog"
            className={`group relative px-2 py-1 font-bold text-cyan-600 ${
              pathname === "/blog"
                ? "after:w-full text-cyan-900 px-3 py-2 rounded-lg"
                : ""
            }`}
          >
            BLOG
            <span className="absolute left-0 -bottom-1.5 h-[2px] bg-yellow-400 transition-all duration-300 w-0 group-hover:w-full" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
