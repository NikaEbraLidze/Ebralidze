import { useParams } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import { useEffect, useState } from "react";
import type { BlogPost } from "@/data/blogData";
import { BlogPostView } from ".";

export const BlogPostContainer = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug);
    setPost(foundPost || null);
    setLoading(false);
  }, [slug]);

  return <BlogPostView post={post} loading={loading} />;
};
