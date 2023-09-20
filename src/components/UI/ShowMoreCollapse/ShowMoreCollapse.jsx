import React, { useState } from "react";
import styles from "./ShowMoreCollapse.module.scss";
import { Collapse } from "@mui/material";

const ShowMoreCollapse = ({
  data,
  initialVisible,
  initialData,
  collapseData,
}) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div className={styles.content}>
      {initialData}

      {data?.length > initialVisible && (
        <>
          <Collapse in={collapse}>{collapseData}</Collapse>
        </>
      )}
      {data?.length > initialVisible && (
        <div className={styles.text} onClick={handleCollapse}>
          <span>{collapse ? "Show Less" : "Show more"}</span>
        </div>
      )}
    </div>
  );
};

export default ShowMoreCollapse;
