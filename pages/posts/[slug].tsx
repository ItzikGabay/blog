import React from "react";
import styles from "../../styles/pages/post-slug.module.css";
import { useRouter } from "next/router";

import fs from "fs";
import { GetStaticPropsContext } from "next";
import path from "path";
import { ThemeSection } from "../../components/UI/theme-section/theme-section";

import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";

interface ISlugProps {
  frontmatter: any;
  slug: any;
  content: any;
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

  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<any> {
  const slug = context?.params?.slug as string;

  const ComponentsShortFilesNames = fs.readdirSync(path.join("components", "mdx-components"));

  const mdxComponents: any = ComponentsShortFilesNames.map(file => {
    const componentCode = fs.readFileSync(
      path.join("components", "mdx-components", file, file + ".tsx"),
      "utf8",
    );

    const filePath = `../../components/mdx-components/${file}/${file}.tsx`;
    return {
      [filePath]: componentCode,
    };
  });

  const markdownMetadata = fs.readFileSync(
    path.join("services", "mdx", "posts", slug + ".mdx"),
    "utf-8",
  );

  const componentFile = fs.readFileSync(
    path.join("components", "UI", "theme-tag", "theme-tag.tsx"),
  );

  const componentBuf = Buffer.from(componentFile);
  const componentData = componentBuf.toString();
  const mdxSource = markdownMetadata;

  const files: any = {
    files: {
      "../../components/UI/theme-tag/theme-tag.tsx": componentData,
    },
  };

  console.log("MDXComponents", mdxComponents);

  for (let i = 0; i < mdxComponents.length; i++) {
    files.files = { ...files["files"], ...mdxComponents[i] };
  }

  console.log(files);

  const result = await bundleMDX({
    source: mdxSource,
    files: files["files"],
  });

  const { code: content, frontmatter } = result;

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
