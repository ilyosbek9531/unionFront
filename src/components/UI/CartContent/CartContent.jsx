import React from "react";
import styles from "./CartContent.module.scss";
import CartSingleProduct from "../CartSingleProduct/CartSingleProduct";

const data = [
  {
    id: 1,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    count: "4",
    price: "$38.00",
  },
  {
    id: 2,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    count: "2",
    price: "$38.00",
  },
  {
    id: 3,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    count: "1",
    price: "$38.00",
  },
  {
    id: 4,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    count: "2",
    price: "$38.00",
  },
  {
    id: 5,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    count: "5",
    price: "$38.00",
  },
];

const CartContent = ({ changeCount, setChangeCount, count = "3" }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.products_wrapper}>
        {data.map((item) => {
          {
            console.log(item.name);
          }
          <CartSingleProduct
            key={item.id}
            title={item.name}
            price={item.price}
            count={item.count}
            image_url={item.img}
          />;
        })}
      </div>
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
        <span className={styles.buy}>Rasmiylashtirish</span>
      </div>
    </div>
  );
};

export default CartContent;
