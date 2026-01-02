import {
  forwardRef,
  useId,
  useState,
  type FocusEvent,
  type ChangeEvent,
} from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import type { InputProps } from "./index.types";
import { hasValue } from "./container";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      containerClassName,
      leftIcon,
      className,
      value,
      defaultValue,
      onFocus,
      onBlur,
      onChange,
      type = "text",
      ...props
    },
    ref
  ) => {
    const id = useId();
    const [localValue, setLocalValue] = useState(defaultValue);
    const [focused, setFocused] = useState(false);

    const isFilled = hasValue(value) || hasValue(localValue);

    const isError = Boolean(error);
    const errorMessage = typeof error === "string" ? error : null;
    const descriptionText = errorMessage || helperText;

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(e);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        setLocalValue(e.target.value);
      }
      onChange?.(e);
    };

    return (
      <div
        className={clsx(
          styles.wrapper,
          fullWidth && styles.fullWidth,
          isError && styles.errorState,
          containerClassName
        )}
      >
        <div className={styles.inputContainer}>
          {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

          <input
            ref={ref}
            id={id}
            type={type}
            className={clsx(
              styles.input,
              (isFilled || focused) && styles.filled,
              leftIcon && styles.hasIcon,
              className
            )}
            value={value}
            defaultValue={defaultValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            aria-invalid={isError}
            aria-describedby={descriptionText ? `${id}-helper` : undefined}
            {...props}
          />

          {label && (
            <label
              htmlFor={id}
              className={clsx(
                styles.label,
                (isFilled || focused) && styles.labelRaised,
                leftIcon && styles.labelWithIcon
              )}
            >
              {label}
            </label>
          )}
        </div>

        {descriptionText && (
          <p
            id={`${id}-helper`}
            className={clsx(styles.helperText, isError && styles.errorText)}
          >
            {descriptionText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
