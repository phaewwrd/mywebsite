import React from 'react'
import PetsHome from './pets-home'

export default function ProjectSection() {
  return (
    <div>
        <div className="flex flex-col justify-center place-items-center ">
          <div
            className="text-[clamp(2rem,6vmin,10rem)] font-bold text-slate-300 flex gap-2 tracking-wider"
            style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
          >
           Projects
          </div>
          <div className="text-xl">"Formal Education & Self-Directed Learning."</div>
        </div>
        <PetsHome/>
    </div>
  )
}
