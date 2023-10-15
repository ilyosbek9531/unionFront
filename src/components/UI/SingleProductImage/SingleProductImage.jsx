import React from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./SingleProductImage.module.scss";

const SingleProductImage = ({ colorData, singleProductImg }) => {
  const imageData = singleProductImg?.datas?.find(
    (item) => item.id === colorData
  );

  const images = imageData?.image_urls.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  return (
    <div className={styles.imageGallery}>
      <Gallery
        items={images ?? []}
        showThumbnails
        thumbnailPosition="bottom"
        infinite={true}
        showNav={false}
        slideInterval={3000}
        autoPlay
        showPlayButton={false}
      />
    </div>
  );
};

export default SingleProductImage;
