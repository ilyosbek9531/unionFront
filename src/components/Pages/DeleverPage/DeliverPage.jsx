import React from "react";
import styles from "./DeleverPage.module.scss";
import { Container } from "@mui/material";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import DeleverContent from "components/UI/DeleverContent/DeleverContent";

const breadcrumbItems = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/cart",
    label: "Cart",
  },
  {
    label: "Delever",
  },
];

const DeliverPage = () => {


  return (
    <Container>
      <div className={styles.deliver_wrapper}>
        <CBreadCrumbs items={breadcrumbItems} />
        <DeleverContent />
      </div>
    </Container>
  );
};

export default DeliverPage;
