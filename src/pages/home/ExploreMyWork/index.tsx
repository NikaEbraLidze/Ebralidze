import { Typography } from "@/components/typography";
import styles from "./index.module.css";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { useLang } from "@/components/locales";
import { experienceData } from "./data";

export const ExploreMyWork = () => {
  const t = useLocalizedText("home.exploreWork");
  const { t: locale } = useLang();

  return (
    <section className={styles.section} id="my-work">
      <div className={styles.inner}>
        <header className={styles.header}>
          <Typography as="h2" size={32} weight="semibold" className={styles.heading}>
            {t("heading")}
            <span className={styles.accentMark} aria-hidden>
              .
            </span>
          </Typography>
          <Typography as="p" size={14} weight="medium" className={styles.dateRange}>
            {t("dateRange")}
          </Typography>
        </header>

        <ol className={styles.timeline}>
          {experienceData.map((item) => {
            const projectLocale =
              locale.home.exploreWork.projects[
                item.key as keyof typeof locale.home.exploreWork.projects
              ];
            const highlights =
              "highlights" in projectLocale ? projectLocale.highlights : [];

            return (
              <li key={item.key} className={styles.item}>
                <div className={styles.rail} aria-hidden>
                  <span className={styles.bullet} />
                </div>

                <div className={styles.content}>
                  <div className={styles.metaRow}>
                    <img
                      src={item.imageUrl}
                      alt={t(`projects.${item.key}.imageAlt`)}
                      className={styles.logo}
                      width={160}
                      height={90}
                      loading="lazy"
                    />
                    <div className={styles.metaText}>
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.companyLink}
                        >
                          <Typography as="p" size={14} weight="semibold" className={styles.company}>
                            {t(`projects.${item.key}.title`)}
                          </Typography>
                          <span className={styles.externalHint} aria-hidden>
                            ↗
                          </span>
                        </a>
                      ) : (
                        <Typography as="p" size={14} weight="semibold" className={styles.company}>
                          {t(`projects.${item.key}.title`)}
                        </Typography>
                      )}
                      <Typography as="h3" size={20} weight="semibold" className={styles.role}>
                        {t(`projects.${item.key}.role`)}
                      </Typography>
                      <Typography as="p" size={14} className={styles.period}>
                        {t(`projects.${item.key}.period`)}
                      </Typography>
                    </div>
                  </div>

                  <Typography as="p" size={16} className={styles.description}>
                    {t(`projects.${item.key}.description`)}
                  </Typography>

                  {highlights.length > 0 && (
                    <ul className={styles.highlights}>
                      {highlights.map((line) => (
                        <li key={line} className={styles.highlight}>
                          <span className={styles.dot} aria-hidden />
                          <Typography as="span" size={14} className={styles.highlightText}>
                            {line}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
