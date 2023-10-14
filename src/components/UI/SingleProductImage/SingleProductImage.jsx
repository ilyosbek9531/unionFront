import { ArrowRightIcon } from "components/Icons";
import styles from "./SingleProductImage.module.scss";
import React, { useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SingleProductImage = ({ colorData, singleProductImg }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const handleSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
    galleryRef.current.slideToIndex(currentIndex);
  };

  const imageData = singleProductImg?.datas?.find(
    (item) => item.id === colorData
  );

  const images = imageData?.image_urls.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  return (
    <>
      <ImageGallery
        items={images ?? []}
        thumbnailPosition="left"
        // ref={galleryRef}
        // additionalClass={styles.gallery}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </>
  );
};

export default SingleProductImage;
