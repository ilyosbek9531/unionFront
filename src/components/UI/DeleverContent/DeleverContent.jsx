import React from "react";
import styles from "./DeleverContent.module.scss"
import DeleverForm from "../DeleverForm/DeleverForm";
import CartAllPrice from "../CartAllPrice/CartAllPrice";

const DeleverContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.deliverPage_wrapper}>
        <DeleverForm />
      </div>
      <span className={styles.price_wrapper}>
        <CartAllPrice />
      </span>
    </div>
  );
};

export default DeleverContent;
