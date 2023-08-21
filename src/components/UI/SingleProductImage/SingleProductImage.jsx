import React, { useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SingleProductImage = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const handleSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
    galleryRef.current.slideToIndex(currentIndex);
  };

  return (
    <div className="custom-image-gallery">
      <ImageGallery
        ref={galleryRef}
        items={images}
        thumbnailPosition="left"
        showNav={false}
        onSlide={handleSlide}
        // lazyLoad={true}
        // useTranslate3D={false}
        // isRTL={true}
        // showBullets={true}
        // showIndex={true}
        // autoPlay={false}
        // disableThumbnailScroll={false}
        // disableKeyDown={true}
        // disableSwipe={true}
        // disableThumbnailSwipe={false}
        // indexSeparator="*"
        slideDuration={200}
        // swipingTransitionDuration={100}
        // slideInterval={100}
        // slideOnThumbnailOver={false}
        // flickThreshold={0}
        // swipeThreshold={0}
        // stopPropagation={true}
        // onThumbnailClick={}
        useWindowKeyDown={true}
      />
      <div className="custom-arrows">
        <button
          className="arrow-up"
          onClick={() => handleSlide(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          &uarr;
        </button>
        <button
          className="arrow-down"
          onClick={() => handleSlide(currentIndex + 1)}
          disabled={currentIndex === images.length - 1}
        >
          changed &darr;
        </button>
      </div>
    </div>
  );
};

export default SingleProductImage;
