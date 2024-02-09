// ProductSlider.jsx
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface Image {
  original: string;
  thumbnail: string;
}

interface ProductSliderProps {
  images: Image[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ images }) => {
  return (
    <div className="col-lg-6 mb-4">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={true}
        slideDuration={600}
        slideInterval={5000}
        lazyLoad={true}
        autoPlay={true}
      />
    </div>
  );
};

export default ProductSlider;
