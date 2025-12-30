import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "filled" | "outline" | "text" | "icon";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  variant?: ButtonVariant;

  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;

  /** Custom classNames */
  containerClassName?: string;
  labelClassName?: string;
  leftIconClassName?: string;
  rightIconClassName?: string;
}
