import React from "react";
import useProductsContent from "./useProductsContent";
import ProductsFilter from "../ProductsFilter/ProductsFilter";
import styles from "./ProductsContent.module.scss";
import ProductSearchSelect from "../ProductSearchSelect/ProductSearchSelect";
import ProductsCards from "../ProductsCards/ProductsCards";

const ProductsContent = () => {
  const {
    control,
    setValue,
    setCategory,
    setUniversity,
    category,
    university,
  } = useProductsContent();
  return (
    <div className={styles.content}>
      <div className={styles.content__filter}>
        <ProductsFilter
          control={control}
          setValue={setValue}
          setCategory={setCategory}
          setUniversity={setUniversity}
          category={category}
          university={university}
        />
      </div>
      <div className={styles.content__right}>
        <ProductSearchSelect control={control} />
        <ProductsCards />
      </div>
    </div>
  );
};

export default ProductsContent;
