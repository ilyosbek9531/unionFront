import React from "react";
import styles from "./Products.module.scss";
import { Container } from "@mui/material";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import ProductsContent from "components/UI/ProductsContent/ProductsContent";

const breadcrumbItems = [
  {
    link: "/",
    label: "Home",
  },
  {
    label: "All Products",
  },
];

const Products = () => {
  return (
    <Container>
      <div className={styles.products}>
        <CBreadCrumbs items={breadcrumbItems} />
        <h3 className={styles.products__title}>Online magazin</h3>
        <ProductsContent />
      </div>
    </Container>
  );
};

export default Products;
