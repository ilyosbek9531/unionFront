import React, { useEffect } from 'react'
import styles from "./DeleverForm.module.scss"
import Input from '../Form/Input/Input'
import { useForm } from 'react-hook-form'
import MainButton from '../MainButton/MainButton'
import MaskInput from '../InputMask/MaskInput'
const DeleverForm = () => {

  const first_name = typeof window !== "undefined" && localStorage.getItem("first_name");
  const phone_number = typeof window !== "undefined" && localStorage.getItem("phone_number");

  const {control, watch, setValue, formState: {errors}, handleSubmit} = useForm({
    defaultValues: {
      fullname: first_name,
      phoneNumber: phone_number,
    }
  })

  return (
    <form>
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


<MainButton text="Submit" variant="contained" type="submit"/>
    </form>
  )
}

export default DeleverForm