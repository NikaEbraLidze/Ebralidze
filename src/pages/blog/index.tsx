import { Link } from "react-router-dom";
import { Typography } from "@/components/typography";
import type { BlogListProps, BlogCardProps } from "./index.types";
import styles from "./index.module.css";

const BlogCard = ({ post }: BlogCardProps) => (
  <article className={styles.card}>
    <Link to={`/blog/${post.slug}`} className={styles.imageWrapper}>
      <img src={post.coverImage} alt={post.title} className={styles.image} />
    </Link>
    <div className={styles.content}>
      <div className={styles.meta}>
        <Typography as="span" size={12} weight="light">
          {post.date}
        </Typography>
        <Typography as="span" size={12} weight="light">
          {post.readTime}
        </Typography>
      </div>

      <Link to={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
        <Typography as="h3" weight="medium" className={styles.cardTitle}>
          {post.title}
        </Typography>
      </Link>

      <Typography as="p" className={styles.excerpt}>
        {post.excerpt}
      </Typography>

      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>

      <Link to={`/blog/${post.slug}`} className={styles.readMore}>
        see all &rarr;
      </Link>
    </div>
  </article>
);

export const BlogList = ({ posts }: BlogListProps) => {
  const hasPosts = posts && posts.length > 0;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Typography as="h2" className={styles.heading}>
          blog
        </Typography>
        <Typography
          as="p"
          size={16}
          weight="light"
          className={styles.description}
        >
          News, tutorials and technology reviews
        </Typography>
      </div>

      {hasPosts ? (
        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <Typography as="p" size={18} weight="light" align="center">
            No blog posts available at the moment.
          </Typography>
        </div>
      )}
    </section>
  );
};
