import React, { ReactChildren, ReactChild } from "react";
import styles from "./theme-section.module.css";
import { useRouter } from "next/router";

interface ThemeSectionProps {
  children: ReactChild | ReactChildren;
}

export const ThemeSection = ({ children }: ThemeSectionProps) => {
  const router = useRouter();

  return (
    <div
      className={styles.section__container}
      style={{ maxWidth: router.pathname === "/" ? "1300px" : "900px" }}>
      {children}
    </div>
  );
};
