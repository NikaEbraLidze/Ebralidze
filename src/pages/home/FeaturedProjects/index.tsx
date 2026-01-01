import { Typography } from "@/components/typography";
import styles from "./index.module.css";
import { projectsData, type IProjectData } from "./data";
import { useLocalizedText } from "@/utils/hooks/useLocalizedText";

interface ProjectCardProps {
  data: IProjectData;
  trans: {
    title: string;
    description: string;
    imageAlt: string;
    codeBtn: string;
  };
}

const ProjectCard = ({ data, trans }: ProjectCardProps) => {
  const { repoUrl, techStack, imageUrl } = data;
  const { title, description, imageAlt, codeBtn } = trans;

  return (
    <article className={styles.projectCard}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Typography as="h3" size={18} className={styles.projectTitle}>
            {title}
          </Typography>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceLink}
          >
            {codeBtn}
          </a>
        </div>

        <Typography as="p" weight="light" className={styles.descriptionText}>
          {description}
        </Typography>

        <div className={styles.techStack}>
          {techStack.map((icon, index) => (
            <img
              key={`${data.key}-tech-${index}`}
              src={icon}
              alt="technology icon"
              className={styles.techIcon}
            />
          ))}
        </div>
      </div>

      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imageContainer}
        aria-label={`View source code for ${title}`}
      >
        <img src={imageUrl} alt={imageAlt} className={styles.projectImage} />
      </a>
    </article>
  );
};

export const FeaturedProjects = () => {
  const t = useLocalizedText("home.featuredProjects");

  return (
    <section className={styles.container}>
      <Typography
        as="h2"
        size={28}
        align="center"
        weight="medium"
        className={styles.sectionTitle}
      >
        {t("heading")}
      </Typography>

      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            data={project}
            trans={{
              title: t(`projects.${project.key}.title`),
              description: t(`projects.${project.key}.description`),
              imageAlt: t(`projects.${project.key}.imageAlt`),
              codeBtn: t("codeLink"),
            }}
          />
        ))}
      </div>
    </section>
  );
};
