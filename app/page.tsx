import AboutMePage from "@/components/aboutme/aboutme-page";
import Profile from "@/components/aboutme/profile";
import BlogSection from "@/components/blog/blog-section";
import HeroSection from "@/components/hero";
import ProjectSection from "@/components/tech-project/project-section";
import TechStack from "@/components/tech-project/techstack";

export default function Home() {
  return (
    <div className="w-full ">
      <div className="flex justify-center mb-50 sm:w-3/4">
        <HeroSection />
      </div>
      <div id="aboutme"  className="text-white flex flex-col rounded-lg  sm:w-full">
        <Profile />
      </div>
      <div className=" text-white flex flex-col rounded-lg sm:w-full">
        <TechStack />
      </div>
      <div className=" text-white flex flex-col rounded-lg sm:w-full ">
        <AboutMePage />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
    </div>
  );
}
