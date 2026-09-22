import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { SOCIAL_LINKS } from "@/constants/social";

export const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const useFooterContainer = () => {
  const t = useLocalizedText("footer");

  return {
    t,
    openLink,
    socialLinks: SOCIAL_LINKS,
  };
};
