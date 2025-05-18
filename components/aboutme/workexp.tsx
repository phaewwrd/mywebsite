import { fetchExperience } from '@/libs/data';

// type WorkExp = {
//     id: number;
//     org_name: string;
//     job_title: string;
//     years: string;
//     description: string;
//     company: string;
// }

export default async function WorkExp() {
    const expdata = await fetchExperience();
  return (
    <div>
      {expdata.map((exp) => (
        <div
          key={exp.id}
          className="flex flex-col gap-2 font-medium max-sm:w-70 max-sm:mr-5 max-sm:ml-5 max-md:w-100"
        >
          <div>{exp.job_title}</div>
          <div>{exp.company}</div>
          <div>{exp.years}</div>
          <div>{exp.description_}</div>
        </div>
      ))}
    </div>
  )
}
