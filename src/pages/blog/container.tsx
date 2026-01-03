import { blogPosts } from "@/data/blogData";
import { BlogList } from ".";

export const BlogContainer = () => {
  return <BlogList posts={blogPosts} />;
};
