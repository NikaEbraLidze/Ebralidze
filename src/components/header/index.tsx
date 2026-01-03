import styles from "./index.module.css";
import Button from "../button";
import { ChevronIcon, EbralidzeLogo, MoonIcon, SunIcon } from "../../assets";
import { useHeaderContainer } from "./container";

export const Header = () => {
  const {
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
  } = useHeaderContainer();

  return (
    <header className={styles.header}>
      <div className={`${styles.container} relative overflow-hidden`}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <Button
            label={t("logo")}
            variant="text"
            leftIcon={
              <img src={EbralidzeLogo} alt={t("themeToggle.logoAlt")} />
            }
            containerClassName={styles.logoButtons}
            labelClassName={styles.logoLabel}
            leftIconClassName={styles.logoIcon}
            onClick={handleLogoClick}
          />
        </div>

        {/* Nav Section */}
        <nav className={styles.navSection}>
          <Button
            label={t("nav.home")}
            variant="text"
            labelClassName={styles.navItem}
            onClick={handleLogoClick}
          />
          <Button
            label={t("nav.blog")}
            variant="text"
            labelClassName={styles.navItem}
            onClick={handleBlogClick}
          />
          <Button
            label={t("nav.contact")}
            variant="text"
            labelClassName={styles.navItem}
            onClick={() => handleSectionClick("contact")}
          />
        </nav>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <Button
            onClick={toggleTheme}
            variant="icon"
            leftIcon={
              theme === "dark" ? (
                <img src={SunIcon} alt={t("themeToggle.lightAlt")} />
              ) : (
                <img src={MoonIcon} alt={t("themeToggle.darkAlt")} />
              )
            }
            leftIconClassName={styles.themeIcon}
          />

          <Button
            onClick={toggleLang}
            label={t(`languageToggle.${lang}`)}
            leftIcon="🌍"
            variant="text"
            labelClassName={styles.langText}
          />
        </div>

        {/* Burger Menu */}
        <div className={styles.burger}>
          <Button
            onClick={toggleMobileMenu}
            label={t("mobileMenu")}
            variant="text"
            labelClassName={styles.more}
            rightIcon={<ChevronIcon />}
            rightIconClassName={`${styles.chevronIcon} ${
              mobileMenuOpen ? styles.chevronOpen : ""
            }`}
          />
        </div>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${
            mobileMenuOpen ? styles.menuVisible : ""
          }`}
        >
          <Button
            label={t("nav.home")}
            variant="text"
            labelClassName={styles.navItem}
            onClick={handleLogoClick}
          />
          <Button
            label={t("nav.blog")}
            variant="text"
            labelClassName={styles.navItem}
            onClick={handleBlogClick}
          />
          <Button
            label={t("nav.contact")}
            variant="text"
            labelClassName={styles.navItem}
            onClick={() => handleSectionClick("contact")}
          />
          <Button
            onClick={toggleTheme}
            variant="icon"
            leftIcon={
              theme === "dark" ? (
                <img src={SunIcon} alt={t("themeToggle.lightAlt")} />
              ) : (
                <img src={MoonIcon} alt={t("themeToggle.darkAlt")} />
              )
            }
            leftIconClassName={styles.themeIcon}
          />

          <Button
            onClick={toggleLang}
            label={t(`languageToggle.${lang}`)}
            leftIcon="🌍"
            variant="text"
            labelClassName={styles.langText}
          />
        </div>
      </div>
    </header>
  );
};
