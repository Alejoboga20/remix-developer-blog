export const getPosts = async (): Promise<Post[]> => {
  return [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
    },
  ];
};

type Post = {
  title: string;
  slug: string;
};
