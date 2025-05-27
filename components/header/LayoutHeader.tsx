"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function LayoutHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    setHasMounted(true);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hasMounted) return null; // or return a loading placeholder

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
}
