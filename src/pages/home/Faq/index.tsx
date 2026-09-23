import { Typography } from "@/components/typography";
import { FaqAccordion, faqItemKeys } from "@/components/faq";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import styles from "./index.module.css";

export const Faq = () => {
  const t = useLocalizedText("home.faq");

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <header className={styles.header}>
          <Typography as="h2" size={32} weight="semibold" className={styles.heading}>
            {t("heading")}
            <span className={styles.accentMark} aria-hidden>
              .
            </span>
          </Typography>
        </header>

        <FaqAccordion itemKeys={faqItemKeys} idPrefix="faq" />
      </div>
    </section>
  );
};
