import React from "react";
import styles from "./ProductCard.module.scss";
import { BasketIcon, LikeIcon } from "components/Icons";
import CRating from "../Rating/Rating";
import Link from "next/link";

const ProductCard = ({ img, name, rate, price }) => {
  return (
    <Link href={`/products/1`}>
      <div className={styles.card}>
        <div className={styles.card__img}>
          <img src={img} alt="productImage" />
          <div className={styles.card__img__like}>
            <LikeIcon width="24" height="24" fill="#00ADB5" />
          </div>
        </div>
        <div className={styles.card__info}>
          <h4>{name}</h4>
          <div className={styles.card__info__items}>
            <div className={styles.card__info__items__item}>
              <CRating name="read-only" value={rate} />
              <h5>{price}</h5>
            </div>
            <div className={styles.card__info__items__basket}>
              <BasketIcon width="16" height="16" fill="#00ADB5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
