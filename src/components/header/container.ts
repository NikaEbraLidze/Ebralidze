import { useState, useEffect } from "react";
import { useLang } from "../locales/index";
import { useTheme } from "../../utils/hooks/themeContext";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { useNavigate } from "react-router-dom";

export const useHeaderContainer = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const t = useLocalizedText("header");
  const navigate = useNavigate();

  const toggleLang = () => {
    setLang(lang === "en" ? "ka" : "en");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleBlogClick = () => {
    navigate("/blog");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return {
    mobileMenuOpen,
    lang,
    theme,
    t,
    toggleLang,
    toggleTheme,
    toggleMobileMenu,
    handleLogoClick,
    handleBlogClick,
    handleSectionClick,
  };
};
