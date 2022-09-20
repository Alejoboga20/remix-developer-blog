import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

const Posts = () => {
  const { posts } = useLoaderData() as unknown as LoaderData;

  return (
    <main>
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
    </main>
  );
};

export default Posts;

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};
