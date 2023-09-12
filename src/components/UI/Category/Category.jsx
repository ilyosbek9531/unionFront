import React from "react";
import styles from "./Category.module.scss";
import { Container } from "@mui/material";
import { createCategoryArr } from "utils/createCategoryArr";
import { useGetCategories } from "services/main.service";

const Category = () => {
  const { data } = useGetCategories({
    queryParams: {
      limit: 0,
      offset: 0,
    },
  });
  // console.log("1", createCategoryArr(data?.datas ?? []));
  return (
    <Container>
      <div className={styles.category}>
        <h4>Category</h4>
        <div className={styles.category__product}>
          {createCategoryArr(data?.datas ?? []).map((item) => (
            <div className={styles.category__list}>
              {item?.map((elem, index) => (
                <div
                  key={elem.id}
                  className={styles[`category__list__${index + 1}`]}
                >
                  <img src={elem.image_url} alt="categoryImg" />
                  <span>{elem.name}</span>
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
