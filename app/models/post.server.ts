import { prisma } from "~/db.server";

export type { Post } from "@prisma/client";

export const getPosts = async () => {
  return prisma.post.findMany();
};

export const getPost = async (slug: string) => {
  return prisma.post.findUnique({ where: { slug } });
};
