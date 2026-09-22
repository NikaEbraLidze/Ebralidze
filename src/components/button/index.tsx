import styles from "./index.module.css";
import type { ButtonProps } from "./index.types";
import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const Button = ({
  label,
  leftIcon,
  rightIcon,
  variant = "filled",
  fullWidth = false,
  isLoading = false,
  disabled = false,
  containerClassName,
  labelClassName,
  leftIconClassName,
  rightIconClassName,
  href,
  ...rest
}: ButtonProps) => {
  const isIconOnly = variant === "icon" || (!label && leftIcon && !rightIcon);
  const className = clsx(
    styles.button,
    styles[variant],
    {
      [styles.fullWidth]: fullWidth,
      [styles.iconOnly]: isIconOnly,
      [styles.disabled]: disabled,
    },
    containerClassName,
  );

  const content = (
    <>
      {isLoading && <span className={styles.loader} />}

      {!isLoading && leftIcon && (
        <span className={clsx(styles.icon, leftIconClassName)}>{leftIcon}</span>
      )}

      {!isLoading && label && (
        <span className={clsx(styles.label, labelClassName)}>{label}</span>
      )}

      {!isLoading && rightIcon && (
        <span className={clsx(styles.icon, rightIconClassName)}>
          {rightIcon}
        </span>
      )}
    </>
  );

  if (href) {
    const linkProps = rest as Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      "className" | "href"
    >;

    return (
      <a
        {...linkProps}
        href={disabled || isLoading ? undefined : href}
        aria-disabled={disabled || isLoading || undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  const buttonProps = rest as Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className"
  >;

  return (
    <button
      {...buttonProps}
      disabled={disabled || isLoading}
      className={className}
    >
      {content}
    </button>
  );
};

export default Button;
