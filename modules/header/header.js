import styles from "./header.module.css";
import Image from "next/image";

import LogoImg from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.main}>
      <main className={styles.content}>
        <Image src={LogoImg} />
        <nav>
          <li>Home</li>
          <li>About us</li>
          <li>Showcase</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>Sign in</li>
        </nav>
      </main>
    </header>
  );
};

export default Header;
