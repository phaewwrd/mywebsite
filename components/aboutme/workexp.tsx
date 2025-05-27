import { fetchExperience } from "@/libs/data";


export default async function WorkExp() {
  const expdata = await fetchExperience();
  return (
    <div className="">
      {expdata.map((exp) => (
        <div key={exp.id} className="grid grid-col-3 gap-5 my-10 mb-20">
          <div className="grid w-full p-5 border-1 border-slate-500 rounded-lg 
          hover:p-10 hover:border-cyan-200 hover:shadow-lg hover:shadow-amber-200 
          transition-all duration-300
          text-xl font-semibold tracking-[3px]
          ">
            <div className="text-2xl text-slate-100">{exp.job_title?.toUpperCase()}</div>
            <div className="text-slate-500">{exp.company}</div>
            <div className="text-end">{exp.years}</div>
          </div>
          <div className="flex flex-col gap-5 text-xl tracking-wider">
            {exp.description_?.split(" | ").map((line, idx) => (
              <p key={idx} className={idx === 0 ? "" : "before:mr-1"}>
                • {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
