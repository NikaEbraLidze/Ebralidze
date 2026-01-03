import type { BlogPost } from "@/data/blogData";

export interface BlogPostProps {
  post: BlogPost | null;
  loading?: boolean;
}
