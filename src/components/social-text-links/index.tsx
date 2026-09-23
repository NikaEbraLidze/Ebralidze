import clsx from "clsx";
import Button from "@/components/button";
import { SOCIAL_LINKS } from "@/constants/social";
import type { SocialTextLinksProps } from "./index.types";
import styles from "./index.module.css";

export const SocialTextLinks = ({
  labels,
  className,
  linkClassName,
  labelClassName,
  dotClassName,
}: SocialTextLinksProps) => {
  return (
    <div className={clsx(styles.list, className)}>
      <Button
        variant="text"
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        label={labels.github}
        containerClassName={clsx(styles.link, linkClassName)}
        labelClassName={labelClassName}
      />
      <span className={clsx(styles.dot, dotClassName)} aria-hidden>
        ·
      </span>
      <Button
        variant="text"
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        label={labels.linkedin}
        containerClassName={clsx(styles.link, linkClassName)}
        labelClassName={labelClassName}
      />
    </div>
  );
};

export type { SocialTextLinksProps } from "./index.types";
