"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { div } from "framer-motion/client";
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

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
    <div>
      
      {/* {isMobile ? 
<NavBar/>
      : <LayoutHeader/> } */}

    </div>
   
  );
}
