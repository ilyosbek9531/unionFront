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
  return (
    <main>
      <InfiniteScroll
        dataLength={data?.pages?.flat()?.length || 10}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={skeletonCount.map((count) => (
          <Skeleton
            key={count}
            variant="rectangular"
            width={"100%"}
            height={"358.81px"}
          />
        ))}
        endMessage={
          <>
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          </>
        }
        className={styles.main}
      >
        {flattenedArray?.map((item) => (
          <ProductCard
            key={item.id}
            img={item.image_url}
            name={item.title}
            rate={item.rating}
            price={item.price}
            description={item.description}
            size={item.size}
          />
        ))}
      </InfiniteScroll>
    </main>
  );
};

export default ProductsCards;
