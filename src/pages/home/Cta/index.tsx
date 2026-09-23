import { Typography } from "@/components/typography";
import Button from "@/components/button";
import { SocialTextLinks } from "@/components/social-text-links";
import styles from "./index.module.css";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { useCtaContainer } from "./container";

export const Cta = () => {
  const t = useLocalizedText("home.cta");
  const { mailto, goToContact } = useCtaContainer();

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.card}>
          <Typography as="h2" size={36} weight="semibold" className={styles.heading}>
            {t("heading")}
            <span className={styles.accentMark} aria-hidden>
              .
            </span>
          </Typography>

          <Typography as="p" size={16} className={styles.description}>
            {t("description")}
          </Typography>

          <div className={styles.actions}>
            <div className={styles.ctaButtons}>
              <Button
                variant="filled"
                href={mailto}
                label={t("emailLabel")}
                containerClassName={styles.emailBtn}
              />
              <Button
                variant="outline"
                label={t("buttonLabel")}
                containerClassName={styles.contactBtn}
                onClick={goToContact}
              />
            </div>

            <SocialTextLinks
              labels={{
                github: t("social.github"),
                linkedin: t("social.linkedin"),
              }}
              linkClassName={styles.socialLink}
              labelClassName={styles.socialLinkLabel}
              dotClassName={styles.socialDot}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
