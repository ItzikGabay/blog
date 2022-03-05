import styles from "./post-item.module.css";

const PostItem = ({ title, desc }: any) => {
  return (
    <div className={styles.post_item__container}>
      <div className={styles.post_item__title}>{title}</div>
      <div className={styles.post_item__content}>{desc}</div>
      <div className={styles.post_item__readmore}>Read more...</div>
    </div>
  );
};

export default PostItem;
