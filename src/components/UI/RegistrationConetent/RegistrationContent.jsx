import styles from "./RegistrationContent.module.scss";
import React from "react";

const RegistrationContent = () => {
  return (
    <div className={styles.registration}>
      <h1 className={styles.title}>UNION dan ro’yhatdan o’ting</h1>
      <form action="" className={styles.form}>
        <label for="phoneNumber">Telefon</label>
        <input
          type="number"
          placeholder="Telefon raqamingizni kiriting"
          name="phoneNumber"
        />

        <label for="firstName">Ism</label>
        <input type="text" placeholder="Ismingizni kiriting" name="firstName" />

        <label for="lastName">Familiya</label>
        <input
          type="text"
          placeholder="Familiyangizni kiriting"
          name="lastName"
        />
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default RegistrationContent;
