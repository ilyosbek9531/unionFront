import React from "react";
import styles from "./CartAllPrice.module.scss";
import Link from "next/link";
import MainButton from "../MainButton/MainButton";

const CartAllPrice = ({
  onSubmit,
  totalPrice,
  page,
  totalCount,
  isActive = "false",
}) => {
  return (
    <div className={styles.overall_wrapper}>
      <div className={styles.overall_content}>
        <h2 className={styles.title}>Buyurtmangiz</h2>
        {isActive ? (
          <>
            <div className={`${styles.products_price} ${styles.borderBottom}`}>
              <h3 className={styles.product_content}>Количество товаров:</h3>
              <h3 className={styles.price}>{`${totalCount} шт.`}</h3>
            </div>
          </>
        ) : (
          ""
        )}
        <div className={styles.products_price}>
          <h3 className={styles.product_content}>Итого:</h3>
          <h3 className={styles.price}>{totalPrice} sum</h3>
        </div>
      </div>
      {page ? (
        <>
          <Link href={`/${page}`}>
            <MainButton
              variant="contained"
              text="Rasmiylashtirish"
              fullWidth
              onClick={onSubmit}
            />
          </Link>
        </>
      ) : (
        <MainButton
          variant="contained"
          text="Rasmiylashtirish"
          fullWidth
          onClick={onSubmit}
        />
      )}
    </div>
  );
};

export default CartAllPrice;
