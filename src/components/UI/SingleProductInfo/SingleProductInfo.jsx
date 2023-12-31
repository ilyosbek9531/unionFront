import React from "react";
import styles from "./SingleProductInfo.module.scss";
import CRating from "../Rating/Rating";
import MainButton from "../MainButton/MainButton";

const SingleProductInfo = ({
  setSizeData,
  setColorData,
  sizeData,
  colorData,
  SingleProduct,
  SingleProductImg,
  onSubmit,
  error,
}) => {
  return (
    <form className={styles.wrapper}>
      <div className={styles.contexts}>
        <h1 className={styles.title}>{SingleProduct?.title}</h1>
        <p className={styles.context}>{SingleProduct?.description}</p>
      </div>
      <div className={styles.selection}>
        <h2 className={styles.title}>Ranglar:</h2>
        <div className={styles.colors}>
          {SingleProductImg?.datas?.map((item) => (
            <div
              onClick={() => setColorData(item.id)}
              className={`${styles.color__outer}  ${
                colorData === item.id ? styles.activeColor : ""
              }`}
            >
              <div
                className={styles.color__inner}
                style={{
                  backgroundColor: item.rgb,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.selection} ${styles.border}`}>
        <h2 className={styles.title}>O'lchamlari:</h2>
        <div className={styles.sizes}>
          {SingleProduct?.sizes.map((item) => (
            <span
              className={`${styles.size} ${
                sizeData === item.id ? styles.activeSize : ""
              }`}
              onClick={() => setSizeData(item.id)}
            >
              {item.code}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.rating}>
        <div className={styles.selection}>
          <h2 className={styles.title}>Reytingi:</h2>
          <CRating name="read-only" value={SingleProduct?.rating} />
        </div>
        <div className={styles.prices}>
          <h2 className={styles.price}>{`${SingleProduct?.price} sum`}</h2>
        </div>
      </div>
      <div className={styles.buttons}>
        <MainButton variant="contained" text="Xarid qilish" fullWidth />
        <MainButton
          variant="outlined"
          text="Savatchaga"
          fullWidth
          onClick={onSubmit}
          disabled={!error}
        />
      </div>
    </form>
  );
};

export default SingleProductInfo;
