import React, { useContext } from 'react';
import Images from './imageGalleryContext' 

const ImageGallery = () => {
  const contextImages = useContext(Images);
  return(
    <div className="photos">
      <img src={contextImages.firstImage}/>
      <img src={contextImages.secondImage}/>
      <img src={contextImages.thirdImage}/>
    </div>
  );
}

export default ImageGallery;