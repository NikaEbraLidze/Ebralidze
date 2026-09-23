import { useState } from "react";
import type { FaqItemKey } from "./data";

export const useFaqAccordion = <T extends FaqItemKey = FaqItemKey>() => {
  const [openKey, setOpenKey] = useState<T | null>(null);

  const toggle = (key: T) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  return { openKey, toggle };
};
