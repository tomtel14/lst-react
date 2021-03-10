import React from 'react';

const Image = ({ randomTestimonial }) => {
  return (
    <div className="image-cont">
      <img className="image" src={randomTestimonial.imageSrc} alt="" />
    </div>
  )
}

export default Image;
