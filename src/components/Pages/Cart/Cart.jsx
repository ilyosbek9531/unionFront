import React, { useState } from "react";
import styles from "./Cart.module.scss";
import { Container } from "@mui/material";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import CartContent from "components/UI/CartContent/CartContent";
import RequirementLogin from "components/UI/RequirementLogin/RequirementLogin";

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
  const [changeCount, setChangeCount] = useState("0");
  return (
    <Container>
      <div className={styles.cart}>
        <CBreadCrumbs items={breadcrumbItems} />
        {typeof window !== "undefined" && localStorage.getItem("user_id") ? (
          <>
            <div className={styles.cart__content}>
              <div className={styles.wrapper}>
                <h3 className={styles.title}>Korzinka</h3>
                <p className={styles.count}>
                  Mahsulotlar soni: <span>3</span>
                </p>
              </div>
              <span className={styles.deleteAll}>Barchasini o'chirish</span>
            </div>
            <CartContent
              setChangeCount={setChangeCount}
              changeCount={changeCount}
            />
          </>
        ) : (
          <span className={styles.login}>
            <RequirementLogin />
          </span>
        )}
      </div>
    </Container>
  );
};

export default Cart;
