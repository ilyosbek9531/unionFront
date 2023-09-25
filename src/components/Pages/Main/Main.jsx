import Banner from "components/UI/Banner/Banner";
import styles from "./Main.module.scss";
import TopProducts from "components/UI/TopProducts/TopProducts";
import Category from "components/UI/Category/Category";
import Universities from "components/UI/Universities/Universities";
import {
  CloseButton,
  SubmitAppIcon,
  SucccessfullyIcon,
} from "components/Icons";
import { Container, useMediaQuery } from "@mui/material";
import Modal from "components/UI/Modal/Modal";
import { useState } from "react";
import { useGetTopProducts } from "services/main.service";
import Application from "components/UI/Application/Application";
import SwipeableDrawerModal from "components/UI/SwipeableDrawerModal/SwipeableDrawerModal";

export function Main() {
  const width1000px = useMediaQuery("(max-width:1000px)");
  const [openModal, setOpenModal] = useState(false);
  const [openSendSuccessfully, setOpenSendSuccessfully] = useState(false);
  const handleOpenClose = () => setOpenModal(false);
  const handleCloseSend = () => setOpenSendSuccessfully(false);
  const userId =
    typeof window !== "undefined" && localStorage.getItem("user_id");

  const { data } = useGetTopProducts({
    queryParams: {
      limit: 10,
      offset: 0,
      order: "top_product",
      user_id: userId,
    },
  });

  return (
    <>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Banner />
          <TopProducts data={data} />
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

      {width1000px ? (
        <SwipeableDrawerModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onOpen={() => setOpenModal(true)}
        >
          <Application
            handleOpenClose={handleOpenClose}
            setOpenSendSuccessfully={setOpenSendSuccessfully}
            setOpenModal={setOpenModal}
          />
        </SwipeableDrawerModal>
      ) : (
        <Modal open={openModal} handleClose={handleOpenClose}>
          <Application
            handleOpenClose={handleOpenClose}
            setOpenSendSuccessfully={setOpenSendSuccessfully}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <Modal open={openSendSuccessfully} handleClose={handleCloseSend}>
        <div className={styles.success_wrapper}>
          <span onClick={handleCloseSend} className={styles.closeButton}>
            <CloseButton />
          </span>
          <SucccessfullyIcon />
          <h3 className={styles.success_text}>
            Your message sent successfully
          </h3>
        </div>
      </Modal>
    </>
  );
}
