import React, { FC } from "react";
import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";
import styles from "./InputMask.module.scss";

const MaskInput = ({
  control,
  name = "",
  mask,
  placeholder,
  errors,
  validation,
  maskChar = "",
  alwaysShowMask = false,
  transform = false,
  required = false,
  autoFocus = false,
  disabled = false,
  phoneValidation = false,
  requiredValue = "",
  ...props
}) => {
  return (
    <div className={styles.inputMask_wrapper}>
      <Controller
        control={control}
        rules={validation}
        name={name}
        render={({ field: { value, onChange, name } }) => {
          return (
            <InputMask
              mask={`${mask}`}
              autoComplete="off"
              maskChar={maskChar}
              autoFocus={autoFocus}
              placeholder={placeholder}
              style={
                errors?.[`${name}`]?.message ? { borderColor: "#F76659" } : {}
              }
              className={styles.input}
              required={required}
              value={requiredValue || value}
              disabled={disabled}
              onChange={(e) =>
                transform
                  ? onChange(e.target.value.toUpperCase())
                  : onChange(e.target.value)
              }
              {...props}
            />
          );
        }}
      />
      {errors?.[`${name}`]?.message && (
        <span className={styles.errMsg}>{errors?.[`${name}`]?.message}</span>
      )}
      {phoneValidation && (
        <span className={styles.errMsg}>invalid phone number</span>
      )}
    </div>
  );
};

export default MaskInput;
