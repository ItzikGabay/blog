import React, { ReactChildren, ReactChild } from "react";
import styles from "./theme-section.module.css";

interface ThemeSectionProps {
  children: ReactChild | ReactChildren;
}

export const ThemeSection = ({ children }: ThemeSectionProps) => {
  return <div className={styles.section__container}>{children}</div>;
};
