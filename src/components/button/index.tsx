import styles from "./index.module.css";
import type { ButtonProps } from "./index.types.ts";
import clsx from "clsx";

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
  ...rest
}: ButtonProps) => {
  const isIconOnly = variant === "icon" || (!label && leftIcon && !rightIcon);

  return (
    <button
      disabled={disabled || isLoading}
      className={clsx(
        styles.button,
        styles[variant],
        {
          [styles.fullWidth]: fullWidth,
          [styles.iconOnly]: isIconOnly,
          [styles.disabled]: disabled,
        },
        containerClassName
      )}
      {...rest}
    >
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
    </button>
  );
};

export default Button;
