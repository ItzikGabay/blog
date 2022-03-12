import styles from "./theme-section-title.module.css";

interface IThemeSectionTitle {
  label: string;
  icon?: string;
  marginTop?: string | number;
}

const ThemeSectionTitle = ({ label, icon, marginTop = 0 }: IThemeSectionTitle) => {
  return (
    <div className={styles.section_title__container} style={{ marginTop: marginTop }}>
      <div>
        {icon && <span className="material-icons-outlined">{icon}</span>}
        {label}
      </div>
      <div className={styles.section_title__underline}>___</div>
    </div>
  );
};

export default ThemeSectionTitle;
