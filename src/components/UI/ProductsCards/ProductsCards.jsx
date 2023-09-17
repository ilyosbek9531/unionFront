import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Skeleton } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./ProductsCards.module.scss";

const data = [
  {
    id: 1,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 2,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 3,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 4,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 5,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 6,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 7,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 8,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 9,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 10,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
];

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
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
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
          />
        ))}
      </InfiniteScroll>
    </main>
  );
};

export default ProductsCards;

{
  /* <Grid container spacing={{ xs: 2 }}>
        <InfiniteScroll
          dataLength={data?.pages?.flat()?.length || 10}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {flattenedArray?.map((item) => (
            <Grid item key={item.id} xs={12} md={6} lg={4}>
              <ProductCard
                key={item.id}
                img={item.image_url}
                name={item.title}
                rate={item.rating}
                price={item.price}
              />
            </Grid>
          ))}
        </InfiniteScroll>
      </Grid> */
}
