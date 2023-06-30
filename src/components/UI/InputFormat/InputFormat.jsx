import React from "react";
import styles from "./InputFormat.module.scss";
import { Controller } from "react-hook-form";

export default function InputFormat({
  disabled,
  name = "",
  defaultValue,
  control,
  errors,
  validation,
  autoComplete = "off",
  placeholder,
  customOnChange,
  minmax,
}) {
  return (
    <div style={{ width: "100%" }}>
      <Controller
        control={control}
        rules={validation}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { value, onChange, name } }) => {
          return (
            <div
              style={
                errors?.[`${name}`]?.message ? { borderColor: "#F76659" } : {}
              }
              className={`${styles.inputWrapper} ${
                disabled && styles.disabled
              }`}
            >
              <input
                placeholder={placeholder}
                type="text"
                disabled={disabled}
                autoComplete={autoComplete}
                value={
                  value == minmax
                    ? ""
                    : value
                        .toLocaleString("en-US", { useGrouping: true })
                        .replace(/,/g, " ")
                }
                onChange={(e) => {
                  const currentValue = e.target.value;
                  const lastLetter = currentValue[currentValue.length - 1];
                  const checker =
                    lastLetter == 0 ||
                    lastLetter == 1 ||
                    lastLetter == 2 ||
                    lastLetter == 3 ||
                    lastLetter == 4 ||
                    lastLetter == 5 ||
                    lastLetter == 6 ||
                    lastLetter == 7 ||
                    lastLetter == 8 ||
                    lastLetter == 9;
                  if (checker || !currentValue.length) {
                    onChange(e);
                    customOnChange(e);
                  }
                }}
              />
            </div>
          );
        }}
      />
    </div>
  );
}
