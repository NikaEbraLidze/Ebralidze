import { CONTACT_MAILTO } from "@/constants/social";
import { useNavigate } from "react-router-dom";

export const useCtaContainer = () => {
  const navigate = useNavigate();

  return {
    mailto: CONTACT_MAILTO,
    goToContact: () => {
      navigate("/contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  };
};
