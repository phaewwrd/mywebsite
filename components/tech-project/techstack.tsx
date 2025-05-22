import { fecthTechStack } from "@/libs/data";

export default async function TechStack() {
  const techstack = await fecthTechStack();

  const firstRow = techstack.slice(0, Math.ceil(techstack.length / 2));
  const secondRow = techstack.slice(Math.ceil(techstack.length / 2));

  const duplicated = [...firstRow, ...firstRow];
  const duplicated2 = [...secondRow, ...secondRow];
  return (
    <div className="  bg-gradient-to-b from-[#0f172a] via-[#475569a9] to-[rgba(254,243,199,0.49)] py-10 overflow-hidden max-w-screen">
      <div className="flex animate-marquee space-x-10 w-max">
        {duplicated.map((tech) => (
          <div
            key={tech.id+Math.random()}
            className="group flex flex-col items-center p-4 hover:scale-110 transition-transform"
          >
            {tech.image_Url ? (
              <img
                src={tech.image_Url}
                alt={tech.name || undefined}
                className="w-14"
              />
            ) : (
              <div className="text-slate-200 text-xl">{tech.name}</div>
            )}
            <div className="opacity-0 group-hover:opacity-100 text-sm text-white mt-2 transition-opacity duration-300">
              {tech.name}
            </div>
          </div>
        ))}
      </div>

      <div className="flex animate-marquee-reverse space-x-10 w-max">
        {duplicated2.map((tech) => (
          <div
            key={tech.id+Math.random()}
            className="group flex flex-col items-center p-4 hover:scale-110 transition-transform"
          >
            {tech.image_Url ? (
              <img
                src={tech.image_Url}
                alt={tech.name || undefined}
                className="w-14"
              />
            ) : (
              <div className="text-slate-200 text-xl">{tech.name}</div>
            )}
            <div className="opacity-0 group-hover:opacity-100 text-sm text-white mt-2 transition-opacity duration-300">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
