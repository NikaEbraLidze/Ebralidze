import { SOCIAL_LINKS, CONTACT_MAILTO } from "@/constants/social";

export const useCtaContainer = () => {
  return {
    mailto: CONTACT_MAILTO,
    socialLinks: {
      github: SOCIAL_LINKS.github,
      linkedin: SOCIAL_LINKS.linkedin,
    },
  };
};
