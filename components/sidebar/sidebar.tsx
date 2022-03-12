import ThemeSectionTitle from "../../components/UI/theme-section-title/theme-section-title";
import TagsFilter from "../../components/tags-filter/tags-filter";
import router from "next/router";
import styles from "./sidebar.module.css";

interface IPostProps {
  slug: string;
  frontmatter: FrontmatterProps;
}
interface IPostListProps {
  data: Array<IPostProps>;
}

interface FrontmatterProps {
  title: string;
  description: string;
}

const Sidebar = ({ data }: IPostListProps) => {
  const renderPostItems = data.map((post, idx) => {
    if (idx === 10) {
      return;
    }

    return (
      <div
        onClick={() => router.push(`/posts/${post.slug}`)}
        key={post.slug}
        className={styles.sidebar__popular}>
        {idx}- {post.frontmatter.title}
      </div>
    );
  });

  return (
    <>
      <ThemeSectionTitle label="Learn more about" icon="school" />
      <TagsFilter />
      <ThemeSectionTitle label="Popular content" icon="school" marginTop="30px" />
      <div className={styles.sidebar__popular_list}>{renderPostItems}</div>
    </>
  );
};

export default Sidebar;
