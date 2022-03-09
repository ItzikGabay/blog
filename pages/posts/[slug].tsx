import React from "react";
import styles from "../../styles/pages/post-slug.module.css";
import { useRouter } from "next/router";

import fs from "fs";
import { GetStaticPropsContext } from "next";
import path from "path";
import { ThemeSection } from "../../components/UI/theme-section/theme-section";

import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";

interface FrontmatterProps {
  title: string;
}

interface ISlugProps {
  frontmatter: FrontmatterProps;
  slug: string;
  content: string;
}

const Slug = ({ frontmatter, content }: ISlugProps) => {
  const Component = React.useMemo(() => getMDXComponent(content), [content]);

  const router = useRouter();
  return (
    <ThemeSection>
      <div className={styles.slug__container}>
        <p className={styles.go_back__button} onClick={() => router.push(`/`)}>
          ^ Go back
        </p>
        <h1 className={styles.slug__title}>{frontmatter.title}</h1>
        <Component />
      </div>
    </ThemeSection>
  );
};

export default Slug;

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("services", "mdx", "posts"));

  const paths = files.map(file => ({ params: { slug: file.replace(".mdx", "") } }));

  // fallback option is for 404 pages.
  return { paths, fallback: false };
}

// Passing down the frontmatter and content of the MDX file
export async function getStaticProps(context: GetStaticPropsContext): Promise<object> {
  const slug = context?.params?.slug as string;

  // Getting short values of the names, (e.g "["test-component", "another-test")
  const ComponentsShortFilesNames = fs.readdirSync(path.join("components", "mdx-components"));

  // Extracting all the names of the components from our MDX components folder
  const mdxComponents: object[] = ComponentsShortFilesNames.map(file => {
    const componentCode = fs.readFileSync(
      path.join("components", "mdx-components", file, file + ".tsx"),
      "utf8",
    );

    // That's how mdx-bundler want the schema to be:
    const filePath = `../../components/mdx-components/${file}/${file}.tsx`;
    return {
      [filePath]: componentCode,
    };
  });

  // Single file import
  const componentFile: string = fs.readFileSync(
    path.join("components", "UI", "theme-tag", "theme-tag.tsx"),
    "utf-8",
  );

  interface FilesProp {
    [key: string]: Record<string, string>;
  }

  // Default state with the single import
  const files: FilesProp = {
    files: {
      "../../components/UI/theme-tag/theme-tag.tsx": componentFile,
    },
  };

  // Adding the mdx-components to the default state
  for (let i = 0; i < mdxComponents.length; i++) {
    files.files = { ...files["files"], ...mdxComponents[i] };
  }

  // Reading the MDX files from our MDX files folder
  const mdxSource = fs.readFileSync(path.join("services", "mdx", "posts", slug + ".mdx"), "utf-8");

  // Bundling the MDX file to one react component
  const data = await bundleMDX({
    source: mdxSource,
    files: files["files"],
  });

  const { code: content, frontmatter } = data;

  // Passing the data to the react component
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
