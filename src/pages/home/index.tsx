import styles from "./index.module.css";
import { useTheme } from "../../utils/hooks/themeContext";
import { Hero } from "./Hero";
import { ExploreMyWork } from "./ExploreMyWork";
import { FeaturedProjects } from "./FeaturedProjects";
import { MyService } from "./MyService";
import { ContactMe } from "./Contact";
import { PortfolioHelmet } from "@/seo";

//main page
const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.home} data-theme={theme}>
      <PortfolioHelmet />
      <Hero />
      <ExploreMyWork />
      <FeaturedProjects />
      <MyService />
      <ContactMe />
    </div>
  );
};

export default Home;
