import { Container } from "@mui/material";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import React from "react";
import styles from "./Archive.module.scss";

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
  return (
    <Container>
      <div className={styles.archive}>
        <CBreadCrumbs items={breadcrumbItems} />
        <h3 className={styles.products__title}>Online magazin</h3>
      </div>
    </Container>
  );
};

export default Archive;
