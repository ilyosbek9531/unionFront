import React from "react";
import styles from "./Category.module.scss";
import { Container, useMediaQuery } from "@mui/material";
import { createCategoryArr } from "utils/createCategoryArr";
import { useGetCategories } from "services/main.service";
import { useRouter } from "next/router";

const Category = () => {
  const width1000px = useMediaQuery("(max-width:1000px)");
  const checkWidth = width1000px ? 2 : 6;
  const { push } = useRouter();
  const { data } = useGetCategories({
    queryParams: {
      limit: 0,
      offset: 0,
    },
  });
  return (
    <Container>
      <div className={styles.category}>
        <h4>Category</h4>
        <div className={styles.category__product}>
          {createCategoryArr(data?.datas ?? [], checkWidth).map((item) => (
            <div className={styles.category__list}>
              {item?.map((elem, index) => (
                <div
                  key={elem.id}
                  className={styles[`category__list__${index + 1}`]}
                  onClick={() => push(`/products?category=${elem.id}`)}
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
