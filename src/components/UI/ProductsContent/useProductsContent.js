import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useGetProductDataInfinite } from "services/products.service";

const useProductsContent = () => {
  const userId =
    typeof window !== "undefined" && localStorage.getItem("user_id");

  const { query } = useRouter();
  const { control, watch, setValue } = useForm({
    defaultValues: {
      price: [0, 100000],
      "price-from": 0,
      "price-to": 100000,
      "category-search": "",
      "university-search": "",
      select: {
        label: "Barchasi",
        value: "all",
      },
    },
  });

  const { fetchNextPage, hasNextPage, data } = useGetProductDataInfinite({
    queryParams: {
      min_price: watch("price-from"),
      max_price: watch("price-to"),
      category_id: query.category,
      university_id: query.university,
      rating: query.rating,
      search: watch("search"),
      user_id: userId,
      order: watch("select").value,
    },
    queryKey: "GET_PRODUCT_DATA_INFINITE",
  });

  const flattenedArray = data?.pages?.flatMap((obj) => obj.datas ?? []);

  useEffect(() => {
    setValue("price-from", watch("price")?.[0]);
    setValue("price-to", watch("price")?.[1]);
  }, [watch("price"), setValue]);

  useEffect(() => {
    setValue("price", [watch("price-from"), watch("price-to")]);
  }, [watch("price-from"), watch("price-to")]);

  return {
    control,
    setValue,
    fetchNextPage,
    hasNextPage,
    data,
    flattenedArray,
  };
};

export default useProductsContent;
