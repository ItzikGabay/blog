import ThemeSectionTitle from "../../components/UI/theme-section-title/theme-section-title";
import TagsFilter from "../../components/tags-filter/tags-filter";

const Sidebar = () => {
  return (
    <>
      <ThemeSectionTitle label="Learn more about" icon="school" />
      <TagsFilter />
    </>
  );
};

export default Sidebar;
