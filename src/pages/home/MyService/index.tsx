import { Typography } from "@/components/typography";
import styles from "./index.module.css";
import { servicesData } from "./data";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";
import type { ServiceCardProps } from "./index.types";

const ServiceCard = ({ data, trans }: ServiceCardProps) => {
  const { icon } = data;
  const { description, imageAlt } = trans;

  return (
    <li className={styles.card}>
      <div className={styles.iconWrapper}>
        <img src={icon} alt={imageAlt} className={styles.icon} />
      </div>
      <Typography
        as="p"
        weight="light"
        align="center"
        className={styles.description}
      >
        {description}
      </Typography>
    </li>
  );
};

export const MyService = () => {
  const t = useLocalizedText("home.myService");

  return (
    <section className={styles.root}>
      <header className={styles.header}>
        <Typography
          as="h2"
          size={28}
          weight="medium"
          align="center"
          className={styles.title}
        >
          {t("heading")}
        </Typography>
        <Typography
          as="p"
          weight="light"
          align="center"
          className={styles.subtitle}
        >
          {t("subtitle")}
        </Typography>
      </header>

      <ul className={styles.servicesGrid}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            data={service}
            trans={{
              description: t(`services.${service.key}.description`),
              imageAlt: t(`services.${service.key}.imageAlt`),
            }}
          />
        ))}
      </ul>
    </section>
  );
};
