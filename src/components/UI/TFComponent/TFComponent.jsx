import React from "react";
import CBreadCrumbs from "../CBreadCrumbs/CBreadCrumbs";
import { Container, Skeleton } from "@mui/material";
import styles from "./TFComponent.module.scss";
import CSelect from "../Form/CSelect/CSelect";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../ProductCard/ProductCard";

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

const TFComponent = ({
  fetchNextPage,
  hasNextPage,
  data,
  flattenedArray,
  control,
  breadcrumbItems,
  title,
  skeletonCount,
  visible,
}) => {
  return (
    <Container>
      <div className={styles.products}>
        <CBreadCrumbs items={breadcrumbItems} />
        <div className={styles.content_wrapper}>
          <h3 className={styles.products__title}>{title}</h3>
          <div className={styles.buttons}>
            {visible ? <span>Barchasini o'chirish</span> : ""}
            <CSelect
              name="select"
              control={control}
              options={selectOptions}
              className={styles.cselect}
            />
          </div>
        </div>
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
      </div>
    </Container>
  );
};

export default TFComponent;
