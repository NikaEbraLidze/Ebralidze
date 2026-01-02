import { useLang } from "../../components/locales/index";
import styles from "./index.module.css";
import { useTheme } from "../../utils/hooks/themeContext";
import { Hero } from "./Hero";
import { ExploreMyWork } from "./ExploreMyWork";
import { FeaturedProjects } from "./FeaturedProjects";
import { MyService } from "./MyService";

const Home = () => {
  const { t, lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.home} data-theme={theme}>
      <Hero />
      <ExploreMyWork />
      <FeaturedProjects />
      <MyService />
      <div className={styles.card}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.description}>{t.description}</p>

        <div className={styles.actions}>
          <button
            className={styles.button}
            onClick={() => setLang(lang === "en" ? "ka" : "en")}
          >
            🌍 {t.button}
          </button>

          <button className={styles.button} onClick={() => toggleTheme()}>
            🌓 Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
