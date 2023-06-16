import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const useProductsContent = () => {
  const [category, setCategory] = useState("");
  const [university, setUniversity] = useState("");
  const { control, watch, setValue } = useForm({
    defaultValues: {
      price: [0, 2000000],
      "price-from": 0,
      "price-to": 2000000,
      "category-search": "",
      "university-search": "",
      select: {
        label: "Barchasi",
        value: "all",
      },
    },
  });

  console.log("price", watch("price"));
  console.log("price-from", watch("price-from"));
  console.log("price-to", watch("price-to"));
  console.log("category-search", watch("category-search"));
  console.log("university-search", watch("university-search"));
  console.log("category", category);
  console.log("university", university);
  console.log("search", watch("search"));

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
  };
};

export default useProductsContent;
