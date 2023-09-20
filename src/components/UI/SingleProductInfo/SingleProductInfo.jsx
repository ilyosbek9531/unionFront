import React from "react";
import styles from "./SingleProductInfo.module.scss";
import CRating from "../Rating/Rating";

const SingleProductInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contexts}>
        <h1 className={styles.title}>Harvard Arc T-shirt</h1>
        <p className={styles.context}>
          Lace-up boots. Soft design with rubberised mudguard on the toe and at
          the back. Seven-eyelet facing, two pairs of eyelets with metal clasps.
          Padded ankle detail. Rounded toe.
        </p>
      </div>
      <div className={styles.selection}>
        <h2 className={styles.title}>Ranglar</h2>
        {/* <span className={}></span> */}
      </div>
      <div className={styles.selection}>
        <h2 className={styles.title}>Reytingi:</h2>
        <CRating name="read-only" value={3} />
      </div>
      <div className={`${styles.selection} ${styles.border}`}>
        <h2 className={styles.title}>O'lchamlari</h2>
        <div className={styles.size_price}>
          <h2 className={styles.price}>$38.00</h2>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={`${styles.buy} ${styles.btn}`}>Xarid qilish</div>
        <div className={`${styles.toCart} ${styles.btn}`}>Savatchaga </div>
      </div>
    </div>
  );
};

export default SingleProductInfo;
