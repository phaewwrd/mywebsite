"use client";
import { div } from "framer-motion/client";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" absolute max-w-screen rounded-xl m-10 md:absolute md:w-3/4">
      <div className="">
        <nav>
          <ul className="p-6 flex gap-10 rounded-md bg-yellow-50  text-cyan-600 font-bold">
            <li>
              <Link href="/" aria-label="Home Page">
                Phaewphan Wrd.
              </Link>
            </li>
            /
             <li>
              <Link href="/project" aria-label="Home Page">
                PROJECTS
              </Link>
            </li>
            /
            <li>
              <Link href="/blog" aria-label="Home Page">
                BLOG
              </Link>
            </li>
           
          </ul>
        </nav>
      </div>
    </div>
  );
}
