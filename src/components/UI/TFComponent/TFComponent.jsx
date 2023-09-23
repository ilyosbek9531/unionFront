import React from "react";
import CBreadCrumbs from "../CBreadCrumbs/CBreadCrumbs";
import { Container, Skeleton } from "@mui/material";
import styles from "./TFComponent.module.scss";
import CSelect from "../Form/CSelect/CSelect";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../ProductCard/ProductCard";
import RequirementLogin from "../RequirementLogin/RequirementLogin";

const selectOptions = [
  {
    label: "Barchasi",
    value: "all",
  },
  {
    label: "Price high",
    value: "price_high",
  },
  {
    label: "Price low",
    value: "price_low",
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
  warningText,
  page,
  contentButton,
  deleteButton,
  userId,
}) => {
  return (
    <Container>
      <div className={styles.products}>
        <CBreadCrumbs items={breadcrumbItems} />
        <div className={styles.content_wrapper}>
          <h3 className={styles.products__title}>{title}</h3>
          <div className={styles.buttons}>
            {visible ? <span>Barchasini o'chirish</span> : ""}
            {deleteButton ? (
              <CSelect
                name="select"
                control={control}
                options={selectOptions}
                className={styles.cselect}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        {!userId ? (
          <span className={styles.warning}>
            <RequirementLogin
              contentButton={"Go to the Login page"}
              warningText={"Please login form website"}
              page={"login"}
            />
          </span>
        ) : (
          <>
            {flattenedArray?.length == 0 ? (
              <span className={styles.warning}>
                <RequirementLogin
                  warningText={warningText}
                  contentButton={contentButton}
                  page={page}
                />
                {console.log(flattenedArray)}
              </span>
            ) : (
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
                  className={styles.main}
                >
                  {flattenedArray?.map((item) => (
                    <ProductCard
                      key={item.id}
                      id={item.product_id}
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
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default TFComponent;
