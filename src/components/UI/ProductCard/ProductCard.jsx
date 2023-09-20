import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import { BasketIcon, IsFavouriteLikeIcon, LikeIcon } from "components/Icons";
import CRating from "../Rating/Rating";
import Link from "next/link";
import { usePostFavourite } from "services/products.service";

const ProductCard = ({ id, img, name, rate, price, is_favourite }) => {
  const [isFavourite, setIsFavourite] = useState(is_favourite);
  const userId =
    typeof window !== "undefined" && localStorage.getItem("user_id");

  const { mutate: postFavouriteMutation } = usePostFavourite({
    onSuccess: (res) => {},
    onError: (err) => {},
  });
  const onSubmit = (event) => {
    event.stopPropagation();
    const updatedIsFavourite = !isFavourite;
    setIsFavourite(updatedIsFavourite);
    postFavouriteMutation({
      is_favourite: updatedIsFavourite,
      user_id: userId,
      product_id: id,
    });
  };
  console.log(
    "is_favourite",
    id == "ed24b0e6-85e9-4d9a-9927-968bb895fd24" ? is_favourite : "hi"
  );
  return (
    <Link href={`/products/1`}>
      <div className={styles.card}>
        <div className={styles.card__img}>
          <img src={img} alt="productImage" />
          <div
            onClick={(event) => onSubmit(event)}
            className={styles.card__img__like}
          >
            {isFavourite ? (
              <IsFavouriteLikeIcon size={"24"} />
            ) : (
              <LikeIcon width="24" height="24" fill="#00ADB5" />
            )}
          </div>
        </div>
        <div className={styles.card__info}>
          <h4>{name}</h4>
          <div className={styles.card__info__items}>
            <div className={styles.card__info__items__item}>
              <CRating name="read-only" value={rate} />
              <h5>{price}</h5>
            </div>
            <div className={styles.card__info__items__basket}>
              <BasketIcon width="16" height="16" fill="#00ADB5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
