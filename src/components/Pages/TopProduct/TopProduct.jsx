import TFComponent from "components/UI/TFComponent/TFComponent";
import React from "react";
import { useForm } from "react-hook-form";
import { useGetProductDataInfinite } from "services/products.service";

const breadcrumbItems = [
  {
    link: "/",
    label: "Home",
  },
  {
    label: "Top Products",
  },
];
const skeletonCount = [1, 2, 3, 4, 5, 6];

const TopProduct = () => {
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
      order: "top_product",
    },
    queryKey: "GET_PRODUCT_TOP_PRODUCT_DATA_INFINITE",
  });

  const flattenedArray = data?.pages?.flatMap((obj) => obj.datas ?? []);
  return (
    <TFComponent
      control={control}
      breadcrumbItems={breadcrumbItems}
      title={"Top Products"}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      data={data}
      flattenedArray={flattenedArray}
      skeletonCount={skeletonCount}
      visible={false}
      userId={true}
    />
  );
};

export default TopProduct;
