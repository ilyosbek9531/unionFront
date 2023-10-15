import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Skeleton } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./ProductsCards.module.scss";

const skeletonCount = [1, 2, 3, 4, 5, 6];

const ProductsCards = ({
  fetchNextPage,
  hasNextPage,
  data,
  flattenedArray,
}) => {
  console.log("flattenedArray", flattenedArray);
  return (
    <main>
      <InfiniteScroll
        dataLength={data?.pages?.flat()?.length || 10}
        next={fetchNextPage}
        hasMore={hasNextPage}
        endMessage={
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "10px 20px",
            }}
          >
            <b>There are not products</b>
          </div>
        }
        loader={skeletonCount.map((count) => (
          <Skeleton
            key={count}
            variant="rectangular"
            width={"100%"}
            height={"358.81px"}
          />
        ))}
        className={styles.main}
      >
        {flattenedArray?.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            img={item.image_url}
            name={item.title}
            rate={item.rating}
            price={item.price}
            descriptionr={item.description}
            size={item.size}
            is_favourite={item.is_favourite}
          />
        ))}
      </InfiniteScroll>
    </main>
  );
};

export default ProductsCards;
