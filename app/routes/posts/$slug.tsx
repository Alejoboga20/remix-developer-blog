import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import invariant from "tiny-invariant";

import type { Post } from "~/models/post.server";
import { getPost } from "../../models/post.server";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);

  return json<LoaderData>({ post, html });
};

const PostSlug = () => {
  const { post, html } = useLoaderData() as unknown as LoaderData;

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        Some Post: {post.slug}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
};

export default PostSlug;

type LoaderData = { post: Post; html: string };
