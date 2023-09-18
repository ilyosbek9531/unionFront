import React from "react";
import styles from "./ProductsFilter.module.scss";
import { FilterIcon } from "components/Icons";
import FilterPrice from "../FilterPrice/FilterPrice";
import FilterRadioButtons from "../FilterRadioButtons/FilterRadioButtons";

const ProductsFilter = ({ control, setValue }) => {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__title}>
        <h5>Filter</h5>
        <FilterIcon />
      </div>
      <FilterPrice control={control} setValue={setValue} />
      <FilterRadioButtons control={control} />
    </div>
  );
};

export default ProductsFilter;
