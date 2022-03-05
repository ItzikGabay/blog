import type { NextPage } from "next";
import styles from "../styles/pages/home.module.css";
import { ThemeSection } from "../components/UI/theme-section/theme-section";

const Home: NextPage = () => {
  return (
    <ThemeSection>
      <div className={styles.home__container}>
        <div className={styles.home__content}>1</div>
        <div className={styles.home__sidebar}>2</div>
      </div>
    </ThemeSection>
  );
};

export default Home;
