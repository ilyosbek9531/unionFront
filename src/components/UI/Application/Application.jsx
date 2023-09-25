import React from "react";
import styles from "./Application.module.scss";
import { CloseButton } from "components/Icons";
import { useForm } from "react-hook-form";
import { usePostApplication } from "services/main.service";
import MaskInput from "../InputMask/MaskInput";

const Application = ({
  handleOpenClose,
  setOpenSendSuccessfully,
  setOpenModal,
}) => {
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
      setOpenModal(false);
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
    <div className={styles.modal_wrapper}>
      <div className={styles.title_wrapper}>
        <h1 className={styles.title}>Ariza to’ldiring</h1>
        <span onClick={handleOpenClose} className={styles.closeButton}>
          <CloseButton />
        </span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_wrapper}>
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
  );
};

export default Application;
