import type { NextPage } from "next";
import styles from "../styles/pages/home.module.css";

import { ThemeSection } from "../components/UI/theme-section/theme-section";
import ThemeSectionTitle from "../components/UI/theme-section-title/theme-section-title";
import PostList from "../components/post-list/post-list";
import Sidebar from "../components/sidebar/sidebar";

const Home: NextPage = () => {
  return (
    <ThemeSection>
      <div className={styles.home__container}>
        <div className={styles.home__content}>
          <ThemeSectionTitle label="Latest posts" />
          <PostList />
        </div>
        <div className={styles.home__sidebar}>
          <ThemeSectionTitle label="Sidebar" />
          <Sidebar />
        </div>
      </div>
    </ThemeSection>
  );
};

export default Home;
