import React from "react";
import styles from "./Category.module.scss";
import { Container } from "@mui/material";
import { createCategoryArr } from "utils/createCategoryArr";

const category = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Category = () => {
  return (
    <Container>
      <div className={styles.category}>
        <h4>Category</h4>
        <div className={styles.category__product}>
          {createCategoryArr(category).map((item) => (
            <div className={styles.category__list}>
              {item?.map((elem, index) => (
                <div className={styles[`category__list__${index + 1}`]}>
                  {elem}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Category;
