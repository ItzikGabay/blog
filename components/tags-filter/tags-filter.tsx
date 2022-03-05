import styles from "./tags-filter.module.css";
import ThemeTag from "../UI/theme-tag/theme-tag";

const TagsFilter = () => {
  return (
    <div className={styles.tagsfilter__container}>
      <ThemeTag label="React" />
      <ThemeTag label="Nodejs" />
      <ThemeTag label="CSS" />
      <ThemeTag label="Bash" />
      <ThemeTag label="Nextjs" />
      <ThemeTag label="Vue" />
      <ThemeTag label="GIT" />
    </div>
  );
};

export default TagsFilter;
