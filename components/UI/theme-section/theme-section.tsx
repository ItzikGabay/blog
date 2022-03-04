import styles from "./theme-section.module.css";

export const ThemeSection = ({ children }: any) => {
  return <div className={styles.section__container}>{children}</div>;
};
