import styles from "../../styles/pages/post-slug.module.css";
import { useRouter } from "next/router";

import matter from "gray-matter";
import fs from "fs";
import { marked } from "marked";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { Params } from "next/dist/server/router";
import path from "path";
import { ThemeSection } from "../../components/UI/theme-section/theme-section";

interface ISlugProps {
  frontmatter: any;
  slug: any;
  content: any;
}

const Slug = ({ frontmatter, content }: ISlugProps) => {
  const router = useRouter();
  return (
    <ThemeSection>
      <div className={styles.slug__container}>
        <p className={styles.go_back__button} onClick={() => router.push(`/`)}>
          ^ GO BACK
        </p>
        <h1>{frontmatter.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </ThemeSection>
  );
};

export default Slug;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("services", "mdx", "posts"));

  const paths = files.map(file => ({ params: { slug: file.replace(".md", "") } }));

  return { paths, fallback: false };
}

export function getStaticProps(context: GetStaticPropsContext): GetStaticPropsResult<Params> {
  const slug = context?.params?.slug as string;

  const markdownMetadata = fs.readFileSync(
    path.join("services", "mdx", "posts", slug + ".md"),
    "utf-8",
  );

  const { data: frontmatter, content } = matter(markdownMetadata);
  console.log(content);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
