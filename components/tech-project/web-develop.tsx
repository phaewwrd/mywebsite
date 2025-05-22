import { fecthTechStack, fetchProjects } from "@/libs/data";

import ProjectCard from "./project-card";

export default async function WebDevelop() {
        const projects = await fetchProjects();
        const techstack = await fecthTechStack();
  


  return (
    <div className="tracking-widest bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 pt-20 flex flex-col gap-10 ">
      <div className="flex flex-col justify-center place-items-center text-center">
        <div
          className="text-[clamp(2rem,6vmin,10rem)] font-bold text-slate-300 flex gap-2 tracking-wider"
          style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
        >
          Web Development
        </div>
        <div className="text-xl w-3/4">
          "Designed and developed personal web projects to demonstrate problem-solving, user experience design, and end-to-end web development skills."
        </div>
      </div>
       <div className="p-10 grid md:grid-cols-2 gap-10 grid-cols-1">
      {projects.map((project: any, index: number) => (
        <ProjectCard
          key={project.id}
          techstack={techstack}
          projects={project}

        />
      ))}
    </div>
  
      </div>
    
     
  );
}
