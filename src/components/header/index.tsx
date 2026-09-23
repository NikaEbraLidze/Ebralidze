import styles from "./index.module.css";
import Button from "../button";
import { Typography } from "../typography";
import { ChevronIcon } from "@/assets";
import { AvailabilityBadge } from "@/components/availability-badge";
import { SocialIconLinks } from "@/components/social-icon-links";
import { useHeaderContainer } from "./container";
import clsx from "clsx";

export const Header = () => {
  const {
    mobileMenuOpen,
    lang,
    t,
    navLinks,
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
    <SocialIconLinks
      labels={{
        github: t("social.github"),
        linkedin: t("social.linkedin"),
      }}
    />
  );

  const availableBadge = <AvailabilityBadge label={t("availableBadge")} />;

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
