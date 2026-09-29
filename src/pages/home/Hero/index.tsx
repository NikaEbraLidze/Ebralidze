import styles from "./index.module.css";
import { ProfilePhoto } from "@/assets";
import { Typography } from "@/components/typography";
import Button from "@/components/button";
import { AvailabilityBadge } from "@/components/availability-badge";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { useNavigate } from "react-router-dom";
import { useScrollToSection } from "./container";
import { BuddyContainer } from "./Buddy/container";

export const Hero = () => {
  const t = useLocalizedText("home.heroSection");
  const navigate = useNavigate();
  const scrollToSection = useScrollToSection();

  return (
    <section className={styles.section} id="hero">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <AvailabilityBadge label={t("badge")} className={styles.badge} />

          <Typography as="p" size={16} weight="medium" className={styles.greeting}>
            {t("greeting")}
          </Typography>

          <Typography as="h1" weight="bold" className={styles.headline}>
            {t("name")}
            <span className={styles.accentMark} aria-hidden>
              .
            </span>
          </Typography>

          <Typography as="p" size={16} weight="medium" className={styles.role}>
            {t("title")}
          </Typography>

          <Typography as="p" size={16} className={styles.description}>
            {t("description.main")}
          </Typography>

          <div className={styles.ctaGroup}>
            <Button
              variant="filled"
              label={t("cta.primary")}
              containerClassName={styles.ctaFilled}
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
            <Button
              variant="outline"
              label={t("cta.secondary")}
              containerClassName={styles.ctaOutline}
              onClick={() => scrollToSection("my-work")}
            />
          </div>
        </div>

        <div className={styles.bento}>
          <div className={styles.tileBuddy}>
            <BuddyContainer />
          </div>

          <div className={styles.tilePortrait}>
            <img
              src={ProfilePhoto}
              alt={t("profileAlt")}
              className={styles.portraitImage}
              width={480}
              height={640}
              loading="eager"
            />
          </div>

          <div className={styles.tileStat}>
            <Typography as="p" weight="bold" className={styles.statValue}>
              {t("bento.statValue")}
              <span className={styles.statAccent}>+</span>
            </Typography>
            <Typography as="p" size={14} weight="medium" className={styles.statLabel}>
              {t("bento.statLabel")}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};
