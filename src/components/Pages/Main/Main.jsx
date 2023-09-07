import Banner from "components/UI/Banner/Banner";
import styles from "./Main.module.scss";
import TopProducts from "components/UI/TopProducts/TopProducts";
import Category from "components/UI/Category/Category";
import Universities from "components/UI/Universities/Universities";
import { CloseButton, SubmitAppIcon } from "components/Icons";
import { Container } from "@mui/material";
import Modal from "components/UI/Modal/Modal";
import { useState } from "react";

export function Main() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenClose = () => setOpenModal(false);

  return (
    <>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Banner />
          <TopProducts />
          <Category />
          <Universities />
        </main>
        <div className={styles.icon__wrapper}>
          <Container>
            <div className={styles.icon} onClick={() => setOpenModal(true)}>
              <SubmitAppIcon />
            </div>
          </Container>
        </div>
      </div>

      <Modal open={openModal} handleClose={handleOpenClose}>
        <div className={styles.modal_wrapper}>
          <div className={styles.title_wrapper}>
            <h1 className={styles.title}>Ariza to’ldiring</h1>
            <span onClick={handleOpenClose} className={styles.closeButton}>
              <CloseButton />
            </span>
          </div>
          <form className={styles.form_wrapper}>
            <label htmlFor="username">FIO</label>
            <input
              type="text"
              id="username"
              placeholder="To'liq ismingizni kiriting"
              className={styles.input}
              // style={{
              //   border: errors.username ? "2px solid red" : "",
              // }}
            />
            {/* <p className={styles.error}>{errors.username?.message}</p> */}
            <label htmlFor="phoneNumber">Telefon</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="Telefon raqamingizni kiriting"
              className={styles.input}
              // style={{
              //   border: errors.username ? "2px solid red" : "",
              // }}
            />
            {/* <p className={styles.error}>{errors.phoneNumber?.message}</p> */}
            <label htmlFor="text">Message</label>
            <textarea
              type="text"
              id="text"
              // {...register("text")}
              placeholder="Fijringizni yozib qoldiring"
              className={styles.textarea}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
    </>
  );
}
