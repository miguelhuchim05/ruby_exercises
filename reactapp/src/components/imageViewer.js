import React, { useContext } from 'react';
import Images from './imageGalleryContext';
import ImageView from './imageView';

const ImageGallery = () => {
  const contextImages = useContext(Images);
  return(
    <div className="photos">
      <ImageView url={contextImages.firstImage} />
      <ImageView url={contextImages.secondImage} />
      <ImageView url={contextImages.thirdImage} />
    </div>
  );
}

export default ImageGallery;
