"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "@/app/globals.css";

export default function EduCard({ edu, delay }: { edu: any; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px", });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "tween", stiffness: 40, damping: 15, mass: 0.5, delay },
        },
      }}
      className="group border border-slate-600 rounded-xl text-xl 
      hover:border-amber-100 duration-600  "
    >
      <div className="relative p-10">
        <div className="font-semibold">{edu.org_name}</div>
        <div>{edu.years}</div>
        <div className="">{edu.subject}</div>
      </div>
    </motion.div>
  );
}
