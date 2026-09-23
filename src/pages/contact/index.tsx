import clsx from "clsx";
import { Typography } from "@/components/typography";
import Button from "@/components/button";
import { AvailabilityBadge } from "@/components/availability-badge";
import { FaqAccordion, contactFaqKeys } from "@/components/faq";
import { SocialIconLinks } from "@/components/social-icon-links";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { ContactHelmet } from "@/seo";
import type { ContactViewProps } from "./index.types";
import styles from "./index.module.css";

export const ContactView = ({ mailto, emailLabel }: ContactViewProps) => {
  const t = useLocalizedText("contact");

  return (
    <div className={styles.page}>
      <ContactHelmet />
      <div className={styles.inner}>
        <div className={styles.bento}>
          <div className={clsx(styles.tile, styles.tileIntro)}>
            <AvailabilityBadge label={t("availability.primary")} />

            <Typography as="h1" size={36} weight="semibold" className={styles.heading}>
              {t("heading")}
              <span className={styles.accentMark} aria-hidden>
                .
              </span>
            </Typography>

            <Typography as="p" size={16} className={styles.description}>
              {t("description")}
            </Typography>

            <Typography as="p" size={14} weight="medium" className={styles.availabilitySecondary}>
              {t("availability.secondary")}
            </Typography>
          </div>

          <div className={clsx(styles.tile, styles.tileDark, styles.tileEmail)}>
            <Typography as="p" size={13} weight="semibold" className={styles.tileLabelOnDark}>
              {t("email.label")}
            </Typography>
            <Typography as="p" size={16} weight="medium" className={styles.tileValueOnDark}>
              {t("email.hint")}
            </Typography>
            <Button
              variant="filled"
              href={mailto}
              label={emailLabel}
              containerClassName={styles.emailBtn}
            />
          </div>

          <div className={clsx(styles.tile, styles.tileLocation)}>
            <Typography as="p" size={13} weight="semibold" className={styles.tileLabel}>
              {t("location.label")}
            </Typography>
            <Typography as="p" size={20} weight="semibold" className={styles.tileValue}>
              {t("location.city")}
            </Typography>
            <Typography as="p" size={14} className={styles.timezone}>
              {t("location.timezoneLabel")}: {t("location.timezone")}
            </Typography>
          </div>

          <div className={clsx(styles.tile, styles.tileDark, styles.tileStatYears)}>
            <Typography as="p" weight="bold" className={styles.statValue}>
              {t("stats.yearsValue")}
              <span className={styles.statAccent}>+</span>
            </Typography>
            <Typography as="p" size={14} weight="medium" className={styles.statLabel}>
              {t("stats.yearsLabel")}
            </Typography>
          </div>

          <div className={clsx(styles.tile, styles.tileStatRoles)}>
            <Typography as="p" weight="bold" className={clsx(styles.statValue, styles.statValueLight)}>
              {t("stats.rolesValue")}
            </Typography>
            <Typography as="p" size={14} weight="medium" className={styles.statLabelLight}>
              {t("stats.rolesLabel")}
            </Typography>
          </div>

          <div className={clsx(styles.tile, styles.tileDark, styles.tileSocial)}>
            <Typography as="p" size={13} weight="semibold" className={styles.tileLabelOnDark}>
              {t("social.label")}
            </Typography>
            <SocialIconLinks
              variant="onDark"
              networks={["github", "linkedin", "facebook"]}
              labels={{
                github: t("social.github"),
                linkedin: t("social.linkedin"),
                facebook: t("social.facebook"),
              }}
            />
          </div>

          <div className={clsx(styles.tile, styles.tileFaq)}>
            <Typography as="h2" size={20} weight="semibold" className={styles.faqHeading}>
              {t("faq.heading")}
              <span className={styles.accentMark} aria-hidden>
                .
              </span>
            </Typography>

            <FaqAccordion
              itemKeys={contactFaqKeys}
              idPrefix="contact-faq"
              compact
              className={styles.faqList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
