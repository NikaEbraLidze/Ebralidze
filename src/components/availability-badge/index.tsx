import clsx from "clsx";
import { Typography } from "@/components/typography";
import type { AvailabilityBadgeProps } from "./index.types";
import styles from "./index.module.css";

export const AvailabilityBadge = ({ label, className }: AvailabilityBadgeProps) => {
  return (
    <div className={clsx(styles.badge, className)}>
      <span className={styles.dot} aria-hidden />
      <Typography as="span" size={13} weight="medium" className={styles.label}>
        {label}
      </Typography>
    </div>
  );
};

export type { AvailabilityBadgeProps } from "./index.types";
