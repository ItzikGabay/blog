import styles from "./theme-tag.module.css";

interface IThemeTagProps {
  label: string;
}

const ThemeTag = ({ label }: IThemeTagProps) => {
  return <div className={styles.tag__container}>{label}</div>;
};

export default ThemeTag;
