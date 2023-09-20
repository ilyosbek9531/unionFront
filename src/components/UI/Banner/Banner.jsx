import React from "react";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import styles from "./Banner.module.scss";
import { useGetBanner } from "services/main.service";

const Banner = () => {
  const { data } = useGetBanner({
    queryParams: {
      limit: 10,
      offset: 0,
    },
  });
  return (
    <Container
      sx={{
        "@media (max-width:1000px)": {
          padding: "0 !important",
        },
      }}
    >
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
          {data?.datas?.map((el) => (
            <SwiperSlide key={el.id}>
              <img src={el.image_url} alt="banner" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Banner;
