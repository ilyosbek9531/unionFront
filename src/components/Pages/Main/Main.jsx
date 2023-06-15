import Banner from "components/UI/Banner/Banner";
import styles from "./Main.module.scss";
import TopProducts from "components/UI/TopProducts/TopProducts";
import Category from "components/UI/Category/Category";
import Universities from "components/UI/Universities/Universities";

export function Main() {
  return (
    <main className={styles.main}>
      <Banner />
      <TopProducts />
      <Category />
      <Universities />
    </main>
  );
}
