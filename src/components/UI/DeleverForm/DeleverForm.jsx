import React, { useEffect } from "react";
import styles from "./DeleverForm.module.scss";
import Input from "../Form/Input/Input";
import { useForm } from "react-hook-form";
import MainButton from "../MainButton/MainButton";
import MaskInput from "../InputMask/MaskInput";
import YandexMap from "../YandexMap/YandexMap";
const DeleverForm = ({control, watch, setValue, errors}) => {

  return (
    <form className={styles.delever}>
      <Input
        type="text"
        control={control}
        name="fullname"
        placeholder="Full name"
      />
      <MaskInput
        mask="+\9\9\8 99 999-99-99"
        maskChar=""
        placeholder="Telefon raqamingizni kiriting"
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

      <YandexMap
        control={control}
        name="address"
        setValue={setValue}
        errors={errors}
      />
    </form>
  );
};

export default DeleverForm;
