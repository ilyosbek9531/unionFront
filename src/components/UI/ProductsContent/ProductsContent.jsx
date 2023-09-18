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
    fetchNextPage,
    hasNextPage,
    data,
    flattenedArray,
    rating,
    setRating,
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
          rating={rating}
          setRating={setRating}
        />
      </div>
      <div className={styles.content__right}>
        <ProductSearchSelect control={control} />
        <ProductsCards
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          data={data}
          flattenedArray={flattenedArray}
        />
      </div>
    </div>
  );
};

export default ProductsContent;
