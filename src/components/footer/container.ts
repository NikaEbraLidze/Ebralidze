import { useLocalizedText } from "@/utils/hooks/useLocalizedText";

export const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const useFooterContainer = () => {
  const t = useLocalizedText("footer");

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/nika-ebralidze-812431329/",
    gmail: "mailto:nikaebralidze21@gmail.com?subject=Hello%20Nika",
    github: "https://github.com/NikaEbraLidze",
    facebook: "https://www.facebook.com/nika.ebralidze.313778",
  };

  return {
    t,
    openLink,
    socialLinks,
  };
};
