import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.nav__container}>
      <div className={styles.nav__left}>
        <div className={styles.nav__left_logo}>Itzik Gabay</div>
        <div className={styles.nav__left_links}>
          <div className={styles.nav__left_link}>All Posts</div>
          <div className={styles.nav__left_link}>Snippets</div>
          <div className={styles.nav__left_link}>Buy me a coffe</div>
        </div>
      </div>
      <div className={styles.nav__right}>
        <div className={styles.nav__right_buttons}>right</div>
      </div>
    </div>
  );
};
