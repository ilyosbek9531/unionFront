import { Container } from "@mui/material";
import CBreadCrumbs from "components/UI/CBreadCrumbs/CBreadCrumbs";
import React from "react";
import styles from "./Favorites.module.scss";
import TFComponent from "components/UI/TFComponent/TFComponent";
import { useForm } from "react-hook-form";
import { useGetProductDataInfinite } from "services/products.service";

const breadcrumbItems = [
  {
    link: "/",
    label: "Home",
  },
  {
    label: "Favorites",
  },
];
const skeletonCount = [1, 2, 3, 4, 5, 6];

const Favorites = () => {
  const { control, watch, setValue } = useForm({
    defaultValues: {
      select: {
        label: "Barchasi",
        value: "all",
      },
    },
  });
  const { fetchNextPage, hasNextPage, data } = useGetProductDataInfinite({
    queryParams: {
      user_id: typeof window !== "undefined" && localStorage.getItem("user_id"),
    },
    queryKey: "GET_PRODUCT_FAVORITE_DATA_INFINITE",
  });

  console.log("data", data);
  const flattenedArray = data?.pages?.flatMap((obj) => obj.datas ?? []);
  return (
    <TFComponent
      control={control}
      breadcrumbItems={breadcrumbItems}
      title={"Favorites"}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      data={data}
      flattenedArray={flattenedArray}
      skeletonCount={skeletonCount}
    />
  );
};

export default Favorites;
