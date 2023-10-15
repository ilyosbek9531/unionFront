import React from "react";
import { Breadcrumbs } from "@mui/material";

import styles from "./CBreadCrumbs.module.scss";
import { useRouter } from "next/router";
import { ArrowRightIcon } from "components/Icons";

const CBreadCrumbs = ({ items }) => {
  const router = useRouter();

  const navigateHandler = (link, index) => {
    if (index === items?.length - 1) return null;
    router.push(link);
  };
  return (
    <div className={styles.crumpsRoot}>
      <Breadcrumbs separator={<ArrowRightIcon />}>
        {items?.map((item, index) => (
          <div
            key={index}
            className={`${styles.breadcrumb} ${
              index + 1 === items.length && styles.breadcrumb__last
            }`}
            onClick={() => navigateHandler(item.link, index)}
          >
            {item.label}
          </div>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default CBreadCrumbs;
