import styles from "./theme-section-title.module.css";

interface IThemeSectionTitle {
  label: string;
  icon?: string;
}

const ThemeSectionTitle = ({ label, icon }: IThemeSectionTitle) => {
  return (
    <div className={styles.section_title__container}>
      <div>
        {icon && <span className="material-icons-outlined">{icon}</span>}
        {label}
      </div>
      <div className={styles.section_title__underline}>___</div>
    </div>
  );
};

export default ThemeSectionTitle;
