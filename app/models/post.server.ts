import { prisma } from "~/db.server";

export const getPosts = async (): Promise<Post[]> => {
  return prisma.post.findMany();
};

type Post = {
  title: string;
  slug: string;
};
