import Image from "next/image";

export default function UxUi() {
  return (
    <div className="flex flex-col justify-center place-items-center gap-10">
      <div
        className="text-[clamp(2rem,6vmin,10rem)] font-bold text-slate-300 flex gap-2 tracking-wider"
        style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
      >
        UX UI Design{" "}
      </div>
      <div className="text-xl">
        "Formal Education & Self-Directed Learning."
      </div>
      <div className="flex gap-10">
        <Image src='/petshomescreen.png' width={600} height={250} alt="petshomescreen"/>
         <div className="aspect-video max-w-xl mx-auto w-[2200px]  max-sm:w-[350px] max-md:w-[200px]">
          <iframe
            loading="lazy"
            className="w-full h-full"
            src="https://www.canva.com/design/DAGkIUS92Aw/F2u8hy708wL6AEDsnmWPRA/watch?embed"
            allow="fullscreen"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
}
