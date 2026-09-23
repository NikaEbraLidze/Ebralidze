import clsx from "clsx";
import { Typography } from "@/components/typography";
import Button from "@/components/button";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { useFaqAccordion } from "./container";
import type { FaqAccordionProps } from "./index.types";
import styles from "./index.module.css";

export const FaqAccordion = ({
  itemKeys,
  idPrefix = "faq",
  className,
  compact = false,
}: FaqAccordionProps) => {
  const t = useLocalizedText("home.faq");
  const { openKey, toggle } = useFaqAccordion();

  return (
    <div className={clsx(styles.list, className)}>
      {itemKeys.map((key) => {
        const isOpen = openKey === key;
        const panelId = `${idPrefix}-panel-${key}`;
        const buttonId = `${idPrefix}-button-${key}`;

        return (
          <div key={key} className={clsx(styles.item, isOpen && styles.itemOpen)}>
            <Button
              type="button"
              id={buttonId}
              variant="text"
              containerClassName={styles.summary}
              labelClassName={clsx(styles.question, compact && styles.questionCompact)}
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
              aria-hidden={!isOpen}
              inert={!isOpen}
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
  );
};

export { faqItemKeys, contactFaqKeys } from "./data";
export type { FaqItemKey, ContactFaqKey } from "./data";
export type { FaqAccordionProps } from "./index.types";
