import React from "react";
import styles from "./SingleProductInfo.module.scss";
import CRating from "../Rating/Rating";

const SingleProductInfo = ({ SingleProduct, SingleProductImg }) => {
  return (
    <form className={styles.wrapper}>
      <div className={styles.contexts}>
        <h1 className={styles.title}>{SingleProduct?.title}</h1>
        <p className={styles.context}>{SingleProduct?.description}</p>
      </div>
      <div className={styles.selection}>
        <h2 className={styles.title}>Ranglar</h2>
        <div className={styles.colors}>
          {SingleProductImg?.datas.map((item) => (
            <div
              className={styles.color}
              style={{
                backgroundColor: item.rgb,
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.selection}>
        <h2 className={styles.title}>Reytingi:</h2>
        <CRating name="read-only" value={SingleProduct?.rating} />
      </div>
      <div className={`${styles.selection} ${styles.border}`}>
        <h2 className={styles.title}>O'lchamlari</h2>
        <div className={styles.sizes}>
          {SingleProduct?.sizes.map((item) => (
            <span className={styles.size}>{item.code}</span>
          ))}
        </div>
        <div className={styles.size_price}>
          <h2 className={styles.price}>{`${SingleProduct?.price}`}</h2>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={`${styles.buy} ${styles.btn}`}>Xarid qilish</div>
        <div className={`${styles.toCart} ${styles.btn}`}>Savatchaga </div>
      </div>
    </form>
  );
};

export default SingleProductInfo;
