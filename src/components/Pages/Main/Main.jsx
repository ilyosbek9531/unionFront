import Banner from "components/UI/Banner/Banner";
import styles from "./Main.module.scss";
import TopProducts from "components/UI/TopProducts/TopProducts";
import Category from "components/UI/Category/Category";
import Universities from "components/UI/Universities/Universities";
import { SubmitAppIcon } from "components/Icons";
import { Container } from "@mui/material";

export function Main() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <Banner />
        <TopProducts />
        <Category />
        <Universities />
      </main>
      <div className={styles.icon__wrapper}>
        <Container>
          <div className={styles.icon} onClick={() => setOpenModal(true)}>
            <SubmitAppIcon />
          </div>
        </Container>
      </div>
    </div>
  );
}
