import prisma from "@/libs/prisma";

export async function fecthBlog() {
  return prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 5,
  });
}

export async function fetchEducation() {
  try {
    const education = await prisma.education.findMany({
      orderBy: { years: 'desc' },
    });

    return education;
  } catch (error) {
    console.error('Failed to fetch education:', error);
    return [];
  }
}

export async function fetchExperience() {
  const workexp = await prisma.workExp.findMany({
    orderBy:{
      id: "asc"
    }
  });
  return workexp;
}

export async function fecthTechStack() {
  const techstack = await prisma.tech_stack.findMany({
    orderBy: {
      id: "asc",
    },
  });
  return techstack;
}