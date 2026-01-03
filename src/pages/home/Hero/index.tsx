import styles from "./index.module.css";
import { ProfilePhoto } from "@/assets";
import { Typography } from "@/components/typography";
import Button from "@/components/button";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { useScrollToSection } from "./container";

export const Hero = () => {
  const t = useLocalizedText("home.heroSection");
  const scrollToSection = useScrollToSection();

  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.profilePhotoWrapper}>
        <img
          src={ProfilePhoto}
          alt={t("profileAlt")}
          className={styles.profileImage}
        />
      </div>
      <div className={styles.content}>
        <Typography as="h1" className={styles.heading}>
          {t("greeting")} <br />
          <span className={styles.title}>{t("title")}</span>
        </Typography>
        <Typography as="p" className={styles.description}>
          {t("description.main")}
        </Typography>
        <Typography as="p" className={styles.description}>
          {t("description.background")}
        </Typography>
        <div className={styles.ctaGroup}>
          <Button
            variant="filled"
            label={t("cta.primary")}
            containerClassName={styles.ctaButton}
            labelClassName={styles.primaryButtonLabel}
            onClick={() => scrollToSection("contact")}
          />
          <Button
            variant="outline"
            label={t("cta.secondary")}
            containerClassName={styles.ctaButton}
            labelClassName={styles.secondaryButtonLabel}
            onClick={() => scrollToSection("my-work")}
          />
        </div>
      </div>
    </section>
  );
};
