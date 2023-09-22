import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./LoginContent.module.scss";
import CountDown from "../CountDown/CountDown";
import { useForm } from "react-hook-form";
import MaskInput from "../InputMask/MaskInput";
import { UseAuth, UseVerifyOTP } from "services/auth.service";
import ShowAlert from "../ShowAlert/ShowAlert";

const LoginContent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const [activePassword, setActivePassword] = useState(false);

  const { mutate: authMutate } = UseAuth({
    onSuccess: (res) => {
      setActivePassword(true);
    },
    onError: (err) => {},
  });

  const { mutate: authVerifyOTPMutate } = UseVerifyOTP({
    onSuccess: (res) => {
      localStorage.setItem("phone_number", res.phone_number);
      if (res.user_found) {
        localStorage.setItem("first_name", res.first_name);
        localStorage.setItem("user_id", res.user_id);
        localStorage.setItem("token", res.token);
        router.push("/");
        setTimeout(() => {
          window.location.reload();
        }, 700);
      } else {
        router.push("/registration");
      }
    },
    onError: (err) => {
      <ShowAlert severity={"error"}>{err.error}</ShowAlert>;
    },
  });

  const onSubmit = (data) => {
    if (!activePassword) {
      authMutate({
        phone_number: data.phoneNumber.replaceAll(" ", "").replaceAll("-", ""),
      });
    } else {
      authVerifyOTPMutate({
        phone_number: data.phoneNumber.replaceAll(" ", "").replaceAll("-", ""),
        code: data.password,
      });
    }
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.title}>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_wrapper}>
        <label className={styles.form_title} for="phoneNumber">
          Telefon
        </label>
        <MaskInput
          mask="+\9\9\8 99 999-99-99"
          maskChar=""
          placeholder="Введите номер телефона"
          name="phoneNumber"
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
        {activePassword ? (
          <>
            <label className={styles.form_title} for="password">
              Faollashtirish kodi
            </label>
            <input
              type="number"
              {...register("password", { required: true })}
              placeholder="Kodni kiriting"
              className={styles.numberInput}
            />
            <CountDown authMutate={authMutate} getValues={getValues} />
          </>
        ) : (
          ""
        )}
        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginContent;
