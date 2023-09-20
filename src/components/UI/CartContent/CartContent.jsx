import React from "react";
import styles from "./CartContent.module.scss";
import CartSingleProduct from "../CartSingleProduct/CartSingleProduct";
import CartAllPrice from "../CartAllPrice/CartAllPrice";

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
];

const CartContent = ({ changeCount, setChangeCount, count = "3" }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.products_wrapper}>
        {data.map((item) => (
          <CartSingleProduct
            key={item.id}
            title={item.name}
            price={item.price}
            count={item.count}
            image_url={item.img}
          />
        ))}
      </div>
      <span className={styles.price_wrapper}>
        <CartAllPrice count={count} />
      </span>
    </div>
  );
};

export default CartContent;
