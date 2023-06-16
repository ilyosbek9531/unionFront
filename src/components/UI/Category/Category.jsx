import React from "react";
import styles from "./Category.module.scss";
import { Container } from "@mui/material";
import { createCategoryArr } from "utils/createCategoryArr";

const category = [
  {
    id: 1,
    img: "/images/category1.png",
    name: "Jemferlar",
  },
  {
    id: 2,
    img: "/images/category1.png",
    name: "Jemferlar",
  },
  {
    id: 3,
    img: "/images/category1.png",
    name: "Jemferlar",
  },
  {
    id: 4,
    img: "/images/category1.png",
    name: "Jemferlar",
  },
  {
    id: 5,
    img: "/images/category1.png",
    name: "Jemferlar",
  },
  {
    id: 6,
    img: "/images/category1.png",
    name: "Jemferlar",
  },
];

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
                  <img src={elem.img} alt="categoryImg" />
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
