import React from "react";
import styles from "./CartAllPrice.module.scss";
import Link from "next/link";

const CartAllPrice = ({ count }) => {
  return (
    <div className={styles.overall_wrapper}>
      <h2 className={styles.title}>Buyurtmangiz</h2>
      <div className={styles.overall_content}>
        <div className={`${styles.products_price} ${styles.borderBottom}`}>
          <h3 className={styles.product_content}>
            Mahsulotlar <span>{`(${count}):`}</span>
          </h3>
          <h3 className={styles.price}>310$</h3>
        </div>
        <div className={styles.products_price}>
          <h3 className={styles.product_content}>Jami:</h3>
          <h3 className={styles.price}>310$</h3>
        </div>
      </div>
      <Link href="/deliver">
        <span className={styles.buy}>Rasmiylashtirish</span>
      </Link>
    </div>
  );
};

export default CartAllPrice;
