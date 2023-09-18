import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetProductDataInfinite,
  useGetProducts,
} from "services/products.service";

const useProductsContent = () => {
  const [category, setCategory] = useState("");
  const [university, setUniversity] = useState("");
  const [rating, setRating] = useState("");
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
    },
    queryKey: "GET_PRODUCT_DATA_INFINITE",
  });

  const flattenedArray = data?.pages?.flatMap((obj) => obj.datas ?? []);

  // console.log("price", watch("price"));
  // console.log("price-from", watch("price-from"));
  // console.log("price-to", watch("price-to"));
  // console.log("category-search", watch("category-search"));
  // console.log("university-search", watch("university-search"));
  // console.log("category", category);
  // console.log("university", university);
  // console.log("search", watch("search"));

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
    setCategory,
    setUniversity,
    category,
    university,
    fetchNextPage,
    hasNextPage,
    data,
    flattenedArray,
    rating,
    setRating,
  };
};

export default useProductsContent;
