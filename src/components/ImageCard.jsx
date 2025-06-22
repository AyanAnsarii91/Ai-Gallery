import React from 'react';
import './ImageCard.css';

const ImageCard = ({ url }) => {
  return (
    <div className="image-card">
      <img src={url} alt="AI generated" loading="lazy" />
    </div>
  );
};

export default ImageCard;
