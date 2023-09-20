import React from "react";
import TFComponent from "components/UI/TFComponent/TFComponent";
import { useForm } from "react-hook-form";
import { useGetProductDataInfinite } from "services/products.service";
import RequirementLogin from "components/UI/RequirementLogin/RequirementLogin";

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
const userId = typeof window !== "undefined" && localStorage.getItem("user_id");
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
      user_id: userId,
    },
    queryKey: "GET_PRODUCT_FAVORITE_DATA_INFINITE",
  });

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
