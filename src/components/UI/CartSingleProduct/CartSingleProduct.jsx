import React from "react";
import styles from "./CartSingleProduct.module.scss";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DeleteIcon,
  IsFavouriteLikeIcon,
  LikeIcon,
} from "components/Icons";
import { usePostFavourite } from "services/products.service";
import { useDeleteCartProduct } from "services/cart.service";
import { queryClient } from "services/http-client";

const CartSingleProduct = ({ id, userId, title, count, price, image_url, description, is_favourite, product_id }) => {

  const { mutate: postFavouriteMutation } = usePostFavourite({
    onSuccess: (res) => {
      queryClient.refetchQueries(["GET_FAVOURITE_COUNT"]);
    },
    onError: (err) => {},
  });
  const onSubmit = () => {
      postFavouriteMutation({
        is_favourite: !is_favourite,
        user_id: userId,
        product_id: product_id,
      });
  };

  const {mutate: deleteProductMutation}= useDeleteCartProduct({
    onSuccess:(res)=>{
      queryClient.refetchQueries(["GET_CART_PRODUCTS"]);
    },
    onError:(err)=>{}
  })

  const onDelete=()=>{
    deleteProductMutation({
      id,
      user_id: userId
    })
  }
  return (
    <div className={styles.cart_wrapper}>
      <div className={styles.image_wrapper}>
        <img src={image_url} alt="image" />
      </div>
      <div className={styles.contents}>
        <div className={styles.main_content}>
          <div className={styles.title_subtitle}>
            <h3 className={styles.title}>{title}</h3>
            <h3 className={styles.subtitle}>
              {description}
            </h3>
          </div>
          <h1 className={styles.price}>{`${price} sum`}</h1>
        </div>

        <div className={styles.buttons_wrapper}>
          <div className={styles.remove_like_content}>
            <div className={styles.like} onClick={onSubmit}>
              {is_favourite ? <IsFavouriteLikeIcon size={"30"}/> :  <LikeIcon fill="#8C8C8C" />}
              Saqlash
            </div>
            <div className={styles.like} onClick={onDelete}>
              <DeleteIcon />
              O'chirish
            </div>
          </div>
          <div className={styles.count_content}>
            <span>
              <ArrowLeftIcon size="30" fill="#00ADB5" />
            </span>
            <p>{count}</p>
            <span>
              <ArrowRightIcon size="30" fill="#00ADB5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSingleProduct;
