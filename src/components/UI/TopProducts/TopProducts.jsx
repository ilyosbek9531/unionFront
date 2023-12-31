import React from "react";
import styles from "./TopProducts.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProductCard from "../ProductCard/ProductCard";
import Link from "next/link";

const TopProducts = ({ data, visible = true }) => {
  return (
    <div className={styles.top}>
      {visible ? (
        <div className={styles.top__title}>
          <h5>Top products</h5>
          <Link href="/topproducts">
            <span>View all</span>
          </Link>
        </div>
      ) : (
        ""
      )}
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Navigation]}
        loop
        className="custom-swiper-card"
        breakpoints={{
          300: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {data?.datas?.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.image_url}
              name={item.title}
              rate={item.rating}
              price={item.price}
              descriptionr={item.description}
              size={item.size}
              is_favourite={item.is_favourite}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopProducts;
