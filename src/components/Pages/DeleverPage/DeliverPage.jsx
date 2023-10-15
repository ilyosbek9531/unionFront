import React from 'react'
import styles from "./DeleverPage.module.scss";
import { Container } from "@mui/material";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import DeleverPageCOntent from 'components/UI/DeleverPageContent/DeleverPageCOntent';

const breadcrumbItems = [
  {
    link: "/",
    label: "Home",
  },
  {
    link:"/",
    label: "Cart",
  },
  {
    label:"Deliver"
  }

];

const DeliverPage = () => {
  return (
    <Container>
    <div className={styles.deliver_wrapper}>
      <CBreadCrumbs items={breadcrumbItems} />
    </div>
  </Container>
  )
}

export default DeliverPage