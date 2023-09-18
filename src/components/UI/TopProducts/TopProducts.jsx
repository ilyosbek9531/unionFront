import React from "react";
import styles from "./TopProducts.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProductCard from "../ProductCard/ProductCard";

const data = [
  {
    id: 1,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 2,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 3,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 4,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 5,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 6,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 7,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 8,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 9,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
  {
    id: 10,
    img: "/images/product1.png",
    name: "Men shirt and pants",
    rate: 4.5,
    price: "$38.00",
  },
];

const TopProducts = ({ visible = true }) => {
  return (
    <div className={styles.top}>
      {visible ? (
        <div className={styles.top__title}>
          <h5>Top products</h5>
          <span>View all</span>
        </div>
      ) : (
        ""
      )}
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Navigation]}
        loop
        className="custom-swiper-card"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              key={item.id}
              img={item.img}
              name={item.name}
              rate={item.rate}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopProducts;
