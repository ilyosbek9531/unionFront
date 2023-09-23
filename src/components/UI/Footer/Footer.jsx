import styles from "./Footer.module.scss";
import Link from "next/link";
import { Container } from "@mui/material";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  UnionIcon,
} from "components/Icons";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.box}>
          <Link href="/">
            <a className={styles.logo}>
              <UnionIcon />
              <span>
                Biz sizning unutilmas yillaringizni yo'qolib ketishini
                xohlamaymiz. Har bir xotira va lahzalarni o'zingiz bilan saqlab
                qoling. Union - o'tmishingizni doimiy jonli saqlang!
              </span>
            </a>
          </Link>
          <div className={styles.box__right}>
            <ul>
              <li>
                <Link href="/products">
                  <a>All products</a>
                </Link>
              </li>
              <li>
                <Link href="/topproducts">
                  <a>Top products</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>My orders</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About us</a>
                </Link>
              </li>
            </ul>
            <div className={styles.box__right__right}>
              <h5>Biz bilan bog’laning</h5>
              <div className={styles.box__right__right__icons}>
                <div className={styles.box__right__right__icons__icon}>
                  <InstagramIcon />
                </div>
                <div className={styles.box__right__right__icons__icon}>
                  <TelegramIcon />
                </div>
                <div className={styles.box__right__right__icons__icon}>
                  <FacebookIcon />
                </div>
              </div>
              <h5>+998 78 777 20 20</h5>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.footer__bottom}>
        YourBrend.uz internet-do'konlari. Barcha huquqlar himoyalangan.
        <p>
          Created by{" "}
          <Link href="">
            <span>Digital Solutions</span>
          </Link>
        </p>
      </div>
    </footer>
  );
}
