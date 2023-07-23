import { getAllPosts } from "@/app/_lib/posts";

async function getPost() {
  return getAllPosts();
}

export default async function Posts() {
  const data = await getPost();

  console.log(data, 'hihi')
  return <div>Posts</div>;
}
