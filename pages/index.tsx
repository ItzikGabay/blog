import React from "react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { GetStaticPropsResult, NextPage } from "next";
import styles from "../styles/pages/home.module.css";

import { ThemeSection } from "../components/UI/theme-section/theme-section";
import ThemeSectionTitle from "../components/UI/theme-section-title/theme-section-title";
import PostList from "../components/post-list/post-list";
import Sidebar from "../components/sidebar/sidebar";
import { Params } from "next/dist/server/router";

interface IIndexPageProps {
  posts: Array<IPostProps>;
}

interface IPostProps {
  slug: string;
  frontmatter: any;
}

const Home: NextPage<IIndexPageProps> = ({ posts }) => {
  return (
    <ThemeSection>
      <div className={styles.home__container}>
        <div className={styles.home__content}>
          <ThemeSectionTitle label="Latest posts" icon="mark_as_unread" />
          <PostList data={posts} />
        </div>
        <div className={styles.home__sidebar}>
          <Sidebar />
        </div>
      </div>
    </ThemeSection>
  );
};

export default Home;

export function getStaticProps(): GetStaticPropsResult<Params> {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join("services", "mdx", "posts"));

  const postsFileNames = files.map(file => {
    // Replacing file name
    const slug = file.replace(".mdx", "");

    // Retreiving the frontmatter metadata
    const markdownMetadata = fs.readFileSync(path.join("services", "mdx", "posts", file), "utf-8");

    const { data: frontmatter } = matter(markdownMetadata);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: postsFileNames,
    },
  };
}
