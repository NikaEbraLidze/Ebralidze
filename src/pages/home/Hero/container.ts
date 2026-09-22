import { useNavigate } from "react-router-dom";
import { scrollToSection } from "@/utils/scrollToSection";

export const useScrollToSection = () => {
  const navigate = useNavigate();

  return (sectionId: string) => {
    scrollToSection(sectionId, navigate);
  };
};
