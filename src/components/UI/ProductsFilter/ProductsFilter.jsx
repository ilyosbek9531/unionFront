import React from "react";
import styles from "./ProductsFilter.module.scss";
import { FilterIcon } from "components/Icons";
import FilterPrice from "../FilterPrice/FilterPrice";
import FilterRadioButtons from "../FilterRadioButtons/FilterRadioButtons";

const ProductsFilter = ({
  control,
  setValue,
  setCategory,
  setUniversity,
  category,
  university,
  rating,
  setRating,
}) => {
  return (
    <div className={styles.filter}>
      <div className={styles.filter__title}>
        <h5>Filter</h5>
        <FilterIcon />
      </div>
      <FilterPrice control={control} setValue={setValue} />
      <FilterRadioButtons
        control={control}
        setCategory={setCategory}
        setUniversity={setUniversity}
        category={category}
        university={university}
        rating={rating}
        setRating={setRating}
      />
    </div>
  );
};

export default ProductsFilter;
