import { Typography } from "@/components/typography";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { tourlify, earthVoyage } from "@/assets";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";

export const ExploreMyWork = () => {
  const t = useLocalizedText("home.exploreWork");

  return (
    <section className={styles.section} id="my-work">
      <div className={styles.header}>
        <Typography as="h2" className={styles.heading}>
          {t("heading")}
        </Typography>
        <Typography as="p" className={styles.subtitle}>
          {t("description")}
        </Typography>
      </div>

      <div className={styles.projectsGrid}>
        <div className={styles.projectCard}>
          <div className={styles.imageWrapper}>
            <img
              src={earthVoyage}
              alt={t("projects.earthVoyage.imageAlt")}
              className={styles.projectImage}
            />
          </div>
          <div className={styles.projectContent}>
            <Typography as="h3" className={styles.projectTitle}>
              {t("projects.earthVoyage.title")}{" "}
              <Link to="https://earthvoyage.us/" className={styles.projectLink}>
                {t("projects.earthVoyage.url")}
              </Link>
            </Typography>

            <div className={styles.projectMeta}>
              <Typography as="p" className={styles.projectRole}>
                {t("projects.earthVoyage.role")}
              </Typography>
              <Typography as="p" className={styles.projectPeriod}>
                {t("projects.earthVoyage.period")}
              </Typography>
            </div>

            <Typography as="p" className={styles.projectDescription}>
              {t("projects.earthVoyage.description")}
            </Typography>
          </div>
        </div>

        <div className={styles.projectCard}>
          <div className={styles.imageWrapper}>
            <img
              src={tourlify}
              alt={t("projects.tourlify.imageAlt")}
              className={styles.projectImage}
            />
          </div>
          <div className={styles.projectContent}>
            <Typography as="h3" className={styles.projectTitle}>
              {t("projects.tourlify.title")}
            </Typography>

            <div className={styles.projectMeta}>
              <Typography as="p" className={styles.projectRole}>
                {t("projects.tourlify.role")}
              </Typography>
              <Typography as="p" className={styles.projectPeriod}>
                {t("projects.tourlify.period")}
              </Typography>
            </div>

            <Typography as="p" className={styles.projectDescription}>
              {t("projects.tourlify.description")}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};
