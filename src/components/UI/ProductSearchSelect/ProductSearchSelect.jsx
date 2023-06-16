import React from "react";
import styles from "./ProductSearchSelect.module.scss";
import Input from "../Form/Input/Input";
import { SearchIcon } from "components/Icons";
import CSelect from "../Form/CSelect/CSelect";

const selectOptions = [
  {
    label: "Barchasi",
    value: "all",
  },
  {
    label: "Price high",
    value: "high",
  },
  {
    label: "Price low",
    value: "low",
  },
];

const ProductSearchSelect = ({ control }) => {
  return (
    <div className={styles.content}>
      <Input
        icon={<SearchIcon />}
        type="text"
        control={control}
        name="search"
        placeholder="Izlash..."
      />
      <div className={styles.content__select}>
        <CSelect name="select" control={control} options={selectOptions} />
      </div>
    </div>
  );
};

export default ProductSearchSelect;
