import React from "react";
import TFComponent from "components/UI/TFComponent/TFComponent";
import { useForm } from "react-hook-form";
import RequirementLogin from "components/UI/RequirementLogin/RequirementLogin";
import { useGetFavouriteDataInfinite } from "services/favourites.service";

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
  const { fetchNextPage, hasNextPage, data } = useGetFavouriteDataInfinite({
    params: userId,
    queryParams: {
      order: watch("select").value,
    },
    queryKey: "GET_FAVOURITE_DATA_INFINITE",
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
      warningText="Choose favourite product"
      page="products"
      contentButton="Go to All Products page"
      deleteButton={true}
      visible={false}
    />
  );
};

export default Favorites;
