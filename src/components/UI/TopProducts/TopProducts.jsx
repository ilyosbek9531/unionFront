import React from "react";
import styles from "./TopProducts.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProductCard from "../ProductCard/ProductCard";
import { useGetTopProducts } from "services/main.service";
import Link from "next/link";

const TopProducts = ({ visible = true }) => {
  const { data } = useGetTopProducts({
    queryParams: {
      limit: 10,
      offset: 0,
      order: "top_product",
    },
  });

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
        {data?.datas?.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              key={item.id}
              img={item.image_url}
              name={item.title}
              rate={item.rating}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopProducts;
