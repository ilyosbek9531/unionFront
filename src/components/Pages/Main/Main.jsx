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
import { Container } from "@mui/material";
import Modal from "components/UI/Modal/Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MaskInput from "components/UI/InputMask/MaskInput";
import { usePostApplication } from "services/main.service";

export function Main() {
  const [openModal, setOpenModal] = useState(false);
  const [openSendSuccessfully, setOpenSendSuccessfully] = useState(false);
  const handleOpenClose = () => setOpenModal(false);
  const handleCloseSend = () => setOpenSendSuccessfully(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone_number: "",
      full_name: "",
      description: "",
    },
  });

  const { mutate: postApplicationMutate } = usePostApplication({
    onSuccess: (res) => {
      setOpenSendSuccessfully(true);
      reset();
    },
    onError: (err) => {},
  });

  const onSubmit = (data) => {
    postApplicationMutate({
      phone_number: data.phone_number.replaceAll(" ", "").replaceAll("-", ""),
      full_name: data.full_name,
      description: data.description,
    });
  };
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form_wrapper}
          >
            <label for="full_name">FIO</label>
            <input
              type="text"
              {...register("full_name", {
                required: "To'liq ismingizni kiriting",
              })}
              placeholder="To'liq ismingizni kiriting"
              className={styles.input}
              style={{
                border: errors.full_name ? "2px solid red" : "",
              }}
            />
            <span className={styles.error}>{errors.full_name?.message}</span>
            <label htmlFor="phoneNumber">Telefon</label>
            <MaskInput
              mask="+\9\9\8 99 999-99-99"
              maskChar=""
              placeholder="Введите номер телефона"
              name="phone_number"
              control={control}
              errors={errors}
              autoFocus
              validation={{
                required: {
                  value: true,
                  message: "Raqamni to'liq kiriting",
                },
              }}
              className={styles.numberInput}
            />
            <label htmlFor="text">Message</label>
            <textarea
              type="text"
              {...register("description", {
                required: "Write description here",
              })}
              placeholder="Fijringizni yozib qoldiring"
              className={styles.textarea}
              style={{
                border: errors.description ? "2px solid red" : "",
              }}
            />
            <span className={styles.error}>{errors.description?.message}</span>

            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
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
