'use client";'
import { fetchEducation } from "@/libs/data";
import EduCard from "@/components/aboutme/edu-card"



export default async function Education() {
  const eduData = await fetchEducation();
  const shootingStarStyle = {
    className: "shooting-star",
    style: [
      { top: "10%", animationDelay: "1s" },
      { top: "20%", animationDelay: "3s" },
      { top: "50%", animationDelay: "5s" },
      { top: "70%", animationDelay: "7s" },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 py-20 px-10 relative overflow-hidden">
      {shootingStarStyle.style.map((style, index) => (
        <div key={index} className={shootingStarStyle.className} style={{ ...style }} />
      ))}

      <div className=" relative">
        <div className="flex flex-col justify-center place-items-center ">
          <div
            className="text-[clamp(2rem,6vmin,10rem)] font-bold text-slate-300 flex gap-2 tracking-wider"
            style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
          >
            Education and Certificate
          </div>
          <div className="text-xl">Formal Education & Self-Directed Learning.</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 text-slate-300 relative overflow-hidden">
          {eduData?.map((edu, index) => (
            <EduCard key={edu.id} edu={edu} delay={index * 0.3} />
          ))}
        </div>
      </div>
    </div>
  );
}
