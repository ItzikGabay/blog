import styles from "./theme-section-title.module.css";

interface IThemeSectionTitle {
  label: string;
}

const ThemeSectionTitle = ({ label }: IThemeSectionTitle) => {
  return (
    <div className={styles.section_title__container}>
      {label}
      <div>--</div>
    </div>
  );
};

export default ThemeSectionTitle;
