import { Typography } from "@/components/typography";
import Button from "@/components/button";
import styles from "./index.module.css";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { useCtaContainer } from "./container";

export const Cta = () => {
  const t = useLocalizedText("home.cta");
  const { mailto, socialLinks } = useCtaContainer();

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
            <Button
              variant="filled"
              href={mailto}
              label={t("emailLabel")}
              containerClassName={styles.emailBtn}
            />

            <div className={styles.socials}>
              <Button
                variant="text"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                label={t("social.github")}
                containerClassName={styles.socialLink}
                labelClassName={styles.socialLinkLabel}
              />
              <span className={styles.socialDot} aria-hidden>
                ·
              </span>
              <Button
                variant="text"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                label={t("social.linkedin")}
                containerClassName={styles.socialLink}
                labelClassName={styles.socialLinkLabel}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
