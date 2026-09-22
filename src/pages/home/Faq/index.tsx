import clsx from "clsx";
import { Typography } from "@/components/typography";
import Button from "@/components/button";
import styles from "./index.module.css";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { useFaqContainer } from "./container";

export const Faq = () => {
  const t = useLocalizedText("home.faq");
  const { openKey, toggle, faqItemKeys } = useFaqContainer();

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

        <div className={styles.list}>
          {faqItemKeys.map((key) => {
            const isOpen = openKey === key;
            const panelId = `faq-panel-${key}`;
            const buttonId = `faq-button-${key}`;

            return (
              <div
                key={key}
                className={clsx(styles.item, isOpen && styles.itemOpen)}
              >
                <Button
                  type="button"
                  id={buttonId}
                  variant="text"
                  containerClassName={styles.summary}
                  labelClassName={styles.question}
                  label={t(`items.${key}.question`)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(key)}
                  rightIcon={
                    <span className={styles.chevron} aria-hidden>
                      +
                    </span>
                  }
                  rightIconClassName={styles.chevronWrap}
                />

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={clsx(styles.answerPanel, isOpen && styles.answerPanelOpen)}
                >
                  <div className={styles.answerInner}>
                    <Typography as="p" size={14} className={styles.answer}>
                      {t(`items.${key}.answer`)}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
