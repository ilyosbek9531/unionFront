import React from "react";
import { Controller } from "react-hook-form";
import SelectMenu, { components } from "react-select";
import styles from "./CSelect.module.scss";
import { ArrowIcon } from "components/Icons";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowIcon fill="#fff" />
    </components.DropdownIndicator>
  );
};

const CSelect = ({ name = "", control, options }) => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      backgroundColor: "#00ADB5",
      border: "1px solid #6096B4",
      borderRadius: "8px",
      boxShadow: "none",
      height: "48px !important",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all .25s ease-in-out",

      "&:hover": {
        border: "1px solid #6096B4",
      },

      "@media (max-width: 768px)": {
        height: "42px",
      },
    }),
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        cursor: "pointer",
        backgroundColor: "#fff",
        color: isSelected ? "var(--primary-color)" : "#252C32",
        fontSize: "14px",
        lineHeight: "17px",
        borderRadius: "10px",

        ":active": {
          ...styles[":active"],
          backgroundColor: "#fff",
        },
      };
    },
    menu: (styles) => ({
      ...styles,
      boxShadow: "none", // Remove the box shadow from the options wrapper
      background: "#FFFFFF",
      border: "1px solid #E0E0E0",
      borderRadius: "10px",
    }),
    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({
      ...styles,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#9AA6AC",
    }),
    singleValue: (styles) => ({
      ...styles,
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "27px",
      color: "#FFFFFF",
    }),
  };
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => {
          return (
            <SelectMenu
              classNamePrefix="select"
              options={options}
              styles={colourStyles}
              openMenuOnFocus={true}
              isSearchable={false}
              value={value}
              className="basic-multi-select"
              onChange={onChange}
              components={{
                IndicatorSeparator: () => null,
                DropdownIndicator,
                Menu: (props) => (
                  <components.Menu {...props} className={styles.menu} />
                ),
              }}
            />
          );
        }}
      />
    </>
  );
};

export default CSelect;
