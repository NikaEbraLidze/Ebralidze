import type { ReactNode } from "react";

export type TypographyWeights =
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold";

export type TypographyAlign = "left" | "right" | "center";

export type TypographySize =
  | 10
  | 12
  | 13
  | 14
  | 16
  | 18
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 48;

export type TypographyElement =
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "div"
  | "label";

export interface TypographyProps {
  /**
   * Font weight
   * @default 'regular'
   */
  weight?: TypographyWeights;

  /**
   * Text align
   * @default 'left'
   */
  align?: TypographyAlign;

  /**
   * Font size in pixels (converted to em units)
   * @default 16
   */
  size?: TypographySize;

  /**
   * Whether to show underline decoration
   * @default false
   */
  underline?: boolean;

  /**
   * Content to render
   */
  children: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * HTML element to render
   * @default 'span'
   */
  as?: TypographyElement;

  /**
   * Click handler
   */
  onClick?: () => void;
}
