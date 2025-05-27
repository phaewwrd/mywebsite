"use client";

import React, { useEffect, useState } from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function LayoutHeader() {
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    setHasMounted(true);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!hasMounted) return 

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
}
