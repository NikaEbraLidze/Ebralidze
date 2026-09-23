import type { FaqItemKey } from "./data";

export interface FaqAccordionProps {
  itemKeys: readonly FaqItemKey[];
  idPrefix?: string;
  className?: string;
  compact?: boolean;
}
