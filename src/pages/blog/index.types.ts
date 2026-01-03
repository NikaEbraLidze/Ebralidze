import type { BlogPost } from "@/data/blogData";

export interface BlogListProps {
  posts: BlogPost[];
}

export interface BlogCardProps {
  post: BlogPost;
}
