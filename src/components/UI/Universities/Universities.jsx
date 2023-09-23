import React from "react";
import styles from "./Universities.module.scss";
import { Container, useMediaQuery } from "@mui/material";
import Marquee from "react-fast-marquee";
import { useGetUniversities } from "services/main.service";
import { useRouter } from "next/router";

const Universities = () => {
  const width1000px = useMediaQuery("(min-width:1000px)");
  const { push } = useRouter();
  const { data } = useGetUniversities({
    queryParams: {
      limit: 0,
      offset: 0,
    },
  });

  return (
    <div className={styles.universities}>
      <Container>
        <h4>Unverstetlar</h4>
      </Container>
      <div className={styles.marqueeRoot}>
        <Marquee
          className={styles.marquee}
          pauseOnHover={true}
          speed={40}
          direction="left"
          gradientWidth={100}
          gradient={width1000px}
          gradientColor={[255, 255, 255]}
        >
          {data?.datas?.map((el, index) => (
            <div
              className={styles.marquee__item}
              onClick={() => push(`/products?university=${el.id}`)}
            >
              <img src={el.image_url} alt="university" />
              <span>{el.description}</span>
            </div>
          ))}
        </Marquee>
        <Marquee
          className={styles.marquee}
          pauseOnHover={true}
          speed={40}
          direction="right"
          gradientWidth={100}
          gradient={width1000px}
          gradientColor={[255, 255, 255]}
        >
          {data?.datas?.map((el, index) => (
            <div
              className={styles.marquee__item}
              onClick={() => push(`/products?university=${el.id}`)}
            >
              <img src={el.image_url} alt="university" />
              <span>{el.description}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Universities;
