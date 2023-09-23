import React, { useEffect, useState } from "react";
import styles from "./SingleProductContent.module.scss";
import SingleProductImage from "../SingleProductImage/SingleProductImage";
import SingleProductInfo from "../SingleProductInfo/SingleProductInfo";
import { useGetSingleProductImage } from "services/products.service";

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

const SingleProductContent = ({ SingleProduct }) => {
  const [colorData, setColorData] = useState();
  const [sizeData, setSizeData] = useState();

  const { data: SingleProductImg } = useGetSingleProductImage({
    queryParams: {
      limit: 0,
      offset: 0,
    },
  });

  useEffect(() => {
    setColorData(SingleProductImg?.datas[0].id);
  }, [SingleProductImg]);

  return (
    <div className={styles.content}>
      <SingleProductImage
        colorData={colorData}
        images={images}
        singleProductImg={SingleProductImg}
      />
      <SingleProductInfo
        SingleProduct={SingleProduct}
        SingleProductImg={SingleProductImg}
        setColorData={setColorData}
        setSizeData={setSizeData}
      />
    </div>
  );
};

export default SingleProductContent;
