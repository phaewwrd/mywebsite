'use server';

import { redirect } from 'next/navigation';
import prisma from "@/libs/prisma";

export async function fecthBlog() {
  try {
    const allBlogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });
    return allBlogs;
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return [];
  }
}

export async function fetchEducation() {
  try {
    const education = await prisma.education.findMany({
      orderBy: { years: "desc" },
    });

    return education;
  } catch (error) {
    console.error("Failed to fetch education:", error);
    return [];
  }
}

export async function fetchExperience() {
  try {
    const workexp = await prisma.workExp.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return workexp;
  } catch (error) {
    console.error("Failed to fetch experience:", error);
    return [];
  }
}

export async function fecthTechStack() {
  try {
    const techstack = await prisma.tech_stack.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return techstack;
  } catch (error) {
    console.error("Failed to fetch tech stack:", error);
    return [];
  }
}

export async function fetchProjects() {
  try {
    const projects = await prisma.projects.findMany({
      orderBy: { id: "asc" },
    });

    return projects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}




export async function onSubmit(prevState: any, formData: FormData) {
  try {
    await prisma.contact.create({
      data: {
        topic: formData.get("topic") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit:", error);
    return { success: false, error: "Submission failed." };
  }
}
