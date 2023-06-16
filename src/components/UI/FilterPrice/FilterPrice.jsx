import React from "react";
import styles from "./FilterPrice.module.scss";
import CAccordion from "../CAccordion/CAccordion";
import RangeSlider from "../RangeSlider/RangeSlider";
import InputFormat from "../InputFormat/InputFormat";

const FilterPrice = ({ control, setValue }) => {
  return (
    <div className={styles.wrapper}>
      <CAccordion title="Цена" id={1}>
        <>
          <RangeSlider
            control={control}
            name="price"
            step={20}
            maxRange={2000000}
            defaultValue={[0, 2000000]}
          />
          <div className={styles.rangeInputs}>
            <InputFormat
              control={control}
              name="price-from"
              placeholder="0"
              customOnChange={(e) => {
                setValue("price-from", +e.target.value.replaceAll(" ", ""));
              }}
              minmax={0}
            />
            <InputFormat
              control={control}
              name="price-to"
              placeholder="2 000 000"
              customOnChange={(e) => {
                setValue("price-to", +e.target.value.replaceAll(" ", ""));
              }}
              minmax={2000000}
            />
          </div>
        </>
      </CAccordion>
    </div>
  );
};

export default FilterPrice;
