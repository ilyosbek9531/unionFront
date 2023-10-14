import React, { useEffect, useState } from "react";
import styles from "./SingleProductContent.module.scss";
import SingleProductImage from "../SingleProductImage/SingleProductImage";
import SingleProductInfo from "../SingleProductInfo/SingleProductInfo";
import { useGetSingleProductImage } from "services/products.service";
import { usePostCartProduct } from "services/cart.service";
import { useRouter } from "next/router";

// const images = [
//   {
//     original: "/images/product1.png",
//     thumbnail: "/images/product1.png",
//   },
//   {
//     original: "/images/product1.png",
//     thumbnail: "/images/product1.png",
//   },
//   {
//     original: "/images/product1.png",
//     thumbnail: "/images/product1.png",
//   },
//   {
//     original: "/images/product1.png",
//     thumbnail: "/images/product1.png",
//   },
//   {
//     original: "/images/product1.png",
//     thumbnail: "/images/product1.png",
//   },
//   {
//     original: "/images/product1.png",
//     thumbnail: "/images/product1.png",
//   },
//   {
//     original: "/images/product1.png",
//     thumbnail: "/images/product1.png",
//   },
// ];

const SingleProductContent = ({ SingleProduct, userId }) => {
  const router= useRouter()
  const [colorData, setColorData] = useState();
  const [sizeData, setSizeData] = useState();
  const [errorMessage, setErrorMessage] = useState("")

  const { data: SingleProductImg } = useGetSingleProductImage({
    queryParams: {
      limit: 0,
      offset: 0,
    },
  });
  

  useEffect(() => {
    setColorData(SingleProductImg?.datas?.[0].id);
  }, [SingleProductImg]);

  const { mutate: postCartMutation } = usePostCartProduct({
    onSuccess: (res) => {
      queryClient.refetchQueries(["GET_CART_PRODUCTS"]);
    },
    onError: (err) => {},
  });
  const onSubmit = () => {
    sizeData && colorData ?  
    postCartMutation({
      count: 1,
      product_id: router.query.id,
      rgb: colorData,
      size_id: sizeData,
      user_id: userId,
      }): setErrorMessage("Please choose size of product")
  };

  return (
    <div className={styles.content}>
      <SingleProductImage
        colorData={colorData}
        singleProductImg={SingleProductImg}
      />
      <SingleProductInfo
        SingleProduct={SingleProduct}
        SingleProductImg={SingleProductImg}
        setColorData={setColorData}
        setSizeData={setSizeData}
        sizeData={sizeData}
        colorData={colorData}
        onSubmit={onSubmit}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default SingleProductContent;
