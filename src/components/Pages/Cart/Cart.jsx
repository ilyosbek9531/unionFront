import React, { useState } from "react";
import styles from "./Cart.module.scss";
import { Container } from "@mui/material";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import CartContent from "components/UI/CartContent/CartContent";
import RequirementLogin from "components/UI/RequirementLogin/RequirementLogin";
import TopProducts from "components/UI/TopProducts/TopProducts";

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
  const [changeCount, setChangeCount] = useState("0");

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
                  Mahsulotlar soni: <span>3</span>
                </p>
              </div>
              <span className={styles.deleteAll}>Barchasini o'chirish</span>
            </div>
            <CartContent
              setChangeCount={setChangeCount}
              changeCount={changeCount}
            />
            <div className={styles.offerProducts}>
              <h2 className={styles.title}>Tavsiya etilgan tovarlar</h2>
              <TopProducts visible={false} />
            </div>
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
