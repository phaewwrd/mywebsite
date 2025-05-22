import AboutMePage from "@/components/aboutme/aboutme-page";
import Profile from "@/components/aboutme/profile";
import BlogSection from "@/components/blog/blog-section";
import HeroSection from "@/components/hero";
import ProjectSection from "@/components/tech-project/project-section";
import TechStack from "@/components/tech-project/techstack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phaewphan Wrd.",
};

export default function Home() {
  return (
    <div className="w-full ">
      <div className="flex justify-center mb-50 md:w-3/4 mt-20 w-full">
        <HeroSection />
      </div>
      <div id="aboutme"  className=" flex flex-col rounded-lg  sm:w-full ">
        <Profile />
      </div>
      <div className="  flex flex-col rounded-lg sm:w-full">
        <TechStack />
      </div>
      <div className="  flex flex-col rounded-lg sm:w-full ">
        <AboutMePage />
        <ProjectSection />
      </div>
      <div id="projects" className="">
      </div>
      <div id="blog">
        <BlogSection />
      </div>
    </div>
  );
}
