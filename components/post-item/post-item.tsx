import styles from "./post-item.module.css";
import { useRouter } from "next/router";

interface PostItemProps {
  title: string;
  desc: string;
  path: string;
}

const PostItem = ({ title, desc, path }: PostItemProps) => {
  const router = useRouter();

  return (
    <div className={styles.post_item__container}>
      <div className={styles.post_item__title}>{title}</div>
      <div className={styles.post_item__content}>{desc}</div>
      <div className={styles.post_item__readmore} onClick={() => router.push(`/posts/${path}`)}>
        Read more...
      </div>
    </div>
  );
};

export default PostItem;
