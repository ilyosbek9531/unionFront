import React from "react";
import styles from "./SingleProductContent.module.scss";
import SingleProductImage from "../SingleProductImage/SingleProductImage";
import SingleProductInfo from "../SingleProductInfo/SingleProductInfo";
import {
  useGetSingleProduct,
  useGetSingleProductImage,
} from "services/products.service";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { data: SingleProduct } = useGetSingleProduct({
    params: router.query.id,
    queryParams: {
      limit: 0,
      offset: 0,
    },
  });

  const { data: SingleProductImg } = useGetSingleProductImage({
    queryParams: {
      limit: 0,
      offset: 0,
    },
  });

  console.log("SingleProductImg", SingleProductImg);

  return (
    <div className={styles.content}>
      <SingleProductImage images={images} />
      <SingleProductInfo
        SingleProduct={SingleProduct}
        SingleProductImg={SingleProductImg}
      />
    </div>
  );
};

export default SingleProductContent;
