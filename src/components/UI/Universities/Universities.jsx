import React from "react";
import styles from "./Universities.module.scss";
import { Container } from "@mui/material";
import Marquee from "react-fast-marquee";

const universitiesMarque = [
  {
    id: 1,
    img: "/images/university1.png",
    name: "Toshkent Axborot Texnologiya Unversteti",
  },
  {
    id: 2,
    img: "/images/university1.png",
    name: "Toshkent Axborot Texnologiya Unversteti",
  },
  {
    id: 3,
    img: "/images/university1.png",
    name: "Toshkent Axborot Texnologiya Unversteti",
  },
  {
    id: 4,
    img: "/images/university1.png",
    name: "Toshkent Axborot Texnologiya Unversteti",
  },
  {
    id: 5,
    img: "/images/university1.png",
    name: "Toshkent Axborot Texnologiya Unversteti",
  },
];

const Universities = () => {
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
          gradient={true}
          gradientColor={[255, 255, 255]}
        >
          {universitiesMarque.map((el, index) => (
            <div className={styles.marquee__item}>
              <img src={el.img} alt="university" />
              <span>{el.name}</span>
            </div>
          ))}
        </Marquee>
        <Marquee
          className={styles.marquee}
          pauseOnHover={true}
          speed={40}
          direction="right"
          gradientWidth={100}
          gradient={true}
          gradientColor={[255, 255, 255]}
        >
          {universitiesMarque.map((el, index) => (
            <div className={styles.marquee__item}>
              <img src={el.img} alt="university" />
              <span>{el.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Universities;
