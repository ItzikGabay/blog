import matter from "gray-matter";
import fs from "fs";
import { marked } from "marked";
import { GetStaticPropsContext, GetStaticPropsResult } from "next";
import { Params } from "next/dist/server/router";
import path from "path";

interface ISlugProps {
  frontmatter: any;
  slug: any;
  content: any;
}

const Slug = ({ frontmatter, slug, content }: ISlugProps) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  );
};

export default Slug;

export async function getStaticPaths<GetStaticPaths>() {
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
