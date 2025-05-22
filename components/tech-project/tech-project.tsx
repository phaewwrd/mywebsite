import { fecthTechStack, fetchProjects } from "@/libs/data";
import Link from "next/link";

export default async function TechProject({techstack, projects}: {techstack : any, projects: any}) {
  return (
    <div className="gap-2 grid grid-cols-6 m-5 p-6 border border-cyan-200 shadow-xl shadow-cyan-300 rounded-xl place-items-center text-center group-hover:m-1 transition-all duration-300">
      {techstack
        .filter((tech) => projects.tech_stack?.includes(tech.name || ""))
        .map((tech) => (
          <div className="group hover:shadow-xl ">
            <img
              key={tech.id}
              src={tech.image_Url || ""}
              alt={tech.name || undefined}
              className=" w-14 px-2"
            />
            <p className=" text-slate-200 text-sm pt-2 ">{tech.name}</p>
          </div>
        ))}
    </div>
  );
}
