import React, { useEffect } from "react";
import type { GetStaticPropsContext, GetStaticPropsResult, NextPage } from "next";
import styles from "../styles/pages/home.module.css";

import { ThemeSection } from "../components/UI/theme-section/theme-section";
import ThemeSectionTitle from "../components/UI/theme-section-title/theme-section-title";
import PostList from "../components/post-list/post-list";
import Sidebar from "../components/sidebar/sidebar";
import { Params } from "next/dist/server/router";

interface IIndexPageProps {
  posts: String | Array<Object>;
}

const Home: NextPage<IIndexPageProps> = ({ posts }) => {
  console.log(posts);

  return (
    <ThemeSection>
      <div className={styles.home__container}>
        <div className={styles.home__content}>
          <ThemeSectionTitle label="Latest posts" icon="mark_as_unread" />
          <PostList />
        </div>
        <div className={styles.home__sidebar}>
          <Sidebar />
        </div>
      </div>
    </ThemeSection>
  );
};

export default Home;

export function getStaticProps(context: GetStaticPropsContext): GetStaticPropsResult<Params> {
  return {
    props: {
      posts: "This is post",
    },
  };
}
