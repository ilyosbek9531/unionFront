import React from "react";
import styles from "./SingleProduct.module.scss";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import { Container } from "@mui/material";
import { ArrowRightIcon } from "components/Icons";
import SingleProductContent from "components/UI/SingleProductContent/SingleProductContent";
import TopProducts from "components/UI/TopProducts/TopProducts";
import {
  useGetCategoryProduct,
  useGetSingleProduct,
} from "services/products.service";
import { useRouter } from "next/router";
import singleProduct from "pages/products/[id]";

const breadcrumbItems = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/products",
    label: "Products",
  },
  {
    label: "Switshirt",
  },
];

const SingleProduct = () => {
  const router = useRouter();
  const userId =
    typeof window !== "undefined" && localStorage.getItem("user_id");

  const { data: SingleProduct } = useGetSingleProduct({
    params: router.query.id,
    queryParams: {
      limit: 0,
      offset: 0,
      user_id: userId,
    },
  });

  const { data: CategoryProduct } = useGetCategoryProduct({
    queryParams: {
      limit: 0,
      offset: 0,
      user_id: userId,
      category_id: SingleProduct?.category.id,
    },
    querySettings: {
      enabled: !!SingleProduct,
    },
  });
  return (
    <div className={styles.single}>
      <div className={styles.single__content}>
        <Container>
          <div className={styles.single__top}>
            <CBreadCrumbs items={breadcrumbItems} />
            <div className={styles.single__top__arrows}>
              <div
                className={`${styles.single__top__arrows__arrow} ${styles.single__top__arrows__arrow__reverse}`}
              >
                <ArrowRightIcon fill="#fff" />
              </div>
              <div className={styles.single__top__arrows__arrow}>
                <ArrowRightIcon fill="#fff" />
              </div>
            </div>
          </div>
          <SingleProductContent SingleProduct={SingleProduct} userId={userId} />
        </Container>

        <div className={styles.offerProducts}>
          <Container>
            <h2 className={styles.title}>Tavsiya etilgan tovarlar</h2>
          </Container>
          <TopProducts visible={false} data={CategoryProduct} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
