import { fecthBlog } from '@/libs/data'
import Link from 'next/link'
import React from 'react'

export default async function Blog() {
  const allBlogs = await fecthBlog()

  return (
    <div className="p-5 rounded-md shadow-md ">
      <p className="text-xl">BLOG</p>
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
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
