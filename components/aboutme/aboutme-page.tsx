import React from "react";
import WorkExp from "./workexp";
import Education from "./education";
import Profile from "./profile";

export default function AboutMePage() {
  return (
    <div className="max-w-screen ">     
      <div  className="p-20 bg-slate-800 rounded-xl text-slate-300">
        <div className="text-[clamp(2rem,4vmin,10rem)] font-extrabold text-center">
          Work Experience
        </div>
        <div className="text-2xl text-center ">Work Experience</div>
        <WorkExp />
      </div>

      <Education />
    </div>
  );
}
