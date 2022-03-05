import styles from "./navbar.module.css";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.nav__container}>
      <div className={styles.nav__left}>
        <div className={styles.nav__left_logo} onClick={() => router.push(`/`)}>
          Itzik Gabay 👨🏻‍💻
        </div>
        <div className={styles.nav__left_links}>
          <div className={styles.nav__left_link} onClick={() => router.push(`/`)}>
            All Posts
          </div>
          <div className={styles.nav__left_link}>Snippets</div>
          <div className={styles.nav__left_link}>
            Buy me a coffee<span className="material-icons-outlined">coffee</span>
          </div>
        </div>
      </div>
      <div className={styles.nav__right}>
        <div className={styles.nav__right_buttons}>
          <div className={styles.nav__left_link}>
            <span className="material-icons-outlined">dark_mode</span>
          </div>
          <div className={styles.nav__left_link}>
            <span className="material-icons-outlined">link</span>
          </div>
          <div className={styles.nav__left_link}>
            <span className="material-icons-outlined">rss_feed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
