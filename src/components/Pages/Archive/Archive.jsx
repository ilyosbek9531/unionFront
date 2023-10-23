import { Container } from "@mui/material";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import React from "react";
import styles from "./Archive.module.scss";
import OrderTable from "components/UI/OrderTable/OrderTable";
import { useGetArchiveProducts } from "services/archive.service";

const breadcrumbItems = [
  {
    link: "/",
    label: "Home",
  },
  {
    label: "Archive",
  },
];

const Archive = () => {
  const userId =
  typeof window !== "undefined" && localStorage.getItem("user_id");

const { data: ArchiveProducts } = useGetArchiveProducts({
  queryParams: {
    limit: 10,
    offset: 0,
    user_id: userId,
  },
});
  console.log("ArchiveProducts", ArchiveProducts);
  return (
    <Container>
      <div className={styles.archive}>
        <CBreadCrumbs items={breadcrumbItems} />
        <div className={styles.tables}>
          <div className={styles.tables__boxes}>
            <h1 className={styles.header}>Joriy buyurtmalar</h1>
            <OrderTable allProducts = {ArchiveProducts}/>
          </div>
          <div className={styles.tables__boxes}>
            <h1 className={styles.header}>Buyurtmalar tarixi</h1>
            <OrderTable/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Archive;
