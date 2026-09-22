import { Link } from "react-router-dom";
import clsx from "clsx";
import { Typography } from "@/components/typography";
import styles from "./index.module.css";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { useLang } from "@/components/locales";
import { projectsData } from "./data";
import type { IProjectData, ProjectSpan } from "./index.types";

const spanClass: Record<ProjectSpan, string> = {
  hero: styles.spanHero,
  tall: styles.spanTall,
  square: styles.spanSquare,
};

const ProjectTile = ({
  item,
  title,
  tagline,
  description,
  imageAlt,
  highlights,
}: {
  item: IProjectData;
  title: string;
  tagline: string;
  description: string;
  imageAlt: string;
  highlights: string[];
}) => {
  const showDescription = item.span === "hero";
  const highlightLimit = item.span === "hero" ? 2 : item.span === "tall" ? 1 : 0;
  const visibleHighlights = highlights.slice(0, highlightLimit);

  return (
    <a
      href={item.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(styles.tile, spanClass[item.span])}
      aria-label={`${title}: ${tagline}`}
    >
      <div className={styles.tileBody}>
        <div className={styles.tileHeader}>
          <Typography as="h3" size={item.span === "square" ? 16 : 20} weight="semibold" className={styles.title}>
            {title}
            <span className={styles.externalHint} aria-hidden>
              ↗
            </span>
          </Typography>
          <Typography as="p" size={13} weight="medium" className={styles.tagline}>
            {tagline}
          </Typography>
        </div>

        {showDescription && (
          <Typography as="p" size={14} className={styles.description}>
            {description}
          </Typography>
        )}

        {visibleHighlights.length > 0 && (
          <ul className={styles.highlights}>
            {visibleHighlights.map((line) => (
              <li key={line} className={styles.highlight}>
                <span className={styles.dot} aria-hidden />
                <Typography as="span" size={13} className={styles.highlightText}>
                  {line}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.mediaSlot}>
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={imageAlt}
            className={styles.media}
            loading="lazy"
          />
        ) : (
          <div className={styles.mediaMark} aria-hidden>
            <Typography as="span" size={item.span === "hero" ? 32 : 24} weight="semibold" className={styles.mark}>
              {item.mark}
            </Typography>
          </div>
        )}
      </div>
    </a>
  );
};

export const FeaturedProjects = () => {
  const t = useLocalizedText("home.featuredProjects");
  const { t: locale } = useLang();

  return (
    <section className={styles.section} id="featured-projects">
      <div className={styles.inner}>
        <header className={styles.header}>
          <Typography as="h2" size={32} weight="semibold" className={styles.heading}>
            {t("heading")}
            <span className={styles.accentMark} aria-hidden>
              .
            </span>
          </Typography>
          <Link to="/projects" className={styles.seeAll}>
            <Typography as="span" size={14} weight="medium">
              {t("seeAll")}
            </Typography>
            <span className={styles.seeAllHint} aria-hidden>
              →
            </span>
          </Link>
        </header>

        <div className={styles.bento}>
          {projectsData.map((item) => {
            const projectLocale =
              locale.home.featuredProjects.projects[
                item.key as keyof typeof locale.home.featuredProjects.projects
              ];
            const highlights =
              "highlights" in projectLocale ? projectLocale.highlights : [];

            return (
              <ProjectTile
                key={item.key}
                item={item}
                title={t(`projects.${item.key}.title`)}
                tagline={t(`projects.${item.key}.tagline`)}
                description={t(`projects.${item.key}.description`)}
                imageAlt={t(`projects.${item.key}.imageAlt`)}
                highlights={highlights}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
