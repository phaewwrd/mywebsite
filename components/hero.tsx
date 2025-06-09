

export default function HeroSection() {
  
  return (
      <div className="m-5 md:m-20 xl:m-0">
      <h1
        className="mb-8 text-[clamp(3rem,10vmin,12rem)] xl:text-[clamp(2rem,16vmin,20rem)] font-extrabold leading-none tracking-tighter "
        style={{
          textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
        }}

      >
        <span className="block text-slate-300 ">Phaewphan</span>
        <span className="-mt-[.2em] block text-slate-500  ">Wrd.</span>
      </h1>
      <p className=" text-amber-200 font-bold uppercase tracking-[.2em] animate-pulse  text-[clamp(1rem,4vmin,5rem)] ">
      Full Stack Designer & Developer
      </p>
      <div className="hover:border-b-2 border-cyan-200 transition-all duration-300 w-30">
      <a href="/Phaewphan_Wrd.pdf" download
      className="">Download CV</a>
      </div>
      </div>
    
  );
}
