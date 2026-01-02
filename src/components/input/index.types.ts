import type { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string | boolean;
  helperText?: ReactNode;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  containerClassName?: string;
}
