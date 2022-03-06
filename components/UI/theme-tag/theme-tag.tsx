// import styles from "./theme-tag.module.css";
// import "./theme-tag.css";

interface IThemeTagProps {
  label: string;
}

const ThemeTag = ({ label }: IThemeTagProps) => {
  return <div className="tag__container">{label}</div>;
};

export default ThemeTag;
