import styles from "./header.module.css";
import { Navbar } from "./components/navbar/navbar";
import Image from "next/image";
import wave from "../../assets/illustrations/wave.svg";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <div className={styles.header__container}>
      <div className={styles.header__content}>
        <Navbar />
      </div>
      <div
        className={styles.header__img}
        style={{ maxHeight: router.pathname !== "/" ? "100px" : undefined }}>
        <Image src={wave} height={200} width={900} alt="navbar-image" />
      </div>
    </div>
  );
};
