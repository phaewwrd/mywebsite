"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { div } from "framer-motion/client";
import { usePathname } from "next/navigation";
import Dektop from "./Dektop";
import Mobile from "./Mobile";

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

  return <>{isMobile ? <Mobile /> : <Dektop />}</>;
}
