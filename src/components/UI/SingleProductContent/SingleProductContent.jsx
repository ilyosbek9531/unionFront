import React from "react";
import styles from "./SingleProductContent.module.scss";
import SingleProductImage from "../SingleProductImage/SingleProductImage";
import SingleProductInfo from "../SingleProductInfo/SingleProductInfo";

const images = [
  {
    original: "/images/product1.png",
    thumbnail: "/images/product1.png",
  },
  {
    original: "/images/product1.png",
    thumbnail: "/images/product1.png",
  },
  {
    original: "/images/product1.png",
    thumbnail: "/images/product1.png",
  },
  {
    original: "/images/product1.png",
    thumbnail: "/images/product1.png",
  },
  {
    original: "/images/product1.png",
    thumbnail: "/images/product1.png",
  },
  {
    original: "/images/product1.png",
    thumbnail: "/images/product1.png",
  },
  {
    original: "/images/product1.png",
    thumbnail: "/images/product1.png",
  },
];

const SingleProductContent = () => {
  return (
    <div className={styles.content}>
      <SingleProductImage images={images} />
      <SingleProductInfo />
    </div>
  );
};

export default SingleProductContent;
