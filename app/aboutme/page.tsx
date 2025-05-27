import Education from "@/components/aboutme/education";
import WorkExp from "@/components/aboutme/workexp";

export default async function AboutMe() {
  return (
    <div className="m-20 flex flex-col text-lg justify-center place-items-center gap-5 text-white">
      <div className="flex flex-col gap-10 font-semibold w-250  p-15 max-sm:w-90 max-sm:p-5 max-md:w-150">
        <div className="fles fles-col gap-10">
          <div className="text-2xl">Phaewphan Woradanuphan</div>
          <div className="text-xl font-light">bkk, Thailand</div>
        </div>

        <div className="text-4xl justify-end flex gap-5 place-items-center">
          Work Experience
        </div>

        <WorkExp />
      </div>
      <Education />
    </div>
  );
}
