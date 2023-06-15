import { Container } from "@mui/material";
import Link from "next/link";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import HeaderAssets from "../HeaderAssets/HeaderAssets";

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.box}>
          <Link href="/">
            <a className={styles.logo}>
              <h2>Union</h2>
            </a>
          </Link>
          <Navbar />
          <HeaderAssets />
        </div>
      </Container>
    </header>
  );
}
