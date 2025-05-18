'use client";'
import { fecthBlog } from "@/libs/data";

export default async function BlogSection() {
  const allBlogs = await fecthBlog();

 

  return (
   
      <div className="p-5 rounded-md  ">
          {allBlogs.map((blog) => (
            <div key={blog.id} className="flex flex-col gap-2 ">
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
       
      
    
  );
}
