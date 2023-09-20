import React from "react";
import styles from "./CartSingleProduct.module.scss";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DeleteIcon,
  LikeIcon,
} from "components/Icons";

const CartSingleProduct = ({ title, count, price, image_url }) => {
  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.image_wrapper}>
        <img src={image_url} alt="image" />
      </div>
      <div className={styles.contents}>
        <div className={styles.main_content}>
          <div className={styles.title_subtitle}>
            <h3 className={styles.title}>{title}</h3>
            <h3 className={styles.subtitle}>
              Sleeveless top with an asymmetric high neck.
            </h3>
          </div>
          <h1 className={styles.price}>{`$${price}`}</h1>
        </div>

        <div className={styles.buttons_wrapper}>
          <div className={styles.remove_like_content}>
            <div className={styles.like}>
              <LikeIcon fill="#8C8C8C" />
              Saqlash
            </div>
            <div className={styles.like}>
              <DeleteIcon />
              O'chirish
            </div>
          </div>
          <div className={styles.count_content}>
            <span>
              <ArrowRightIcon size="30" fill="#00ADB5" />
            </span>
            <p>{count}</p>
            <span>
              <ArrowLeftIcon size="30" fill="#00ADB5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSingleProduct;
