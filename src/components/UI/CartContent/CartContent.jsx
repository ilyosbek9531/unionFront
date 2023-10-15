import React from "react";
import styles from "./CartContent.module.scss";
import CartSingleProduct from "../CartSingleProduct/CartSingleProduct";
import CartAllPrice from "../CartAllPrice/CartAllPrice";
import RequirementLogin from "../RequirementLogin/RequirementLogin";

const CartContent = ({ userId, carts, count }) => {
  const totalPrice = carts?.reduce((acc, val) => {
    return acc + val.count * val.product_data.price;
  }, 0);

  return (
    <div className={styles.wrapper}>
      {carts ? (
        <>
          <div className={styles.products_wrapper}>
            {carts?.map((item) => (
              <CartSingleProduct
                key={item.id}
                id={item.id}
                userId={userId}
                title={item.product_data.title}
                description={item.product_data.description}
                price={item.product_data.price}
                count={item.count}
                image_url={item.product_data.image_url}
                is_favourite={item.is_favourite}
                product_id={item.product_data.id}
                size_id={item.size_id}
              />
            ))}
          </div>
          <span className={styles.price_wrapper}>
            <CartAllPrice totalPrice={totalPrice} />
          </span>
        </>
      ) : (
        <span className={styles.login}>
          <RequirementLogin
            warningText="Please select product"
            contentButton="Go to All products page"
            page="products"
          />
        </span>
      )}
    </div>
  );
};

export default CartContent;
