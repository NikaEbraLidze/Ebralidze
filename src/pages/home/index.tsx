import styles from "./index.module.css";
import { Hero } from "./Hero";
import { ExploreMyWork } from "./ExploreMyWork";
import { FeaturedProjects } from "./FeaturedProjects";
import { Faq } from "./Faq";
import { Cta } from "./Cta";
import { PortfolioHelmet } from "@/seo";

const Home = () => {
  return (
    <div className={styles.home}>
      <PortfolioHelmet />
      <Hero />
      <ExploreMyWork />
      <FeaturedProjects />
      <Faq />
      <Cta />
    </div>
  );
};

export default Home;
