import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import MaskInput from "../InputMask/MaskInput";
import styles from "./RegistrationContent.module.scss";
import React from "react";
import { UseRegisterPhone } from "services/auth.service";

const RegistrationContent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber:
        typeof window !== "undefined" && localStorage.getItem("phone_number"),
    },
  });

  const { mutate: authRegisterPhone } = UseRegisterPhone({
    onSuccess: (res) => {
      localStorage.setItem("first_name", res.first_name);
      localStorage.setItem("user_id", res.user_id);
      localStorage.setItem("token", res.token);
      router.push("/");
      setTimeout(() => {
        window.location.reload();
      }, 700);
    },
    onError: (err) => {},
  });

  const onSubmit = (data) => {
    console.log(data);
    authRegisterPhone({
      first_name: data.firstName,
      last_name: data.lastName,
      phone_number: data.phoneNumber.replaceAll(" ", "").replaceAll("-", ""),
    });
  };
  return (
    <div className={styles.registration}>
      <h1 className={styles.title}>UNION dan ro’yhatdan o’ting</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label for="phoneNumber">Telefon</label>
        <MaskInput
          mask="+\9\9\8 99 999-99-99"
          maskChar=""
          placeholder="Введите номер телефона"
          name="phoneNumber"
          control={control}
          errors={errors}
          disabled={true}
          autoFocus
          validation={{
            required: {
              value: true,
              message: "Raqamni to'liq kiriting",
            },
          }}
          className={styles.numberInput}
        />

        <label for="firstName">Ism</label>
        <input
          type="text"
          placeholder="Ismingizni kiriting"
          {...register("firstName", { required: true })}
          style={errors.firstName ? { borderColor: "#F76659" } : {}}
        />
        {errors.firstName && (
          <p className={styles.errorMessage}>Ismingizni to'liq kiriting</p>
        )}

        <label for="lastName">Familiya</label>
        <input
          type="text"
          placeholder="Familiyangizni kiriting"
          {...register("lastName", { required: true })}
          style={errors.firstName ? { borderColor: "#F76659" } : {}}
        />
        {errors.lastName && (
          <p className={styles.errorMessage}>Familyangizni to'liq kiriting</p>
        )}
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default RegistrationContent;
