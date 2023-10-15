import React, { useEffect, useState } from "react";
import styles from "./SingleProductContent.module.scss";
import SingleProductImage from "../SingleProductImage/SingleProductImage";
import SingleProductInfo from "../SingleProductInfo/SingleProductInfo";
import { useGetSingleProductImage } from "services/products.service";
import { usePostCartProduct } from "services/cart.service";
import { useRouter } from "next/router";
import { queryClient } from "services/http-client";

const SingleProductContent = ({ SingleProduct, userId }) => {
  const router = useRouter();
  const [colorData, setColorData] = useState();
  const [sizeData, setSizeData] = useState();

  const error = colorData && sizeData;
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
      router.push("/cart");
    },
    onError: (err) => {},
  });

  const onSubmit = () => {
    userId ?
    postCartMutation({
      count: 1,
      product_id: router.query.id,
      rgb: colorData,
      size_id: sizeData,
      user_id: userId,
    }) : router.push("/login")
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
        error={error}
      />
    </div>
  );
};

export default SingleProductContent;
