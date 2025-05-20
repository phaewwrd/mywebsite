'use client";'
import { fecthBlog } from "@/libs/data";
import { div } from "framer-motion/client";

export default async function BlogSection() {
  const allBlogs = await fecthBlog();

 

  return (
   <div  className="flex flex-col place-items-center m-20 max-sm:p-5">
    <div  className="text-[clamp(2rem,8vmin,10rem)] font-extrabold leading-none text-slate-100"
         style={{
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
         }}>BLOG</div>
      <div  className="p-5 rounded-md grid grid-cols-3 gap-10" >
          {allBlogs.map((blog) => (
            <div key={blog.id} className=" border-2 border-slate-500 rounded-lg p-5">
              <h1 className="text-2xl font-bold text-cyan-500">{blog.title}</h1>
              <p className="text-sm text-gray-900">
                {new Date(blog.createdAt).toLocaleString("en-EN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          ))}
        </div>
       </div>
      
    
  );
}
