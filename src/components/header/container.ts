import { useState, useEffect } from "react";
import { useLang } from "../locales/index";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { useLocation, useNavigate } from "react-router-dom";
import { SOCIAL_LINKS } from "@/constants/social";
import { scrollToSection } from "@/utils/scrollToSection";
import type { NavLink } from "./index.types";

export const useHeaderContainer = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = useLocalizedText("header");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLang = () => {
    setLang(lang === "en" ? "ka" : "en");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

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
    scrollToSection(sectionId, navigate, location.pathname);
    setMobileMenuOpen(false);
  };

  const navLinks: NavLink[] = [
    {
      key: "home",
      label: t("nav.home"),
      onClick: handleLogoClick,
      isActive: location.pathname === "/",
    },
    {
      key: "blog",
      label: t("nav.blog"),
      onClick: handleBlogClick,
      isActive: location.pathname.startsWith("/blog"),
    },
    {
      key: "contact",
      label: t("nav.contact"),
      onClick: () => handleSectionClick("contact"),
    },
  ];

  const socialLinks = {
    github: SOCIAL_LINKS.github,
    linkedin: SOCIAL_LINKS.linkedin,
  };

  return {
    mobileMenuOpen,
    lang,
    t,
    navLinks,
    socialLinks,
    toggleLang,
    toggleMobileMenu,
    handleLogoClick,
  };
};
