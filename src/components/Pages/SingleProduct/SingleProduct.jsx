import React from "react";
import styles from "./SingleProduct.module.scss";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import { Container } from "@mui/material";
import { ArrowRightIcon } from "components/Icons";
import useSingleProduct from "./useSingleProduct";
import SingleProductContent from "components/UI/SingleProductContent/SingleProductContent";

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
  const {} = useSingleProduct();
  return (
    <div className={styles.single}>
      <Container>
        <div className={styles.single__content}>
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
          <SingleProductContent />
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
