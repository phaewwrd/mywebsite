"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { span } from "framer-motion/client";

export default function ProjectCard({
  techstack,
  projects,
  delay = 0,
}: {
  techstack: any;
  projects: any;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
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
        hidden: { opacity: 0, x: 100 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.4,
            delay: delay,
          },
        },
      }}
      className="group transition-all duration-500 border-slate-700 border rounded-2xl flex flex-col gap-5 p-10 hover:py-20 hover:border-amber-200 xl:h-70 overflow-hidden hover:h-full place-items-start"
    >
      <div >
        <div
          className="text-2xl md:text-[clamp(2rem,2vmin,4rem)] tracking-[3px] font-semibold text-slate-200 flex gap-2 place-items-center"
          style={{
            textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          {projects.name}
          <Link href="/projects" />
        </div>
        <div className="text-xl text-slate-400">{projects.description}</div>
      </div>

      <div className="mt-4 grid grid-cols-6 md:grid-cols-9 gap-4 ">
        {techstack
          .filter((tech: any) => projects.tech_stack?.includes(tech.name))
          .map((tech: any) => (
            <div
              key={tech.id}
              className="group hover:shadow-xl transition flex flex-col place-items-center text-center"
            >
              <img
                src={tech.image_Url}
                alt={tech.name}
                className="w-10 px-1 "
              />
              <p className="text-slate-200 text-xs  pt-2 opacity-0 group-hover:opacity-100 transition">
                {tech.name}
              </p>
            </div>
          ))}
      </div>
      {projects.features?.split("/").map((el: string, index: number) => {
        const [title, desc] = el.split("|").map((str) => str.trim());
        return (
          <div key={index} className="pt-2 text-xl ">
            • {title?.charAt(0).toUpperCase() + title.slice(1)}
            <div className="text-base pl-4">
              - {desc?.charAt(0).toLowerCase() + desc?.slice(1)}
            </div>
          </div>
        );
      })}
      <div className="flex gap-5">
        {projects.github && (
          <Link
            href={projects.github}
            className="px-4 py-4 md:px-10 md:py-5  rounded-lg bg-cyan-700 shadow-lg hover:bg-slate-600 hover:text-xl transition-all duration-300"
          >
            Github
          </Link>
        )}
        {projects.front && (
          <Link
            href={projects.front}
            className="px-4 py-4 md:px-10 md:py-5  rounded-lg bg-cyan-700 shadow-lg hover:bg-slate-600 hover:text-xl hover:font-bold transition-all duration-300"
          >
            Front end
          </Link>
        )}
        {projects.back && (
          <Link
            href={projects.back}
            className="px-4 py-4 md:px-10 md:py-5  rounded-lg bg-cyan-700 shadow-lg hover:bg-slate-600 hover:text-xl hover:font-bold transition-all duration-300"
          >
            Back end
          </Link>
        )}
      </div>
      {projects.video && (
        <div className="aspect-video max-w-xl mx-auto  max-sm:w-[300px] max-md:w-[350px] w-[1200px]">
          <iframe
            loading="lazy"
            className="w-full h-full"
            src={projects.video}
            allow="fullscreen"
          ></iframe>
        </div>
      )}
    </motion.div>
  );
}
