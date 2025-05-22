import { fecthTechStack, fetchProjects } from "@/libs/data";
import Link from "next/link";

export default async function Projects() {
      const projects = await fetchProjects();
      const techstack = await fecthTechStack();
  return (
 <div className="grid">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="group text-xl text-slate-300 m-10 grid grid-cols-1 place-items-center 
              max-sm:flex-col max-sm:gap-5 max-sm:mx-auto
               border-slate-600 border rounded-lg p-10"
            >
              <div className="p-10 flex flex-col gap-5
              ">
                <div className="text-[clamp(2rem,6vmin,6rem)] tracking-[3px] font-bold text-cyan-600
               ">
                  {project.name}
                </div>

                <div className="text-2xl">{project.description}</div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="gap-2 grid grid-cols-6 m-5 p-6 border border-cyan-200 shadow-xl shadow-cyan-300 rounded-xl place-items-center text-center group-hover:m-1 transition-all duration-300">
                    {techstack
                      .filter((tech) =>
                        project.tech_stack?.includes(tech.name || "")
                      )
                      .map((tech) => (
                        <div className="group hover:shadow-xl ">
                          <img
                            key={tech.id}
                            src={tech.image_Url || ""}
                            alt={tech.name || undefined}
                            className=" w-14 px-2"
                          />
                          <p className=" text-slate-200 text-sm pt-2 ">
                            {tech.name}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div>
                    {project.features?.split(".").map((el, index) => (
                      <div key={index} className=" text-xl pt-2">
                        • {el}
                      </div>
                    ))}
                    <div className="cursor-pointer  text-slate-300 px-4 py-2 rounded-md flex gap-2 justify-evenly">
                  <Link
                    href={project.frontend_link ? project.frontend_link : ""}
                    className="custom-link"
                  >
                    Github / Front end
                  </Link>
                  <Link
                    href={project.backend_link ? project.backend_link : ""}
                    className="custom-link"
                  >
                    Github / Back end
                  </Link>
                </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video max-w-xl mx-auto w-[2200px]  max-sm:w-[350px] max-md:w-[400px]">
                <iframe
                  loading="lazy"
                  className="w-full h-full"
                  src={project.video}
                  allow="fullscreen"
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>  )
}
