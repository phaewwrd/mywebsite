import { posts } from "@/prisma/seed";
import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  await prisma.blog.deleteMany();
  await prisma.blog.createMany({ data: posts });

  return NextResponse.json({ message: "DB seeded successfully" });
}
