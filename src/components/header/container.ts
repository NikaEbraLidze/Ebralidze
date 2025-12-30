import { useState, useEffect } from "react";
import { useLang } from "../locales/index";
import { useTheme } from "../../utils/hooks/themeContext";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";

export const useHeaderContainer = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const t = useLocalizedText("header");

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

  return {
    mobileMenuOpen,
    lang,
    theme,
    t,
    toggleLang,
    toggleTheme,
    toggleMobileMenu,
  };
};
