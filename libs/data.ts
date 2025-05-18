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
  const education = prisma.education.findMany();
  return education;
}

export async function fetchExperience() {
  const workexp = await prisma.workExp.findMany();
  return workexp;
}
