import styles from "./index.module.css";
import type { TypographyProps } from "./index.types";

export const classNames = (
  classes: (string | boolean | undefined | null)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

export const Typography = ({
  weight = "regular",
  align = "left",
  size = 16,
  underline = false,
  children,
  className,
  as: Element = "span",
  onClick,
}: TypographyProps) => {
  const combinedClassName = classNames([
    styles.container,
    styles[weight],
    styles[align],
    styles[`size-${size}`],
    underline && styles.underline,
    className,
  ]);

  return (
    <Element className={combinedClassName} onClick={onClick}>
      {children}
    </Element>
  );
};
