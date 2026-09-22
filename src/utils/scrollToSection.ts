import type { NavigateFunction } from "react-router-dom";

const MAX_SCROLL_RETRIES = 40;

const tryScrollTo = (sectionId: string): boolean => {
  const element = document.getElementById(sectionId);
  if (!element) return false;
  element.scrollIntoView({ behavior: "smooth" });
  return true;
};

const scrollWhenReady = (sectionId: string, attemptsLeft = MAX_SCROLL_RETRIES) => {
  if (tryScrollTo(sectionId) || attemptsLeft <= 0) return;
  requestAnimationFrame(() => scrollWhenReady(sectionId, attemptsLeft - 1));
};

export const scrollToSection = (
  sectionId: string,
  navigate: NavigateFunction,
  currentPath = window.location.pathname,
) => {
  if (currentPath === "/" || currentPath === "") {
    tryScrollTo(sectionId);
    return;
  }

  navigate("/");
  scrollWhenReady(sectionId);
};
