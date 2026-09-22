import { useState } from "react";
import { faqItemKeys, type FaqItemKey } from "./data";

export const useFaqContainer = () => {
  const [openKey, setOpenKey] = useState<FaqItemKey | null>(null);

  const toggle = (key: FaqItemKey) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  return { openKey, toggle, faqItemKeys };
};
