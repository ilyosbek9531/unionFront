import React from "react";
import styles from "./Cart.module.scss";
import { Container } from "@mui/material";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import CartContent from "components/UI/CartContent/CartContent";
import RequirementLogin from "components/UI/RequirementLogin/RequirementLogin";
import { useGetCartProducts } from "services/cart.service";

const breadcrumbItems = [
  {
    link: "/",
    label: "Home",
  },
  {
    label: "Cart",
  },
];

const Cart = () => {
  const userId =
    typeof window !== "undefined" && localStorage.getItem("user_id");

  const { data: CartProducts } = useGetCartProducts({
    queryParams: {
      limit: 10,
      offset: 0,
      user_id: userId,
    },
  });

  return (
    <Container>
      <div className={styles.cart}>
        <CBreadCrumbs items={breadcrumbItems} />
        {userId ? (
          <>
            <div className={styles.cart__content}>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>Korzinka</h3>
                <p className={styles.count}>
                  Mahsulotlar soni: <span>{CartProducts?.count}</span>
                </p>
              </div>
              <span className={styles.deleteAll}>Barchasini o'chirish</span>
            </div>
            <CartContent
              carts={CartProducts?.datas}
              userId={userId}
              count={CartProducts?.count}
            />
          </>
        ) : (
          <span className={styles.login}>
            <RequirementLogin
              warningText="Please Login from website"
              contentButton="Go to Login page"
              page="login"
            />
          </span>
        )}
      </div>
    </Container>
  );
};

export default Cart;
