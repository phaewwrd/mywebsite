import { fetchEducation } from '@/libs/data'

export default async function Education() {
      const eduData = await fetchEducation()

  return (
     <div className="flex flex-col gap-5 p-20 place-items-center max-sm:p-5">
        <div className="text-center  mb-10 ">
          <div className="text-2xl font-bold flex justify-center place-items-center gap-5">
            Education and Training
         
          </div>
          <div className="mr-60 ml-60 mt-2 max-sm:w-70 max-sm:mr-5 max-sm:ml-5 max-md:w-100">
            "Formal Education & Self-Directed Learning."
          </div>
        </div>

        <div>
          {eduData.map((edu) => (
            <div
              key={edu.id}
              className="flex flex-col gap-2 font-medium max-sm:w-70 max-sm:mr-5 max-sm:ml-5 max-md:w-100"
            >
              <div>{edu.org_name}</div>
              <div>{edu.subject}</div>
              <div>{edu.years}</div>
            </div>
          ))}
        </div>
       
      </div>
  )
}
