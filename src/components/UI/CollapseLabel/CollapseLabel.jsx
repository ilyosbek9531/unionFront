import React, { useEffect } from "react";
import styles from "./CollapseLabel.module.scss";

const CollapseLabel = ({
  handleChange,
  collapse,
  collapseHeight,
  setShowLabel,
  showLabel,
}) => {
  useEffect(() => {
    const collapseElement = document.querySelector(".collapse-element");

    if (collapseElement && collapseElement.clientHeight > collapseHeight + 30) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  }, [collapse]);

  return (
    showLabel && (
      <div className={styles.readMore} onClick={handleChange}>
        {!collapse ? (
          <div className={styles.text}>
            <span>Show</span>
          </div>
        ) : (
          <div className={styles.text}>
            <span>Hide</span>
          </div>
        )}
      </div>
    )
  );
};

export default CollapseLabel;
