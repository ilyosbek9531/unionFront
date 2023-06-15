import React from "react";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import styles from "./Banner.module.scss";

const banner = [
  {
    id: 1,
    img: "/images/banner1.png",
  },
  {
    id: 2,
    img: "/images/banner1.png",
  },
  {
    id: 3,
    img: "/images/banner1.png",
  },
  {
    id: 4,
    img: "/images/banner1.png",
  },
];

const Banner = () => {
  return (
    <Container>
      <div className={styles.banner}>
        <Swiper
          slidesPerView={1}
          loop
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={600}
          navigation
          modules={[Autoplay, Navigation, Pagination]}
          className="custom-swiper"
        >
          {banner?.map((el) => (
            <SwiperSlide key={el.id}>
              <img src={el.img} alt="banner" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Banner;
