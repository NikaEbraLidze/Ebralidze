import styles from "./index.module.css";
import Button from "../button";
import { Typography } from "../typography";
import { ChevronIcon, GitHubIcon, LinkedInIcon } from "@/assets";
import { useHeaderContainer } from "./container";
import clsx from "clsx";

export const Header = () => {
  const {
    mobileMenuOpen,
    lang,
    t,
    navLinks,
    socialLinks,
    toggleLang,
    toggleMobileMenu,
    handleLogoClick,
  } = useHeaderContainer();

  const langToggle = (
    <Button
      onClick={toggleLang}
      label={t(`languageToggle.${lang}`)}
      variant="text"
      containerClassName={styles.langBtn}
      labelClassName={styles.langText}
    />
  );

  const socials = (
    <div className={styles.socials}>
      <a
        className={styles.socialBtn}
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("social.github")}
      >
        <GitHubIcon />
      </a>
      <a
        className={styles.socialBtn}
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("social.linkedin")}
      >
        <LinkedInIcon />
      </a>
    </div>
  );

  const availableBadge = (
    <div className={styles.availableBadge}>
      <span className={styles.availableDot} aria-hidden />
      <Typography as="span" size={13} weight="medium" className={styles.availableLabel}>
        {t("availableBadge")}
      </Typography>
    </div>
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Button
            variant="text"
            aria-label={t("logoAria")}
            leftIcon={
              <Typography as="span" weight="bold" size={24} className={styles.logotype}>
                N<span className={styles.logotypeSlash}>/</span>
              </Typography>
            }
            containerClassName={styles.logoButtons}
            leftIconClassName={styles.logoIcon}
            onClick={handleLogoClick}
          />
        </div>

        <nav className={styles.navSection} aria-label={t("navAria")}>
          {navLinks.map((navLink) => (
            <Button
              key={navLink.key}
              label={navLink.label}
              variant="text"
              labelClassName={clsx(styles.navItem, navLink.isActive && styles.navItemActive)}
              onClick={navLink.onClick}
            />
          ))}
        </nav>

        <div className={styles.rightSection}>
          {availableBadge}
          {socials}
          {langToggle}
        </div>

        <div className={styles.burgerGroup}>
          <div className={styles.availableBadgeMobile}>{availableBadge}</div>
          <div className={styles.burger}>
            <Button
              onClick={toggleMobileMenu}
              label={t("mobileMenu")}
              variant="text"
              labelClassName={styles.more}
              rightIcon={<ChevronIcon />}
              rightIconClassName={clsx(
                styles.chevronIcon,
                mobileMenuOpen && styles.chevronOpen,
              )}
              aria-expanded={mobileMenuOpen}
            />
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={clsx(styles.mobileMenu, styles.menuVisible)}>
          <div className={styles.mobileMenuInner}>
            {navLinks.map((navLink) => (
              <Button
                key={navLink.key}
                label={navLink.label}
                variant="text"
                labelClassName={clsx(styles.navItem, navLink.isActive && styles.navItemActive)}
                onClick={navLink.onClick}
              />
            ))}
            {socials}
            {langToggle}
          </div>
        </div>
      )}
    </header>
  );
};
