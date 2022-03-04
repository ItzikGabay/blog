import styles from "./header.module.css";
import { Navbar } from "./components/navbar/navbar";
import Image from "next/image";
import wave from "../../assets/illustrations/wave.svg";

export const Header = () => {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__content}>
        <Navbar />
      </div>
      <div className={styles.header__img}>
        <Image src={wave} height={200} width={900} />
      </div>
    </div>
  );
};
