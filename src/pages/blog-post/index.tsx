import { Link } from "react-router-dom";
import { Typography } from "@/components/typography";
import type { BlogPostProps } from "./index.types";
import styles from "./index.module.css";

export const BlogPostView = ({ post, loading }: BlogPostProps) => {
  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (!post) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <Typography as="h2">პოსტი არ მოიძებნა</Typography>
          <Link to="/blog" className={styles.backLink}>
            უკან დაბრუნება
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <article className={styles.article}>
        <Link to="/blog" className={styles.backLink}>
          &larr; ბლოგზე დაბრუნება
        </Link>

        <header className={styles.header}>
          <div className={styles.meta}>
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <Typography as="h1" weight="medium" className={styles.title}>
            {post.title}
          </Typography>
          <div className={styles.tags}>
            {post.tags.map((tag) => `#${tag} `)}
          </div>
        </header>

        <div className={styles.coverImageWrapper}>
          <img
            src={post.coverImage}
            alt={post.title}
            className={styles.coverImage}
          />
        </div>

        {/* ყურადღება: dangerouslySetInnerHTML გამოიყენება მხოლოდ მაშინ, 
          თუ კონტენტი სანდოა (ჩვენი დაწერილია).
        */}
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </section>
  );
};
