import Button from "../button";
import { Typography } from "../typography";
import { useFooterContainer } from "./container";
import styles from "./index.module.css";

export const Footer = () => {
  const { t, openLink, socialLinks } = useFooterContainer();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWraper}>
        <div className={styles.links}>
          <div className={styles.socMedia}>
            <Button
              label={t("socMedia.linkedin")}
              variant="text"
              labelClassName={styles.footerText}
              onClick={() => openLink(socialLinks.linkedin)}
            />
            <Button
              label={t("socMedia.gmail")}
              variant="text"
              labelClassName={styles.footerText}
              onClick={() => openLink(socialLinks.gmail)}
            />
            <Button
              label={t("socMedia.github")}
              variant="text"
              labelClassName={styles.footerText}
              onClick={() => openLink(socialLinks.github)}
            />
            <Button
              label={t("socMedia.facebook")}
              variant="text"
              labelClassName={styles.footerText}
              onClick={() => openLink(socialLinks.facebook)}
            />
          </div>

          <Typography as="p" className={styles.footerText}>
            {t("copyright")}
          </Typography>
        </div>

        <div className={styles.signature}>
          <Typography as="p" className={styles.footerText}>
            {t("signature.design")}
          </Typography>
          <Typography as="p" className={styles.footerText}>
            {t("signature.updated")}
          </Typography>
        </div>
      </div>
    </footer>
  );
};
