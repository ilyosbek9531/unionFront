import React, { useEffect } from 'react'
import styles from "./DeleverForm.module.scss"
import Input from '../Form/Input/Input'
import { useForm } from 'react-hook-form'
import MainButton from '../MainButton/MainButton'
import MaskInput from '../InputMask/MaskInput'
const DeleverForm = () => {

  const first_name = typeof window !== "undefined" && localStorage.getItem("first_name");
  const phone_number = typeof window !== "undefined" && localStorage.getItem("phone_number");
  const last_name = typeof window !== "undefined" && localStorage.getItem("last_name");
  const fullName = `${last_name} ${first_name}`

  const {control, watch, setValue, formState: {errors}, handleSubmit} = useForm({
    defaultValues: {
      fullname: fullName,
      phoneNumber: phone_number,
      address: "",
    }
  })

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

        <Input 
           type="text"
           control={control}
           name="address"
           placeholder="Address"
        />

        <div className={styles.map_wrapper}>
          
        </div>

    </form>
  )
}

export default DeleverForm