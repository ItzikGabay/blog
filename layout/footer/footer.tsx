import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__content}>
        <div className={styles.footer__content_left}>
          <div></div>
        </div>
        <div className={styles.footer__content_right}>
          <div>This site developed and maintained with ❤️ by @ItzikDevio.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
