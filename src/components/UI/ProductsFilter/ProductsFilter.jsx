import React, { useState } from "react";
import styles from "./ProductsFilter.module.scss";
import { FilterIcon } from "components/Icons";
import FilterPrice from "../FilterPrice/FilterPrice";
import FilterRadioButtons from "../FilterRadioButtons/FilterRadioButtons";
import SwipeableDrawerModal from "../SwipeableDrawerModal/SwipeableDrawerModal";
import { useMediaQuery } from "@mui/material";

const ProductsFilter = ({ control, setValue }) => {
  const width1000px = useMediaQuery("(max-width:1000px)");

  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className={styles.filter}>
      <div
        className={styles.filter__title}
        onClick={() => width1000px && setOpenFilter(true)}
      >
        <h5>Filter</h5>
        <FilterIcon />
      </div>
      <div className={styles.filter__body}>
        <FilterPrice control={control} setValue={setValue} />
        <FilterRadioButtons control={control} />
      </div>

      <SwipeableDrawerModal
        open={openFilter}
        onClose={() => setOpenFilter(false)}
        onOpen={() => setOpenFilter(true)}
      >
        <FilterPrice control={control} setValue={setValue} />
        <FilterRadioButtons control={control} />
      </SwipeableDrawerModal>
    </div>
  );
};

export default ProductsFilter;
