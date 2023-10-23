import React from "react";
import styles from "./DeleverContent.module.scss";
import DeleverForm from "../DeleverForm/DeleverForm";
import CartAllPrice from "../CartAllPrice/CartAllPrice";
import { useGetCartProducts, usePostDeleverProduct } from "services/cart.service";
import { useForm, useWatch } from "react-hook-form";
import { useRouter } from "next/router";

const DeleverContent = () => {
  const router= useRouter();
  const userId =
    typeof window !== "undefined" && localStorage.getItem("user_id");
  const first_name =
    typeof window !== "undefined" && localStorage.getItem("first_name");
  const phone_number =
    typeof window !== "undefined" && localStorage.getItem("phone_number");
  const last_name =
    typeof window !== "undefined" && localStorage.getItem("last_name"); 
  const fullName = `${last_name} ${first_name}`;

  // Fetching data 
  const { data: CartProducts } = useGetCartProducts({
    queryParams: {
      limit: 10,
      offset: 0,
      user_id: userId,
    },
  });
  // Collecting all product ids
  const productids = CartProducts?.datas?.map((product)=> product.product_id)

  const {
    control,
    watch,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      fullname: fullName,
      phoneNumber: phone_number,
      address: "",
    },
  });

  //Calculating product count and price 
  const totalCount = CartProducts?.datas?.reduce((acc, val) => {
    return acc + val.count;
  }, 0);
  const totalPrice = CartProducts?.datas?.reduce((acc, val) => {
    return acc + val.count * val.product_data.price;
  }, 0);


  const { mutate: postDelevertMutation } = usePostDeleverProduct({
    onSuccess: (res) => {
      router.push("/archive")
    },
    onError: (err) => {},
  });

  const onSubmit = () => {
    postDelevertMutation({
      additional_phone: phone_number,
      address:watch("address"),
      cart_product_ids: productids,
      lat: watch("position[0]"),
      long:watch("position[1]"),
      user_id: userId,
    }) 

  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.deliverPage_wrapper}>
        <DeleverForm
          control={control}
          watch={watch}
          setValue={setValue}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </div>
      <span className={styles.price_wrapper}>
        <CartAllPrice
          totalCount={totalCount}
          totalPrice={totalPrice}
          isActive="true"
          onSubmit={onSubmit}
        />
      </span>
    </div>
  );
};

export default DeleverContent;
