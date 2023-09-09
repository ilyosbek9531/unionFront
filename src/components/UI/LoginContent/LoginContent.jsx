import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./LoginContent.module.scss";
import CountDown from "../CountDown/CountDown";
import { useForm } from "react-hook-form";
import MaskInput from "../InputMask/MaskInput";
import { UseAuth, UseVerifyOTP } from "services/auth.service";

const LoginContent = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const { mutate: authMutate } = UseAuth({
    onSuccess: (res) => {
      // router.push("/registration");
      // router.push("/");
      setActivePassword(true);
    },
    onError: (err) => {},
  });
  const { mutate: authVerifyOTPMutate } = UseVerifyOTP({
    onSuccess: (res) => {
      console.log(hi);
    },
    onError: (err) => {},
  });

  const onSubmit = (data) => {
    console.log(data);
    authMutate({
      phone_number: data.phoneNumber.replaceAll(" ", "").replaceAll("-", ""),
    });
    authVerifyOTPMutate;
    ({
      code: data.password,
    });
  };

  const [activePassword, setActivePassword] = useState(false);

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
            <CountDown />
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
