import styles from "./post-item.module.css";

const PostItem = () => {
  return (
    <div className={styles.post_item__container}>
      <div className={styles.post_item__title}>titletitletitletitletitletitletitle </div>
      <div className={styles.post_item__content}>title</div>
      <div className={styles.post_item__readmore}>Read more...</div>
    </div>
  );
};

export default PostItem;
