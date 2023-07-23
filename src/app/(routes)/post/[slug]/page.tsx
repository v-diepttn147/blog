// import PostBody from "@/common/components/PostBody";
// import markdownToHtml from "@/common/helper/markdownToHtml";
// import { getAllPosts, getPostBySlug } from "@/lib/posts";
//
// async function getPost(slug: string) {
//   const post = getPostBySlug(slug, [
//     "title",
//     "date",
//     "slug",
//     "author",
//     "content",
//     "ogImage",
//     "coverImage",
//   ]);
//   const content = await markdownToHtml(post.content || "");
//   return {...post, content};
// }
//
// export async function generateStaticParams() {
//   const posts = getAllPosts(["slug"]);
//  
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }
//
// export default async function PostPage({
//   params: { slug },
// }: {
//   params: { slug: string };
// }) {
//   const post = await getPost(slug);
//
//   return <div><PostBody content={post.content}/></div>;
// }
