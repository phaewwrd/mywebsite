'use client'
import { useState } from 'react';

export default function HeroSection() {
    const [hovered, setHovered] = useState(false);
  
  return (
      <div className="bg-amber-200sm:row-start-1">
      <h1
        className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
        style={{
          textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
        }}
         onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="block text-slate-300 ">Phaewphan</span>
        <span className="-mt-[.2em] block text-slate-500  ">Wrd.</span>
      </h1>
      <p className=" text-amber-200 pl-5 text-3xl font-bold uppercase tracking-[.2em] animate-pulse ">
      Full Stack Designer & Developer
      </p>
      </div>
    
  );
}
