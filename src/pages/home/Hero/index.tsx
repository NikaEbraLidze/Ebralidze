import styles from "./index.module.css";
import {
  ProfilePhoto,
  TypeScript,
  ReactIcon,
  Node,
  PostgreSQL,
  CSharp,
  ASPNET,
  SQLServer,
} from "@/assets";
import { Typography } from "@/components/typography";
import Button from "@/components/button";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import { useScrollToSection } from "./container";

const stackItems = [
  { src: TypeScript, label: "TypeScript" },
  { src: ReactIcon, label: "React" },
  { src: Node, label: "Node.js" },
  { src: PostgreSQL, label: "PostgreSQL" },
  { src: CSharp, label: "C#" },
  { src: ASPNET, label: "ASP.NET" },
  { src: SQLServer, label: "SQL Server" },
];

export const Hero = () => {
  const t = useLocalizedText("home.heroSection");
  const scrollToSection = useScrollToSection();

  return (
    <section className={styles.section} id="hero">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden />
            <Typography as="span" size={13} weight="medium" className={styles.badgeLabel}>
              {t("badge")}
            </Typography>
          </div>

          <Typography as="p" size={16} weight="medium" className={styles.greeting}>
            {t("greeting")}
          </Typography>

          <Typography as="h1" weight="bold" className={styles.headline}>
            {t("name")}
            <span className={styles.accentMark} aria-hidden>
              .
            </span>
          </Typography>

          <Typography as="p" size={16} weight="medium" className={styles.role}>
            {t("title")}
          </Typography>

          <Typography as="p" size={16} className={styles.description}>
            {t("description.main")}
          </Typography>

          <div className={styles.ctaGroup}>
            <Button
              variant="filled"
              label={t("cta.primary")}
              containerClassName={styles.ctaFilled}
              onClick={() => scrollToSection("contact")}
            />
            <Button
              variant="outline"
              label={t("cta.secondary")}
              containerClassName={styles.ctaOutline}
              onClick={() => scrollToSection("my-work")}
            />
          </div>
        </div>

        <div className={styles.bento}>
          <div className={styles.tileStack}>
            <Typography as="p" size={13} weight="semibold" className={styles.stackLabel}>
              {t("bento.stackLabel")}
            </Typography>
            <ul className={styles.stackList}>
              {stackItems.map((item) => (
                <li key={item.label} className={styles.stackChip}>
                  <span className={styles.stackIconWrap}>
                    <img
                      src={item.src}
                      alt=""
                      className={styles.stackIcon}
                      width={18}
                      height={18}
                      loading="eager"
                    />
                  </span>
                  <Typography as="span" size={12} weight="medium" className={styles.stackName}>
                    {item.label}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.tilePortrait}>
            <img
              src={ProfilePhoto}
              alt={t("profileAlt")}
              className={styles.portraitImage}
              width={480}
              height={640}
              loading="eager"
            />
          </div>

          <div className={styles.tileStat}>
            <Typography as="p" weight="bold" className={styles.statValue}>
              {t("bento.statValue")}
              <span className={styles.statAccent}>+</span>
            </Typography>
            <Typography as="p" size={14} weight="medium" className={styles.statLabel}>
              {t("bento.statLabel")}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};
