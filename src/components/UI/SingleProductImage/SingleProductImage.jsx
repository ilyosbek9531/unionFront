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

  const imageData = singleProductImg?.datas.find(
    (item) => item.id === colorData
  );

  const images = imageData?.image_urls.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  console.log("images", images);

  return (
    <div className="custom-image-gallery">
      <ImageGallery
        ref={galleryRef}
        items={images ?? []}
        thumbnailPosition="left"
        // showNav={false}
        onSlide={handleSlide}
        // lazyLoad={true}
        infinite={true}
        // useTranslate3D={true}
        // isRTL={true}
        // showBullets={true}
        // showIndex={true}
        // autoPlay={false}
        // disableThumbnailScroll={false}
        // disableKeyDown={true}
        // disableSwipe={true}
        // disableThumbnailSwipe={false}
        // indexSeparator="*"
        // slideDuration={200}
        // swipingTransitionDuration={100}
        // slideInterval={100}
        // slideOnThumbnailOver={false}
        // flickThreshold={0}
        // swipeThreshold={0}
        // stopPropagation={true}
        // useWindowKeyDown={true}
        // originalWidth={"100%"}
        // originalHeight={"auto"}
        // thumbnailHeight={"100px"}
        // thumbnailWidth={"auto"}
      />
      <div className="custom-arrows">
        <button
          className="arrow-up"
          onClick={() => handleSlide(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          <ArrowRightIcon fill="#fff" size="20px" className="icon" />
        </button>
        <button
          className="arrow-down"
          onClick={() => handleSlide(currentIndex + 1)}
          disabled={currentIndex === images?.length - 1}
        >
          <ArrowRightIcon
            fill="#fff"
            size="20px"
            className={styles.arrow_down}
          />
        </button>
      </div>
    </div>
  );
};

export default SingleProductImage;
